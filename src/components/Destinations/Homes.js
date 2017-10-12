import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios';

class Homes extends Component {
    constructor(){
        super() 

        this.state = {
            query: ''
        }

    }

    componentDidMount(){
        axios.get('/displayall')
             .then( res => {
                 console.log(res.data)  //currently displaying all homes as objects in console :) randomly breaks in console..? 'cannot read property 'display_all_homes' of undefined
             })
    }

    handleQueryChange(val){
        this.setState({
            query: val
        })
    }

    handleSearch() {
        axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.query}.json?access_token=pk.eyJ1Ijoiam9zaWJsYWlyIiwiYSI6ImNqOGtub202YjBnMzUycW11cXRtM3JwMHUifQ.W4ZSzi0wEv3CNC8729Jpcw&types=place&limit=10&autocomplete=true` )
        .then( response => {
           console.log(response) //successfully displays objects with the ^^^ query in console log :) still need to app.get to get all homes with matching location
       })
    }

    render() {
        return(
            <div className='homes_container'>
                <Nav />
                <div className='search_container'>
                    <span>I'd Like to Stay In...</span>
                    <input placeholder='e.g. Australia, Amsterdam, Paris' onChange={ e => this.handleQueryChange(e.target.value)}/>
                    <button onClick={ () => this.handleSearch() }>Search</button>
                </div>

                <div className='homes_list'>
                    
                </div>

                <Footer />

            </div>
        )
    }
}

export default Homes;