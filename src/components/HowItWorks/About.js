import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


class About extends Component {
    render(){
        return (
            <div>
                <Nav />
                <div className='about_container'>
                    <div className='about_steps'>
                        <div className='about_step1'>
                            <div className='about_img1'></div>
                            <div className='step1_desc'>
                                <p></p>
                            </div>
                        </div>
                        <div className='about_step2'>
                            <div className='about_img2'></div>
                            <div className='step2_desc'>
                                <p></p>
                            </div>
                        </div>
                        <div className='about_step3'>
                        <div className='about_img3'></div>
                            <div className='step3_desc'>
                                <p></p>
                            </div>
                        </div>
                        <div className='about_step4'>
                        <div className='about_img4'></div>
                            <div className='step4_desc'>
                                <p></p>
                            </div>
                        </div>
                    </div>
                <Footer />
                </div>
            </div>
        )
    }
}

export default About;