module.exports= {
    addHome: (req, res) => {
        const db = req.app.get('db');
        const home = req.body;
        
        db.add_home( [home.user_id, home.country, home.address, home.state, home.city, home.zip, home.bathrooms, home.bedrooms, home.guests, home.bed, home.title, home.about_body, home.img] )
          .then( results => { 
            res.send(results[0]) });
    },

    displayAll: (req, res) => {
        const db = req.app.get('db');
    
        db.display_all_homes().then( homes => {
            res.send(homes);
        })
    },

    displayMyHome: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;
    
        db.display_my_home([id]).then( home => {
            res.send(home[0]);
        })
    },

    searchedHomes: (req, res) => {
        const db = req.app.get('db');
        console.log(req.params);
        //query = req.params

        // axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.query}.json?${process.env.API_ACCESS_TOKEN}`)
        //    .then( response => {
        //        res.status(200).response.data
        //    })
       

        db.searched_homes().then( homes => {
            res.send(homes);
        })
    },

    updateHome: (req, res) => {
        const db=req.app.get('db');
        const id=req.params.id;
        const home = req.body;
    
        db.update_home([id, home.country, home.address, home.state, home.city, home.zip, home.bathrooms, home.bedrooms, home.guests, home.bed, home.title, home.about_body, home.img])
        .then( (results) => res.send(results[0]) );  
    }
}