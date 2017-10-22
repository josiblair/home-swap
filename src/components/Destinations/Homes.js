import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './Homes.css';
import {connect} from 'react-redux';
import {getSearchedHomes} from '../../ducks/reducer';

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
        this.props.getSearchedHomes(this.state.query);
        
        axios.get('/searchedhomes')
             .then( res => {
                 console.log(res.data)
             })
    }

    render() {

        // const homes = res.data.map( (home, i) => {
        //             return <div key={i} className='homes'> 
        //             <img src={home.img} alt='' />
        //             <span>{home.title}</span>
        //             <span>{home.city}, {home.country}</span>
        //         </div>

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



export default connect(null, {getSearchedHomes})(Homes);