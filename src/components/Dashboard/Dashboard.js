import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { fetchUserData } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import Add from '../AddHome/Add';


class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            userid: null,
            editEmail: false,
            editPhone: false,
            displayHome: false
        }
    }

    //edit so when logging in, redirect to Add Home. Add 'update my home' button'


    componentDidMount() {
        axios.get('/auth/me').then(res => {
            this.props.fetchUserData(res.data.id);

            this.setState({
                firstName: res.data.first_name,
                lastName: res.data.last_name,
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
        return this.state.editPhone ? <div><input onChange={(e) => this.changePhoneNumber(e.target.value)} /><button onClick={() => this.editPhone()}>Save</button></div> :
            <div><span>Phone Number: {this.state.phone} </span><button onClick={() => this.editPhone()}>Edit</button></div>
    }

    displayEmail() {
        return this.state.editEmail ? <div><input onChange={(e) => this.changeEmail(e.target.value)} /><button onClick={() => this.editEmail()}>Save</button></div> :
            <div><span>Email: {this.state.email} </span> <button onClick={() => this.editEmail()}>Edit</button></div>
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
                <button onClick={() => this.handleDeletion(this.state.userid)}>Remove My Home</button>
            </div>
            :
            <div className='hide_home'>
                <div>Add Your Home!</div>
                <Add userid={this.state.userid} />
            </div>
    }

    
    render() {

        return (
            <div className='profile_container'>
                <Nav />

                <div className='prof_sidenav'>
                    <div className='profile_img'></div>
                    <div>
                        <span>Name: {this.state.firstName} {this.state.lastName}</span>
                        {this.displayPhone()}
                        {this.displayEmail()}
                    </div>
                </div>

                <div className='messages'>
                    <span>Messages</span>
                </div>

                <div className='my_homes'>
                    <span>My Homes:</span>
                    { this.displayHome() }
                </div>

                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        userData: state.userData
    }
}


export default connect(mapStateToProps, { fetchUserData })(Dashboard);