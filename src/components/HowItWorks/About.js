import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './About.css';
import beach from '../../beach.jpg';
import country from '../../scotland.jpg';
import ski from '../../ski.jpg';
import city from '../../city.jpg';


class About extends Component {
    render(){
        return (
            <div>
                <Nav />

                <div className='about_header'>
                    <span>How It Works</span>
                </div>

                <div className='about_container'>

                    <span className='about_title'>How To Home Swap</span>
                    <p className='about_desc'>Four Easy Steps to Begin Your Vacationing!</p>

                    <div className='about_steps'>

                        <div className='odd about_step'>
                            <div className='step_desc right'>
                                <h2>1) Tell Us What You Have</h2>
                                <p>Tell other members about your home to attract some swaps.</p>
                            </div>
                            <img src={beach} alt='beach' className='about_img' />
                        </div>

                        <div className='even about_step'>
                            <img src={country} alt='country' className='about_img'/>
                            <div className='step_desc left'>
                                <h2>2) Tell Us What You Want</h2>
                                <p>Use our search filters to find exactly what you’re looking for. From city pads to chateaux, we have it all.</p>
                            </div>
                        </div>

                        <div className='odd about_step'>
                            <div className='step_desc right'>
                                <h2>3) Contact Your Match</h2>
                                <p>Once you have matched with a home, message the homeowner to start arranging your swap.</p>
                            </div>
                            <img src={city} alt='city' className='about_img' />
                        </div>

                        <div className='even about_step'>
                            <img src={ski} alt='snow' className='about_img' />
                            <div className='step_desc left'>
                                <h2>4) Arrange the Swap</h2>
                                <p>Confirm the swap as soon as you have sorted out the details, and you are good to go!</p>
                            </div>
                        </div>

                    </div>
                <div>
                    <Link to='/destinations'><button className='view_button'>View All Homes</button></Link>
                </div>
                <Footer />
                </div>
            </div>
        )
    }
}

export default About;