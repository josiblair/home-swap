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
        console.log(req);

        db.searched_homes().then( homes => { //need to get searched item as parameter
            res.send(homes);
        })
    },

    updateHome: (req, res) => {
        const db=req.app.get('db');
        const id=req.params.id;
    
        db.update_home([id])
        .then( () => res.send() );  
    }
}