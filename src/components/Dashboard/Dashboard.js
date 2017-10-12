import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { fetchUserData } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';


class Dashboard extends Component {
    constructor(){
        super()

        this.state={
            phone: '',
            email: ''
        }
    }


    componentDidMount(){
        axios.get('/auth/me').then(res => {
            this.props.fetchUserData(res.data.id);
        })
       
    }

    handleDeletion(id) {
        axios.delete('/api/removehome/' + id ) 
             .then( response => { 
                console.log("Thank you for working")
              })
    }

    changePhoneNumber(e) {
        this.setState({
            phone: e.target.value
        })
    }

    // displayHome(id) {
    //     axios.get(`/displaymyhome/${id}`)
    //          .then( res => {
    //              console.log(res)
    //          })
    // }


    //edit the "edit profile" to just update the info on this page. may have to set state. 

    render(){
        
        const { st, city, title, img, userid } = this.props.userData;

        return (
            <div className='profile_container'>
                <Nav />

                <div className='prof_sidenav'>
                    <div className='profile_img'></div>
                    <div>
                        <span>Name</span>
                        <span>Phone Number: {this.state.phone} </span><button>Edit</button>
                        <span>Email: {this.state.email}</span><button>Edit</button>
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

                <button onClick={ () => this.handleDeletion(userid)}>Remove My Home</button>

                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userData: state.userData
    }
}


export default connect(mapStateToProps, { fetchUserData })(Dashboard);