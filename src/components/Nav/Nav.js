import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Nav.css';
import logo from '../../homeswap-logo.png';

class Nav extends Component {
    constructor() {
        super()

        this.state={
            userid: null
        }
    }

    componentDidMount(){
        axios.get('/auth/me').then( res => {
            this.setState({
                userid: res.data.id
            })
        })
    }

    userPresent() {
        return (this.state.userid) ? 
        <div className='navlink'>
            <div className='navlink'>
                <Link to='/dashboard'><span>Profile</span></Link>
            </div>
            <div className='navlink'>
                    <a href='http://localhost:3005/auth/logout' className='log_button'>
                    <button>Log Out</button>
                    </a>
            </div>
        </div> : 
        <div className='navlink'>
            <a href={ process.env.REACT_APP_LOGIN }>
                <button className='log_button'>Log In</button>
            </a>
        </div>
    }


    render(){
        
        return (
            <div className='nav_container'>

                <div className='img_container'>
                    <Link to='/'><img src={logo} alt='logo' className='logo' /></Link>
                </div>

                <div className='nav_options'>
                    <div className='navlink'><Link to='/destinations'><span>Desinations</span></Link></div>
                    <div className='navlink'><Link to='/about'><span>How It Works</span></Link></div>
                    <div className='navlink'><Link to='/contact'><span>Contact Us</span></Link></div>
                    {this.userPresent()} 
                </div>

            </div>
        )
    }
}

export default Nav;