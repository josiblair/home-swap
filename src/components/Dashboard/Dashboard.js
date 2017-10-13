import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { fetchUserData } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            editEmail: false,
            editPhone: false
        }
    }


    componentDidMount() {
        axios.get('/auth/me').then(res => {
            this.props.fetchUserData(res.data.id);
            this.setState({
                firstName: res.data.first_name,
                lastName: res.data.last_name
            })
        })

    }

    handleDeletion(id) {
        axios.delete('/api/removehome/' + id)
            .then(response => {
                console.log("Thank you for working")
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


    render() {

        const { st, city, title, img, userid } = this.props.userData;

        return (
            <div className='profile_container'>
                <Nav />

                <div className='prof_sidenav'>
                    <div className='profile_img'></div>
                    <div>
                        <span>Name: {this.state.firstName} {this.state.lastName}</span>

                        { this.state.editPhone ? <div><input onChange={ (e) => this.changePhoneNumber(e.target.value) } /><button onClick={ () => this.editPhone() }>Save</button></div> : 
                                                 <div><span>Phone Number: {this.state.phone} </span><button onClick={ () => this.editPhone() }>Edit</button></div> }

                        { this.state.editEmail ? <div><input onChange={(e) => this.changeEmail(e.target.value)} /><button onClick={() => this.editEmail()}>Save</button></div> :
                            <div><span>Email: {this.state.email} </span> <button onClick={() => this.editEmail()}>Edit</button></div> }
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

                <button onClick={() => this.handleDeletion(userid)}>Remove My Home</button>

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