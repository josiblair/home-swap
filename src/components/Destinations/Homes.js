import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Homes.css';
import {connect} from 'react-redux';
import {getSearchedHomesByCity} from '../../ducks/reducer';

class Homes extends Component {
    constructor(){
        super() 

        this.state = {
            country: '',
            city: '',
            homes: []
        }

    }

    componentDidMount(){
        axios.get('/displayall')
             .then( res => {
                this.setState({
                    homes: res.data
                })
            })                         
    }

    handleCountryChange(val){
        this.setState({
            country: val
        })
    }

    handleCityChange(val){
        this.setState({
            city: val
        })
    }

    handleSearch() {
        this.state.city && this.state.country ? 
        this.props.getSearchedHomesByCity(this.state.country, this.state.city) 
        : alert('Please enter both a valid Country & City to search through the homes');
        
        axios.get('/searchedhomes')
             .then( res => {
                 console.log(res.data)
             })
    }

    render() {
        
        const homes = this.state.homes.map( (home, i) => {
            return <div key={i} className='homes'>             
                <img className='home_img' src={home.img} alt='' />
                <Link to={`/displayhome/${home.user_id}`} className='home_title'> {home.title} </Link>
                <span className='home_address'>{home.city}, {home.country}</span>
                <div className='icons'>
                    <i className="fa fa-bed icon" aria-hidden="true"> <span className='icon_nums'>{home.beds}</span> </i>
                    <i className="fa fa-bath icon" aria-hidden="true"> <span className='icon_nums'>{home.bathrooms}</span> </i>
                    <i className="fa fa-users icon" aria-hidden="true"> <span className='icon_nums'>{home.guests}</span> </i>
                </div>
            </div>
        })

        return(
            <div className='homes_container'>
                <Nav />
                <div className='homes_header'>
                    <span className='stay'>I'd Like to Stay In...</span>
                    <div className='search_container'>
                        <span className='sub_stay'>Country:</span>
                        <input className='search_input' placeholder='e.g. Australia, France, Thailand' onChange={ e => this.handleCountryChange(e.target.value)}/>
                        <span className='sub_stay'>City:</span>
                        <input className='search_input' placeholder='e.g. New York City, Rome, Beijing' onChange={ e => this.handleCityChange(e.target.value)}/>
                        <button className='search_button' onClick={ () => this.handleSearch() }>Search</button>
                    </div>
                </div>

                <div className='homes_list'>
                    { homes }
                </div>

                <Footer />

            </div>
        )
    }
}



export default connect(null, {getSearchedHomesByCity})(Homes);