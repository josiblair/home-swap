import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


class Contact extends Component {
    render(){
        return (
            <div className='contact_container'>
                <Nav />
                <div className='contact_header'>
                    <div className='contact_logo'></div>
                    <span>Contact Us</span>
                </div>
                <div>
                    <span> Email: contact@homeswap.com </span>
                    <span> Toll-Free Number: 1-800-123-4567 </span>
                </div>
                <div className='contact_social'>
                    <span className='fb'></span>
                    <span className='twit'></span>
                    <span className='pint'></span>
                    <span className='linked'></span>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;