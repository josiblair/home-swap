import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Nav extends Component {
    constructor() {
        super()

        this.state={
            userid: null
        }
    }

    //logout button not working!! 

    componentDidMount(){
        axios.get('/auth/me').then( res => {
            this.setState({
                userid: res.data.id
            })
        })
    }

    render(){
        
        return (
            <div>
                <div className='logo'></div>
                <div className='nav'>
                    <Link to='/destinations'><span>Desinations</span></Link>
                    <Link to='/about'><span>How It Works</span></Link>
                    <Link to='/contact'><span>Contact Us</span></Link>
                    { (this.state.userid) ? <div><Link to='/dashboard'><span>Profile</span></Link><a href='http://localhost:3005/auth/logout' className='logout'><button>Log Out</button></a></div> : 
                      <div><a href={ process.env.REACT_APP_LOGIN } className='login'><button>Log In</button></a></div> } 
                </div>
            </div>
        )
    }
}

export default Nav;