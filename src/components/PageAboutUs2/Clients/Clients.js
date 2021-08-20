import React from "react"
import Slider from "react-slick";

import { dummy } from "../../../assets/common/Utils/DummyAboutUs2";
import ClientsCard from './components/ClientCard/ClientCard'


const Clients = () => {

  const settings = {
    dots: false,
    // infinite: true,
    // autoplay: false,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 761,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="clients">
      <div className="container">
        <div className="clients__content">
          <span className="primary-title">Clientes</span>
          <Slider {...settings}>
            {dummy.ourclients.map(i => (
              <ClientsCard title={i.title} img={i.image} description={i.description} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Clients
