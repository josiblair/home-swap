import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

//need onChange events for updated items

class Edit extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
    }
    
    render(){
        return (
            <div className='edit_container'>
                <Nav />
                <div className='edit_sidenav'>
                    <Link to='/addhome'>Add Home</Link>
                    <Link to='/profile'>View Profile</Link>
                </div>

                <div className='edit_content'>
                    <span>First Name:</span>
                        <input placeholder={ this.state.firstName ? this.state.firstName : '' } />
                    <span>Last Name:</span>
                        <input placeholder={ this.state.lastName ? this.state.lastName : '' } />
                    <span>Email:</span>
                        <input placeholder={ this.state.email ? this.state.email : '' } />
                    <span>Phone Number:</span>
                        <input placeholder={ this.state.phone ? this.state.phone : '' } />
                    <span>Preferred Language:</span>
                        <input placeholder={ this.state.language ? this.state.language : '' } />

                    <Link to='/profile'><button>Save Changes</button></Link>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Edit;