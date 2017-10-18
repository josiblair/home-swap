import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { fetchUserData } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Dashboard.css';


class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            userImg: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            userid: null,
            editEmail: false,
            editPhone: false,
            displayHome: true
        }
    }

    //edit so when logging in, redirect to Add Home. Add 'update my home' button
    //component will mount --> when profile is clicked on in navigation... if no user is found, redirect them to home and send alert

    componentDidMount() {
        axios.get('/auth/me').then(res => {
            this.props.fetchUserData(res.data.id);

            this.setState({
                userImg: res.data.img,
                firstName: res.data.first_name,
                lastName: res.data.last_name,
                email: res.data.email,
                userid: res.data.id
            })
        })

    }

    handleDeletion(id) {
        axios.delete(`/api/removehome/${id}`)
            .then(response => {
                return response.data ? this.setState({ displayHome: false }) : this.state.displayHome
            })
    }

    editPhone() {
        this.setState({
            editPhone: !this.state.editPhone
        })
    }

    editEmail() {
        this.setState({
            editEmail: !this.state.editEmail
        })
    }

    changePhoneNumber(val) {
        this.setState({
            phone: val
        })
    }

    changeEmail(val) {
        this.setState({
            email: val
        })
    }

    displayPhone() {
        return this.state.editPhone ? <div><input onChange={(e) => this.changePhoneNumber(e.target.value)} /><button className='edit_buttons' onClick={() => this.editPhone()}>Save</button></div> :
            <div><span>Phone Number: {this.state.phone} </span><button className='edit_buttons' onClick={() => this.editPhone()}>Edit</button></div>
    }

    displayEmail() {
        return this.state.editEmail ? <div><input onChange={(e) => this.changeEmail(e.target.value)} /><button className='edit_buttons' onClick={() => this.editEmail()}>Save</button></div> :
            <div><span>Email: {this.state.email} </span> <button className='edit_buttons' onClick={() => this.editEmail()}>Edit</button></div>
    }

    displayHome() {
        const { img, title, city, state } = this.props.userData;

        return this.state.displayHome ?
            <div className='display_home'>
                <div className='my_home'>
                    <img src={img} alt='' />
                    <h3>{title}</h3>
                    <h4>{city}, {state}</h4>
                </div>
                <button className='remove_button' onClick={() => this.handleDeletion(this.state.userid)}>Remove My Home</button>
            </div>
            :
            <div className='hide_home'>
                <Link to='/addhome'><div>Add Your Home!</div></Link>
            </div>
    }

    
    render() {

        return (
            <div className='profile_container'>
                <Nav />
                <div className='dash_header'></div>
                <div className='dash_body'>
                    <div className='prof_sidenav'>
                        <div >
                            <img className='profile_img' src={this.state.userImg} alt='' />
                        </div>
                        <div className='user_info'>
                            <span>Name: {this.state.firstName} {this.state.lastName}</span>
                            {this.displayPhone()}
                            {this.displayEmail()}
                        </div>
                    </div>

                    <div className='main_body'>
                        <div className='likes'>
                            <span className='dash_head'>Recently Liked Your Home:</span>
                            <div className='likes_box'></div>
                        </div>

                        <div className='messages'>
                            <span className='dash_head'>Messages:</span>
                            <div className='message_box'></div>
                        </div>

                    </div>

                    <div className='my_home'>
                            <span className='dash_head'>My Home:</span>
                            { this.displayHome() }
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userData: state.userData
    }
}


export default connect(mapStateToProps, { fetchUserData })(Dashboard);