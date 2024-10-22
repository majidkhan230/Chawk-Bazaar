import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider({slidesToShow,children}) {
  // console.log(slidesToShow)
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
     
    {children}
      
    </Slider>
  );
}