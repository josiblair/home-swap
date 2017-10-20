import React, { Component } from 'react';
import './Add.css';
import { fetchUserData } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { addHome } from '../../ducks/reducer';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
// import {Redirect} from 'react-router';


class Add extends Component {
    constructor(props) {
        super(props)

        this.state={
            userid: null,
            country: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            bathrooms: 0,
            bedrooms: 0,
            guests: 0,
            beds: 0,
            img: '',
            title: '',
            about: '',
            hasHome: false,
            redirect: false
        }

    }
    
    componentDidMount() {
        axios.get('/auth/me').then(res => {
            this.props.fetchUserData(res.data.id);

            this.setState({
                userid: res.data.id
            })
        })
    }

    handleInput(val, formProperty) {
        this.setState({
            [formProperty]: val,
            hasHome: true
        })
    }

    addHome() {
        const { userid, country, street, city, state, zip, bathrooms, bedrooms, guests, beds, img, title, about, hasHome } = this.state;


        this.props.addHome(userid, country, street, state, city, zip, bathrooms, bedrooms, guests, beds, title, about, img, hasHome);

        // this.setState({
        //     redirect: true         //not redirecting!
        // })
    }


    render(){

        // if(this.state.redirect) {
        //     return <Redirect to='/dashboard' />
        // }
       
        return (
            <div className='add_container'>
                <Nav />
                <div className='add_header'>
                    <span>Tell Us About Your Home!</span>
                </div>
                <div className='add_section'>
                    <div className='basics'>
                        <h2>Location</h2>
                            <span>Country</span>
                            <input className='add_input' placeholder='Country' onChange={ (e) => this.handleInput(e.target.value, 'country') } />
                            
                            <span>Street Address</span>
                            <input className='add_input' placeholder='Street' onChange={ (e) => this.handleInput(e.target.value, 'street') }/>
                            
                            <span>City</span>
                            <input className='add_input' placeholder='City' onChange={ (e) => this.handleInput(e.target.value, 'city') } />
                            
                            <span>State/Region</span>
                            <input className='add_input' placeholder='State/Region' onChange={ (e) => this.handleInput(e.target.value, 'state') } />
                            
                            <span>Zip</span>
                            <input className='add_input' placeholder='Zip' onChange={ (e) => this.handleInput(e.target.value, 'zip') } />
                    </div>

                    <div className='type'>
                        <h2>Property Type</h2>
                            <span>Bathrooms</span>
                            <input className='add_input' placeholder='# of Bathrooms' onChange={ (e) => this.handleInput(e.target.value, 'bathrooms') } />
                            
                            <span>Bedrooms</span>
                            <input className='add_input' placeholder='# of Bedrooms' onChange={ (e) => this.handleInput(e.target.value, 'bedrooms') } />
                            
                            <span>Guests</span>
                            <input className='add_input' placeholder='Max # of Guests' onChange={ (e) => this.handleInput(e.target.value, 'guests') } />
                            
                            <span>Beds</span>
                            <input className='add_input' placeholder='# of Beds' onChange={ (e) => this.handleInput(e.target.value, 'beds') } />

                    </div>

                    <div className='add_about'>
                        <h2>Name Your Listing</h2>
                        <input className='add_input' placeholder='Listing Title' onChange={ (e) => this.handleInput(e.target.value, 'title') } />

                        <h2>Tell Us About Your Home</h2>
                        <textarea className='about_paragraph' rows='8' onChange={ (e) => this.handleInput(e.target.value, 'about') } ></textarea>

                        <h2>Upload Image of Home</h2>
                        <input className='add_input' placeholder='URL' onChange={ (e) => this.handleInput(e.target.value, 'img') } />
                    </div>
                </div>

                <div className='add'>
                    <button className='add_button' onClick={ () => this.addHome() }>Add Your Home!</button>
                </div>

                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps, { addHome, fetchUserData })(Add);