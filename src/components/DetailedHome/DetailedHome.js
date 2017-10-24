import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './DetailedHome.css';


class DetailedHome extends Component {
    constructor() {
        super()

        this.state = {
            home: {}
        }
    }

    //"let's swap" button needs to send notification/message to user
    componentDidMount(props) {
        //{props.match.params.id} --> equal to the id passed into the url
        const homeId = this.props.match.params.id;
        axios.get(`/displayonehome/${homeId}`)
             .then( home => {
                 this.setState({
                     home: home.data
                 })
             })
    }

    handleSwapClick() {
        //send message to user and redirect them to a 'thank you' page with another button to keep searching homes
    }

    render() {

        const { country, state, city, bathrooms, guests, bedrooms, title, about_body, img } = this.state.home;

        return (
            <div>
                <Nav />
                <div className='detail_header'></div>
                <div className='chosen_home'>
                    <div className='detail'>
                        <div className='detail_body'>
                            <img className='detail_img' src={img} alt='' />
                            <span className='detail_title'> {title} </span>
                            <div className='location'>
                                <div>{country}</div>
                                <div>{' > '}</div>
                                <div>{state}</div>
                                <div>{' > '}</div>
                                <div>{city}</div>
                            </div>
                            <hr />
                            <div className='detail_icons'>
                                <i className="fa fa-bed fa-2x detail_icon" aria-hidden="true"> <span className='detail_icon_nums'>{bedrooms} Bedrooms </span> </i>
                                <i className="fa fa-bath fa-2x detail_icon" aria-hidden="true"> <span className='detail_icon_nums'>{bathrooms} Baths</span> </i>
                                <i className="fa fa-users fa-2x detail_icon" aria-hidden="true"> <span className='detail_icon_nums'> Sleeps {guests}</span> </i>
                            </div>
                            <hr />
                            <div className='detail_about'>
                                <span className='detail_about_header'>About Our Home</span>
                                <span className='detail_about_body'> {about_body} </span>
                            </div>
                        </div>
                    </div>
                    <div className='dummy_container'></div>
                </div>
                <div className='user'>
                        <span>Want to talk more details about swapping with this home? </span>
                        <span>Let the homeowner know!</span>
                        <button onClick={ () => this.handleSwapClick }>I Want To Swap!</button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default DetailedHome;