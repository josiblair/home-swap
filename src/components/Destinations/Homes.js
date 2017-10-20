import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Homes.css';

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
                 console.log(res.data)  //currently displaying all homes as array of objects in console :) just don't know how to go about displaying the data in my jsx :(
             })                         //do i need to map over array objects then display them that way??
    }

    handleQueryChange(val){
        this.setState({
            query: val
        })
    }

    handleSearch() {
        axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.query}.json?${process.env.API_ACCESS_TOKEN}` )
        .then( response => {
            console.log(response) //successfully displays objects with the ^^^ query in console log :) still need to app.get to get all homes with matching location... possibly another axios.get to display homes containing query..?!                    
       })
    }

    render() {

        // const homes = res.data.map( (home, i) => {
        //     <div key={i} className='home_container'>
        //     </div>
        // })

        return(
            <div className='homes_container'>
                <Nav />
                <div className='search_container'>
                    <span className='stay'>I'd Like to Stay In...</span>
                    <input className='search_input' placeholder='e.g. Australia, New York City, Paris' onChange={ e => this.handleQueryChange(e.target.value)}/>
                    <button className='search_button' onClick={ () => this.handleSearch() }>Search</button>
                </div>

                <div className='homes_list'>
                    
                </div>

                <Footer />

            </div>
        )
    }
}

export default Homes;