import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../../white-logo.png';


//still needs logo

class Home extends Component {
    render(){
        return (
            <div>
                <div className='nav'>
                    <Nav />
                </div>
                
                <div className='header_container'>
                    <div className='logo_container'> 
                        <img src={ logo } alt='' className='header_logo' />
                    </div>
                    <div>
                        <Link to='/destinations'><button className='header_button'>Tell Us Where You Want To Go!</button></Link>
                    </div>
                </div>

                <div className='slogan_container'>
                        <span className='slogan'>Travel the World. Stay for free.</span>
                        <p className='slogan_par'>Welcome to Home Swap! A simple vacation idea. You stay in their home -- They stay in yours!</p>
                </div>

                <div className='home_about'>
                    <span className='how_title'>How It Works</span>
                    <div className='steps'>
                        <div className='home_steps'>
                            <span className='fa-stack fa-2x'>
                                <i className='fa fa-circle fa-stack-2x text-primary'></i>
                                <i className="fa fa-user-o fa-stack-1x fa-inverse"></i>
                            </span>
                            <p>Join</p>
                        </div>

                        <div className='home_steps'>
                            <span className='fa-stack fa-2x'>
                                <i className='fa fa-circle fa-stack-2x text-primary'></i>
                                <i className="fa fa-home fa-stack-1x fa inverse"></i>
                            </span>
                            <p>Search</p>
                        </div>

                        <div className='home_steps'>
                            <span className='fa-stack fa-2x'>
                                <i className='fa fa-circle fa-stack-2x text-primary'></i>
                                <i className="fa fa-refresh fa-stack-1x fa-inverse" aria-hidden='true'></i>
                            </span>
                            <p>Swap</p>
                        </div>

                    </div>
                    <div>
                        <Link to='/about'><button className='about_button'>Tell Me More!</button></Link>
                    </div>
                </div>

                <div className='stories_main'>
                    <div className='stories_container'>
                        <Carousel />
                    </div>
                </div>

                <div className='bottom_prompt_container'>
                    <h3>What Are You Waiting For?</h3>
                    <Link to='/destinations'><button>Find My Next Vacation!</button></Link>
                </div>

                <div>
                    <Footer />
                </div>

            </div>
        )
    }
}

export default Home;