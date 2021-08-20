import React from "react"

import Slider from "react-slick"
import { Button } from "antd";

import LogoF13 from "../../../assets/images/Icons/Logo.png"
import Banner1 from "../../../assets/images/Banners/banner-carousel1.svg"
import Banner2 from "../../../assets/images/Banners/banner-carousel2.svg"

const settings = {
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 500
}
export const BannerHome = () => {
  return (
    <div className="banner-home">
      <div className="container">
        <div className="Carrusel">
          <div className="logo">
            <img src={LogoF13} alt="LogoF13" />
          </div>
          <Slider {...settings}>
            <div>
              <div className="Carrusel_one">

                <div className="banner">
                  <div className="banner-img">
                    <img src={Banner1} className="img-pc" alt="Banner" />
                  </div>
                  <div className="banner-text">
                    <h1 className="primary-title">Productos digitales a tu alcance</h1>
                    <h3 className="secondary-degree">
                      Realizamos productos y servicios implementando tecnologías
                      actuales de acuerdo a los estándares de calidad
                    </h3>
                    <Button className="button button--primary">Nuestros servicios</Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="Carrusel_two">
                <div className="banner">
                  <div className="banner-text">
                    <h1 className="primary-title">Construimos tecnología y también capacitamos</h1>
                    <Button className="button button--primary">Quiero saber más</Button>
                  </div>
                  <div className="banner-img">
                    <img src={Banner2} alt="Banner2" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
