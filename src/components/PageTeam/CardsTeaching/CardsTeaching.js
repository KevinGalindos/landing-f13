import React from "react"
import Slider from "react-slick"

import { dummy } from "../../../assets/common/Utils/DummyProfie"

import { LeftOutlined } from "@ant-design/icons"
import { Button } from "antd"

export const CardsTeaching = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="CardsTeaching">
      <div className="box-button">
        <Button>
          <LeftOutlined />
        </Button>
      </div>
      <div className="container">
        <div className="wrapper-cards">
          <div className="title">
            <h1 className="primary-title">¿Qué enseñamos en F13?</h1>
          </div>

          <div className="carousel-cards">
            <Slider {...settings}>
              {dummy.whyChooseCards.map(item => (
                <div className="card">
                  <div className="img-banner">
                    <img alt={item.title} src={item.image} />
                    <h1 className="paragraphs">{item.title}</h1>
                    <h3 className="short-texts">{item.creators}</h3>
                    <h3 className="short-texts">{item.date}</h3>
                  </div>
                  <div className="text-mid">
                    <img alt={item.title} src={item.logo} />
                    <p className="short-texts">{item.description}</p>
                  </div>
                  <div className="text-bottom">
                    <h1 className="paragraphs">{item.final}</h1>
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
