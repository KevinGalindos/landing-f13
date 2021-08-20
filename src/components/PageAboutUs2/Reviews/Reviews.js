import React from "react"
import Slider from "react-slick";

import { dummy } from "../../../assets/common/Utils/DummyAboutUs2";
import ReviewsCard from './components/ReviewsCard/ReviewsCard'

import 'react-magic-slider-dots/dist/magic-dots.css';


const Reviews = () => {

  const settings = {
    className: "center",
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
          infinite: true,

        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  }
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews__content">
          <span className="primary-title">Cómo nuestos clientes cambiaron su negocio </span>
          <Slider {...settings}>
            {dummy.reviews.map(i => (
              <ReviewsCard social={i.social} proffesion={i.proffession} name={i.name} img={i.image} description={i.description} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Reviews
