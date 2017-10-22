import React, {Component} from 'react';
import './Carousel.css'; 
import beach from '../../beach.jpg';
import country from '../../scotland.jpg';
import ski from '../../ski.jpg';
import city from '../../city.jpg';

let auto; // variable for storing setInterval ID
const timer = 4000; // timer for interval


class Carousel extends Component {
    constructor() {
        super()
        this.state = { 
          images: [beach, country, ski, city],
          counter: 1,
          direction: 'forward'
        }
        this.goBack = this.goBack.bind(this);
        this.goForward = this.goForward.bind(this);
      }
    
      componentDidMount() {
        auto = setInterval(_ => { this.goForward() }, timer) // store interval ID in variable
      }
    
      resetInterval() {
        clearInterval(auto); // clear current interval
        auto = setInterval(_ => { this.goForward() }, timer); // set new interval
      }
    
      goBack() {
        this.resetInterval(); // reset interval so timer starts over
        let { counter, images, direction } = this.state;
        if (counter === 0) counter = images.length - 1;
        else counter--;
        this.setState({counter, direction: 'back'})
      }
    
      goForward() {
        this.resetInterval(); // reset interval so timer starts over
        let { counter, images, direction } = this.state;
        if (counter >= images.length - 1) counter = 0;
        else counter++;
        this.setState({counter, direction: 'forward'})
      }
    
      imgStyle(img, index) { 
        const { counter, images, direction } = this.state;
        const backgroundImage = `url(${img})`;
    
        // as counter changes, photos with index less than counter are positioned left
        // photos with index greater than counter are positioned right
        const left = (
          index === counter -1 || counter === 0 && index === images.length -1 ? '-700px'
          : index === counter ? '0px'
          : '700px'
        )
        // z-index is set lower for when images need to cross over against the flow
        const zIndex = (
          left === '700px' && direction === 'forward' ? 1 
          : left === '-700px' && direction === 'back' ? 1
          : 2
        )
        return {backgroundImage, left, zIndex};
      };

    render() {

        return (
            <div className="Carousel">
                <header className="Carousel-header">
                <h1 className="Carousel-title">The Possibilities are Endless!</h1>
                </header>
    
                <div className="Carousel-body">
        
                <div className="back_button" onClick={this.goBack}></div>
                
                <div className="img-container">
                    {this.state.images.map((img, i) => {
                    return <div className="image" key={i} style={this.imgStyle(img, i)}></div>
                    })}
                </div>
        
                <div className="back_button" onClick={this.goForward}></div>
        
                </div>
            </div>
        )
    }
}

export default Carousel;