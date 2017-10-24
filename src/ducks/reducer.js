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
    img: '',
    sentMessages: [],
    receivedMessages: [],
    searchedCity: []
   }
}

const FULFILLED = "_FULFILLED";
const ADD_HOME = 'ADD_HOME';
const UPDATE_USER = 'UPDATE_USER';
const GET_SEARCHED_HOMES = 'GET_SEARCHED_HOMES';
const SEND_MESSAGE = 'SEND_MESSAGE';
// const SENT_MESSAGES = 'SENT_MESSAGES';
// const RECEIVED_MESSAGES = 'RECEIVED_MESSAGES';



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_HOME + FULFILLED:
            return Object.assign({}, state, { userid: action.payload.userid, country: action.payload.country, address: action.payload.address, st: action.payload.st, city: action.payload.city, zip: action.payload.zip, bedrooms: action.payload.bedrooms, bathrooms: action.payload.bathrooms, beds: action.payload.beds, guests: action.payload.guests, title: action.payload.title, about: action.payload.about, img: action.payload.img, hasHome: action.payload.hasHome });
        case UPDATE_USER + FULFILLED:
            return Object.assign({}, state, { userData: action.payload });
        case GET_SEARCHED_HOMES + FULFILLED:
            return Object.assign({}, state, { searchedCity: action.payload });
        case SEND_MESSAGE + FULFILLED:
            return state;
        // case SENT_MESSAGES + FULFILLED:
        //     return Object.assign( {}, state, { sentMessages: [...state.sentMessages, action.payload] } )
        // case RECEIVED_MESSAGES + FULFILLED:
        //     return Object.assign( {}, state, { receivedMessages: [...state.receivedMessages, action.payload] } );
        default:
            return state;
    }
}

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
    const userData = axios.get(`http://localhost:3005/displaymyhome/${id}`)

    .then(response => {
            return response.data  
        })
         return {
             type: UPDATE_USER,
             payload: userData
         }
    
}

export function getSearchedHomesByCity(country, city) {
    const homes = axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/'${city}'.json?${process.env.API_ACCESS_TOKEN}&country=${country}` )
        .then( response => {
            console.log('searched:',response);    //return latitude/longitude of city??              
   })
   return {
       type: GET_SEARCHED_HOMES,
       payload: homes
   }
}


export function sendMessage(senderId, receiverId, messageBody) {
        axios.post('/sendmessage', { senderId: senderId, receiverId: receiverId, messageBody: messageBody })
                          .then( message => {
                              return message.data;
                          })
        return {
            type: SEND_MESSAGE
        }
}

// export function sentMessages(senderId) {
//     const messages = axios.get(`/sentmessages/${senderId}`)
//                     .then( messages => {
//                         return messages.data;
//                     })
//         return {
//             type: SENT_MESSAGES,
//             payload: messages
//         }
// }


// export function receivedMessages(senderId) {
//     const messages = axios.get(`/receivedmessages/${senderId}`)
//                      .then( messages => {
//                          return messages.data;
//                      })
//         return {
//             type: RECEIVED_MESSAGES,
//             payload: messages
//         }
// }
