require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0');
      cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,  
    resave: false,                
    saveUninitialized: true        
}))

app.use(passport.initialize());
app.use(passport.session()); 

massive(process.env.CONNECTION_STRING).then( db => { 
    app.set('db', db);  
})   

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN, 
    clientID: process.env.AUTH_CLIENT_ID,           
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL 
}, 
function(accessToken, refreshToken, extraParams, profile, done) { 
    const db = app.get('db'); 

    db.find_user([ profile.identities[0].user_id ]) 
      .then( user => {
          if (user[0]) { 
            return done(null, user[0].id)    
          } 
          else {
            const user = profile._json;  
            db.create_user( [user.given_name, user.family_name, user.email, user.picture, user.identities[0].user_id] )
              .then( user => {
                  return done(null, user[0].id);
              })
          }
      })

}))

app.get('/auth', passport.authenticate('auth0')); 
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/profile',  
    failureRedirect: '/auth'
}));
app.get('/auth/me', (req, res) => { 
    if(!req.user) {
        return res.status(404).send('User Not Found');
    } 
    else {
        return res.status(200).send(req.user);
    }
})

app.get('/auth/logout', (req, res) => {
    req.logOut(); 
    res.redirect(302, 'http://localhost:3000/#/')
})

app.post('/addhome', (req, res) => {
    const db = req.app.get('db');
    const home = req.body;
    
    db.add_home( [home.user_id, home.country, home.address, home.state, home.city, home.zip, home.bathrooms, home.bedrooms, home.guests, home.bed, home.title, home.about_body, home.img] )
      .then( results => res.send(results[0]) );
})

app.get('/displayall', (req, res) => {
    const db = req.app.get('db');

    db.display_all_homes().then( homes => {
        res.send(homes);
    })
})

app.get('/displaymyhome/:id', (req, res) => {
    const db = req.app.get('db');
    const id = req.params.id;

    db.display_my_home([id]).then( home => {
        res.send(home);
    })
})

app.delete('/removehome/:id', (req, res) => {
    const db=req.app.get('db');
    console.log(req.params);
    const id=req.params.id;

    db.delete_home([id]).then( () => res.send() )  
})

passport.serializeUser( ( id, done ) => { 
    done(null, id);   
})

passport.deserializeUser( ( id, done ) => { 
    app.get('db').find_current_user( [id] )
       .then( user => {
          
            done(null, user[0]);    
       })
     
})


const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));