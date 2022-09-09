import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import preview_1 from '../assets/images/carousel/preview_1.png';
import preview_2 from '../assets/images/carousel/preview_2.png';
import preview_3 from '../assets/images/carousel/preview_3.png';
import preview_4 from '../assets/images/carousel/preview_4.png';
import preview_5 from '../assets/images/carousel/preview_5.png';
import preview_6 from '../assets/images/carousel/preview_6.png';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        
        <div className='my-5'>
            <h2> Check it out! </h2>
            <Slider {...settings} style={{margin: '0 -1rem'}}>
              <div className='px-2'>
                <img src={preview_1} style={{width: '100%', borderRadius: '10%'}}/>
              </div>
              <div className='px-2'>
                <img src={preview_2} style={{width: '100%', borderRadius: '10%'}}/>
              </div>
              <div className='px-2'>
                <img src={preview_3} style={{width: '100%', borderRadius: '10%'}}/>
              </div>
              <div className='px-2'>
                <img src={preview_4} style={{width: '100%', borderRadius: '10%'}}/>
              </div>
              <div className='px-2'>
                <img src={preview_5} style={{width: '100%', borderRadius: '10%'}}/>
              </div>
              <div className='px-2'>
                <img src={preview_6} style={{width: '100%', borderRadius: '10%'}}/>
              </div>
            </Slider>
        </div>
    );
  }
}