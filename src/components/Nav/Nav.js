import React, { Component } from 'react';


// { noUser ? <a href={ process.env.REACT_APP_LOGIN } className='login'><button>Login</button></a>           this needs to be in place of login
// : <a href='http://localhost:3005/auth/logout' className='logout'><button>Log out</button></a> } 

class Nav extends Component {
    render(){
        return (
            <div>
                <div className='logo'></div>
                <div className='nav'>
                    <span>Desinations</span>
                    <span>How It Works</span>
                    <span>Contact Us</span>
                    <a href={ process.env.REACT_APP_LOGIN } className='loginBtn'><button>Login / Register</button></a>
                </div>
            </div>
        )
    }
}

export default Nav;