import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

//still needs logo

class Home extends Component {
    render(){
        return (
            <div>
                <div className='nav'>
                    <Nav />
                </div>
                
                <div className='header_container'>
                    <div className='header_logo'> 

                    </div>
                    <div>
                        <Link to='/destinations'><button>Tell Us Where You Want To Go!</button></Link>
                    </div>
                </div>

                <div className='home_about'>
                    <h3>How It Works</h3>
                    <div className='steps'>
                        <span>Join</span>
                        <span>Search</span>
                        <span>Swap</span>
                    </div>
                    <div>
                        <Link to='/about'><button>Tell Me More!</button></Link>
                    </div>
                </div>

                <div className='stories_header'>Home Swap Stories</div>
                <div className='stories_container'>
                    <div className='story story1'>Story 1</div>
                    <div className='story story2'>Story 2</div>
                    <div className='story story3'>Story 3</div>
                    <div className='story story4'>Story 4</div>
                </div>

                <div className='bottom_prompt_container'>
                    <div>Get Swapping!</div>
                    <div>
                        <h3>What Are You Waiting For?</h3>
                        <Link to='/destinations'><button>Find My Next Vacation!</button></Link>
                    </div>
                </div>

                <div>
                    <Footer />
                </div>

            </div>
        )
    }
}

export default Home;