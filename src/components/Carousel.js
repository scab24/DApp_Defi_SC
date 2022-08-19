import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/tierra.jpeg';
import img2 from '../img/btci.jpeg';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <a href='https://blockstellart.com'>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt=''
                            
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://blockstellart.com'>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
                
            </Carousel>

        );
    }
}

export default MyCarousel;
