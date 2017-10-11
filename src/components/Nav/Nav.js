import React, { Component } from 'react';
import {Link} from 'react-router-dom';


// { noUser ? <a href={ process.env.REACT_APP_LOGIN } className='login'><button>Login</button></a>           this needs to be in place of login
// : <Link to='/profile'><span>Profile</span></Link>
//  <a href='http://localhost:3005/auth/logout' className='logout'><button>Log out</button></a> } 

class Nav extends Component {
    render(){
        return (
            <div>
                <div className='logo'></div>
                <div className='nav'>
                    <Link to='/destinations'><span>Desinations</span></Link>
                    <Link to='/about'><span>How It Works</span></Link>
                    <Link to='/contact'><span>Contact Us</span></Link>
                    <a href={ process.env.REACT_APP_LOGIN } className='loginBtn'><button>Login / Register</button></a>
                </div>
            </div>
        )
    }
}

export default Nav;