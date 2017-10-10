require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0');

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,  
    resave: false,                
    saveUnitialized: true        
}))

app.use(passport.initialize());
app.use(passport.session());      

massive(process.env.CONNECTION_STRING).then( db => {  //in .env file --> add new database in heroku and copy the uri string then add ?ssl=true to the end
    app.set('db', db);  
})   

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,                 //in order to get this info, create a new client on Auth0
    clientID: process.env.AUTH_CLIENT_ID,            //all stored in .env file
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL 
}, 
function(accessToken, refreshToken, extraParams, profile, done) { 
    const db = app.get('db'); 
   
    db.find_user([ profile.identities[0].user_id ])     //can console.log profile to find what info you need or create a breakpoint to find the same
      .then( user => {
          if (user[0]) { 
            return done(null, user[0].id)    
          } 
          else {
            const user = profile._json;  
            db.create_user( [user.name, user.email, user.picture, user.identities[0].user_id] )
              .then( user => {
                  return done(null, user[0].id);
              })
          }
      })

}))

app.get('/auth', passport.authenticate('auth0')); 
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/profile', //whatever running the front-end on 
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