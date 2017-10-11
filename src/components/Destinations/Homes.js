import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class Homes extends Component {
    render() {
        return(
            <div className='homes_container'>
                <Nav />
                <div className='search_container'>
                    <span>I'd Like to Stay In...</span>
                    <input placeholder='e.g. Australia, Amsterdam, Paris' />
                    <button>Search</button>
                </div>

                <div className='homes_list'>
                    
                </div>

                <Footer />

            </div>
        )
    }
}

export default Homes;