import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { updateUserId } from '../../ducks/reducer';
import { connect } from 'react-redux';


class Dashboard extends Component {

    componentDidMount(){
        this.props.updateUserId();
    }

    render(){

        const { st, city, title, img } = this.props;

        return (
            <div className='profile_container'>
                <Nav />

                <div className='prof_sidenav'>
                    <div className='profile_img'></div>
                    <div>
                        <span>Name</span>
                        <span>Phone Number</span>
                        <span>Email</span>
                        <Link to='/editprofile'>Edit Profile</Link>
                    </div>
                </div>

                <div className='messages'>
                    <span>Messages</span>
                </div>

                <div className='my_homes'>
                    <span>My Homes:</span>
                    <div className='myhome'>
                        <img src={img} alt='' />
                        <h3>{title}</h3>
                        <h4>{city}, {st}</h4>
                    </div>
                </div>
                <div className='addHome'>
                    <Link to='/addhome'><button>Add My Home!</button></Link>
                </div>

                <Footer />
            </div>
        )
    }
}


export default connect(null, { updateUserId })(Dashboard);