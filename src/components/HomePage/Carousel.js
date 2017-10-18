import React, {Component} from 'react';
import Slider from 'react-slick';
import './Carousel.css'; 
import {Link} from 'react-router-dom';
import beach from '../../beach.jpg';
import country from '../../scotland.jpg';
import ski from '../../ski.jpg';
import city from '../../city.jpg';


class Carousel extends Component {
    render() {
       const settings = {
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            centerMode: true,
            adaptiveHeight: true,
            className: 'inner_slide'
          };

        return (
            <Slider {...settings}>

              <div className='dest'>
                  <Link to='/destinations'>
                        <img src={beach} alt='beach' className='carousel_img' />
                  </Link>
              </div>

              <div className='dest'>
                  <Link to='/destinations'>
                        <img src={city} alt='city' className='carousel_img' />
                  </Link>
              </div>

              <div className='dest'>
                  <Link to='/destinations'>
                        <img src={country} alt='country' className='carousel_img' />
                  </Link>
              </div>

              <div className='dest'>
                  <Link to='/destinations'>
                        <img src={ski} alt='ski' className='carousel_img' />
                  </Link>
              </div>

              {/* <div className='dest'>
                  <Link to='/destinations'>
                        <img src={ski} alt='ski' className='carousel_img' />
                  </Link>
              </div>

              <div className='dest'>
                  <Link to='/destinations'>
                        <img src={ski} alt='ski' className='carousel_img' />
                  </Link>
              </div> */}

            </Slider>
        )
    }
}

export default Carousel;