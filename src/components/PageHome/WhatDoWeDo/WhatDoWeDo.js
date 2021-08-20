import React from "react";
import Slider from "react-slick";

import { dummy } from '../../../assets/common/Utils/DummyHome'
export const WhatDoWeDo = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500
  }

  return (
    <>
    <div className="whatdowedo">
      <div className="container">
        <h2 className="primary-title ">¿Qué hacemos?</h2>
        <div className="whatdowedo__contents">
          {dummy.whatdowedo.map(item => (
            <div className="item" key={item.id}>
              <h3 className="paragraphs">{item.title}</h3>
              <p className="short-texts">{item.description}</p>
              <img alt={item.title } src={item.image} />
            </div>
          ))}
        </div>
        <div className="whatdowedo__content-slider">
          <Slider {...settings}>
          {dummy.whatdowedo.map(item => (
            <div className="item" key={item.id}>
              <h3 className="paragraphs">{item.title}</h3>
              <p className="short-texts">{item.description}</p>
              <img alt={item.title } src={item.image} />
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
    
    
    </>
  );
}