import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../white-logo.png';
import './Footer.css';


class Edit extends Component {
    render(){
        return (
            <div className='footer_container'>
                <div className='footer_img_container'>
                    <img src={logo} alt='logo' className='footer_logo' />
                </div>

                <div className='footer_links_container'>
                    <Link to='/about'>About Us</Link>
                    <Link to='/destinations'>Browse Homes</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>

            </div>
        )
    }
}

export default Edit;