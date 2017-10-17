import axios from 'axios';

const initialState = {
   userData: { 
    userid: 0,
    country: '',
    address: '',
    st: '',
    city: '',
    zip: '',
    bedrooms: 0,
    bathrooms: 0,
    guests: 0,
    beds: 0,
    title: '',
    about: '',
    img: ''
   }
}

const FULFILLED = "_FULFILLED";
// const PENDING = "_PENDING";
// const REJECTED = '_REJECTED';
const ADD_HOME = 'ADD_HOME';
const UPDATE_USER = 'UPDATE_USER';


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_HOME + FULFILLED:
            return Object.assign({}, state, { userid: action.payload.userid, country: action.payload.country, address: action.payload.address, st: action.payload.st, city: action.payload.city, zip: action.payload.zip, bedrooms: action.payload.bedrooms, bathrooms: action.payload.bathrooms, guests: action.payload.guests, title: action.payload.title, about: action.payload.about, img: action.payload.img });
        case UPDATE_USER + FULFILLED:
            return Object.assign({}, state, { userData: action.payload });
        default:
            return state;
    }
}


//does not yet redirect back to profile after adding home
export function addHome(userid, country, address, st, city, zip, bathrooms, bedrooms, guests, beds, title, about, img) {
    axios.post('/addhome', {user_id: userid, country: country, address: address, state: st, city: city, zip: zip, bathrooms: bathrooms, bedrooms: bedrooms, guests: guests, beds: beds, title: title, about_body: about, img: img  })
        .then(results => {
            return results;
        })
    return {
        type: ADD_HOME,
        payload: { userid, country, address, st, city, zip, bathrooms, bedrooms, guests, beds, title, about, img }
    }
}

export function fetchUserData(id) {
    console.log(id)
    // const userData = axios.get(`/displaymyhome/${id}`)

    const userData = axios.get(`http://localhost:3005/displaymyhome/${id}`)

    .then(response => {
        console.log(response.data)
            return response.data   //no longer sets the userid on state..? 
        })
         return {
             type: UPDATE_USER,
             payload: userData
         }
    
}

