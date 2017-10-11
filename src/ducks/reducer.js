import axios from 'axios';

const initialState = {
    userid: 0,
    country: '',
    address: '',
    st: '',
    city: '',
    zip: '',
    bedrooms: 0,
    bathrooms: 0,
    guests: 0,
    title: '',
    about: '',
    img: ''
}

const ADD_HOME = 'ADD_HOME';
const UPDATE_USER='UPDATE_USER';


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_HOME:
            return Object.assign( {}, state, action.payload );
        case UPDATE_USER: 
            return Object.assign( {}, state, { userid: action.payload });
        default:
            return state;
    }
}

export function addHome(userid, country, address, st, city, zip, bedrooms, bathrooms, guests, title, about, img) {
    return{
        type: ADD_HOME,
        payload: { userid, country, address, st, city, zip, bedrooms, bathrooms, guests, title, about, img }
    }
}

export function updateUserId() {
    const userData = axios.get('/auth/me')
                    .then(res => {
                        return res.data.id
                    })
    return {
        type: UPDATE_USER,
        payload: userData
    }
}