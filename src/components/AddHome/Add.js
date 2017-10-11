import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import { connect } from 'react-redux';
import { addHome } from '../../ducks/reducer';


class Add extends Component {
    constructor() {
        super()

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

    submitForm(){
        const { country, street, city, state, zip, bathrooms, bedrooms, guests, beds, img, title, about } = this.state;
        addHome( this.props.user, country, street, city, state, zip, bathrooms, bedrooms, guests, beds, img, title, about )
    }

    handleCountryChange(val) {
        this.setState({
            country: val
        })
    }

    handleStreetChange(val) {
        this.setState({
           street: val
        })
    }
    handleCityChange(val) {
        this.setState({
            city: val
        })
    }
    handleZipChange(val) {
        this.setState({
            zip: val
        })
    }
    handleBathroomsChange(val) {
        this.setState({
            bathrooms: val
        })
    }
    handleBedroomsChange(val) {
        this.setState({
            bedrooms: val
        })
    }

    handleBedsChange(val) {
        this.setState({
            beds: val
        })
    }

    handleGuestsChange(val) {
        this.setState({
            guests: val
        })
    }

    handleImgChange(val) {
        this.setState({
            img: val
        })
    }

    handleTitleChange(val) {
        this.setState({
            title: val
        })
    }

    handleAboutChange(val) {
        this.setState({
            about: val
        })
    }



    render(){

        return (
            <div className='add_container'>
                <Nav />
                <div className='add_body'>
                    <div className='basics'>
                        <span>Location:</span>
                            <span>Country</span>
                            <input placeholder='Country' onChange={ (e) => this.handleCountryChange(e.target.value) } />
                            <span>Street Address</span>
                            <input placeholder='Street' onChange={ (e) => this.handleStreetChange(e.target.value) }/>
                            <span>City</span>
                            <input placeholder='City' onChange={ (e) => this.handleCityChange(e.target.value) } />
                            <span>State/Region</span>
                            <input placeholder='State/Region' onChange={ (e) => this.handleStateChange(e.target.value) } />
                            <span>Zip</span>
                            <input placeholder='Zip' onChange={ (e) => this.handleZipChange(e.target.value) } />
                    </div>

                    <div className='type'>
                        <span>Property Type</span>
                            <span>Bathrooms</span>
                            <input placeholder='# of Bathrooms' onChange={ (e) => this.handleBathroomsChange(e.target.value) } />
                            <span>Bedrooms</span>
                            <input placeholder='# of Bedrooms' onChange={ (e) => this.handleBedroomsChange(e.target.value) } />
                            <span>Guests</span>
                            <input placeholder='Max # of Guests' onChange={ (e) => this.handleGuestsChange(e.target.value) } />
                            <span>Beds</span>
                            <input placeholder='# of Beds' onChange={ (e) => this.handleBedsChange(e.target.value) } />

                    </div>

                    <div className='property_img'>
                        <span>Upload Image of Home</span>
                        <input type='file' onChange={ (e) => this.handleImgChange(e.target.value) } />
                        <button>Upload Image</button>
                    </div>

                    <div className='add_about'>
                        <span>Name Your Place</span>
                        <input placeholder='Listing Title' onChange={ (e) => this.handleTitleChange(e.target.value) } />

                        <span>Tell Us About Your Home</span>
                        <textarea className='about_paragraph' rows='10' onChange={ (e) => this.handleAboutChange(e.target.value) } ></textarea>
                    </div>

                    <button onClick={ () => this.submitForm() }>Add Your Home!</button>

                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, { addHome })(Add);