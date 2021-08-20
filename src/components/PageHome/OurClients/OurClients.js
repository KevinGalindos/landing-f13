import React from "react"

import Slider from "react-slick"

import { dummy } from "../../../assets/common/Utils/DummyHome"

export const OurClients = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <div className="OurClients">
      <div className="container">
        <div className="content">
          <div className="content_title">
            <h1 className="primary-title">Nuestros clientes</h1>
          </div>
          <div className="wrapper-brands">
            <Slider {...settings}>
              {dummy.ourclients.map(item => (
                <div key={item.id} className="box-image">
                  <div className="content_icon">
                    <img alt={item.title} src={item.image} />
                  </div>
                  <div className="brand-name" key={item.id}>
                    <h3 className="paragraphs">{item.title}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
