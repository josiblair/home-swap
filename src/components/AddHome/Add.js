import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addHome } from '../../ducks/reducer';


class Add extends Component {
    constructor(props) {
        super(props)

        this.state={
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
            about: ''
        }

    }


    handleInput(val, formProperty) {
        console.log(this.state)
        this.setState({
            [formProperty]: val
        })
    }


    render(){

        const { country, street, city, state, zip, bathrooms, bedrooms, guests, beds, img, title, about } = this.state;
       
        return (
            <div className='add_container'>
                <div className='add_body'>
                    <div className='basics'>
                        <span>Location:</span>
                            <span>Country</span>
                            <input placeholder='Country' onChange={ (e) => this.handleInput(e.target.value, 'country') } />
                            <span>Street Address</span>
                            <input placeholder='Street' onChange={ (e) => this.handleInput(e.target.value, 'street') }/>
                            <span>City</span>
                            <input placeholder='City' onChange={ (e) => this.handleInput(e.target.value, 'city') } />
                            <span>State/Region</span>
                            <input placeholder='State/Region' onChange={ (e) => this.handleInput(e.target.value, 'state') } />
                            <span>Zip</span>
                            <input placeholder='Zip' onChange={ (e) => this.handleInput(e.target.value, 'zip') } />
                    </div>

                    <div className='type'>
                        <span>Property Type</span>
                            <span>Bathrooms</span>
                            <input placeholder='# of Bathrooms' onChange={ (e) => this.handleInput(e.target.value, 'bathrooms') } />
                            <span>Bedrooms</span>
                            <input placeholder='# of Bedrooms' onChange={ (e) => this.handleInput(e.target.value, 'bedrooms') } />
                            <span>Guests</span>
                            <input placeholder='Max # of Guests' onChange={ (e) => this.handleInput(e.target.value, 'guests') } />
                            <span>Beds</span>
                            <input placeholder='# of Beds' onChange={ (e) => this.handleInput(e.target.value, 'beds') } />

                    </div>

                    <div className='property_img'>
                        <span>Upload Image of Home</span>
                        <input placeholder='URL' onChange={ (e) => this.handleInput(e.target.value, 'img') } />
                    </div>

                    <div className='add_about'>
                        <span>Name Your Place</span>
                        <input placeholder='Listing Title' onChange={ (e) => this.handleInput(e.target.value, 'title') } />

                        <span>Tell Us About Your Home</span>
                        <textarea className='about_paragraph' rows='10' onChange={ (e) => this.handleInput(e.target.value, 'about') } ></textarea>
                    </div>

                    <button onClick={ () => this.props.addHome(this.props.userid, country, street, state, city, zip, bathrooms, bedrooms, guests, beds, title, about, img) }>Add Your Home!</button>

                </div>
            </div>
        )
    }
}

export default connect(null, { addHome })(Add);