import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './DetailedHome.css';
import {connect} from 'react-redux';
import {sendMessage} from '../../ducks/reducer';
import swal from 'sweetalert';

class DetailedHome extends Component {
    constructor() {
        super()

        this.state = {
            home: {},
            userId: null
        }
    }

    //{props.match.params.id} --> equal to the id passed into the url

    componentDidMount() {
        const homeId = this.props.match.params.id;
        axios.get(`/displayonehome/${homeId}`)
             .then( home => {
                 this.setState({
                     home: home.data
                 })
             });

        axios.get('/auth/me').then( res => {
            this.setState({
                userId: res.data.id
            })
        })
    }

    initiateMessage(home) {
        const messageBody = `Hi there! I am interested in swapping homes with you! Take a look at my home and let me know what you think!`
        
        return !this.state.userId ? 
         swal('Sorry...','You must sign up or log in to swap homes!','error') :
         (this.props.sendMessage(this.state.userId, this.state.home.user_id, messageBody ),
         swal('Thank you!','Thank You for your interest in this home! We have sent a message to the homeowner for you.', 'success'))
    }

    render() {

        const { country, state, city, bathrooms, guests, bedrooms, title, about_body, img } = this.state.home;
        const userHome = `http://localhost:3000/#/displayhome/${this.state.userId}`

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
                        <span>Are you ready to swap or want to talk more details about swapping with this home? </span>
                        <span>Let the homeowner know!</span>
                        <button onClick={ () => this.initiateMessage(userHome) }>Let's Talk Details!</button>
                </div>
                <Footer />
            </div>
        )
    }
}


export default connect(null, {sendMessage})(DetailedHome);