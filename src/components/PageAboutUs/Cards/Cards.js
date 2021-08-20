import React from "react"

import Slider from "react-slick"

import {dummy} from "../../../assets/common/Utils/DummyAboutUs"

import Agility from "../../../assets/images/Banners/chart.svg"
import Productivity from "../../../assets/images/Banners/report_presentation.svg"
import Versatility from "../../../assets/images/Banners/scrum_board.svg"
import Security from "../../../assets/images/Banners/team_work.svg"

export const Cards = () => {
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
    <div className="Cards">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-title">
            <h1 className="secondary-degree">
              Ventajas de capacitar a nuestro equipo
            </h1>
          </div>
          <div className="wrapper-card top">
            <img src={Agility} alt="Agility" />
            <p className="short-texts">
              Tu idea junto con nuestra capacidad de agilidad, puedes verla más
              pronto de lo que esperabas
            </p>
            <h1 className="secondary-degree">Agilidad</h1>
          </div>

          <div className="wrapper-card right">
            <img src={Productivity} alt="Productivity" />
            <p className="short-texts">
              Tu idea junto con nuestra capacidad de agilidad, puedes verla más
              pronto de lo que esperabas
            </p>
            <h1 className="secondary-degree">Productividad</h1>
          </div>

          <div className="wrapper-card bottom">
            <img src={Versatility} alt="Versatility" />
            <p className="short-texts">
              Tu idea junto con nuestra capacidad de agilidad, puedes verla más
              pronto de lo que esperabas
            </p>
            <h1 className="secondary-degree">Versatilidad</h1>
          </div>

          <div className="wrapper-card left">
            <img src={Security} alt="Security" />
            <p className="short-texts">
              Tu idea junto con nuestra capacidad de agilidad, puedes verla más
              pronto de lo que esperabas
            </p>
            <h1 className="secondary-degree">Seguridad</h1>
          </div>
        </div>



        <div className="box-responsive">
          <div className="title">
            <h1 className="secondary-degree">
              Ventajas de capacitar a nuestro equipo
            </h1>
          </div>
          <div className="dummy-carousel">
            <Slider {...settings}>
              {dummy.CardsResposive.map(item => (
                <div key={item.id} className="box-card">
                  <div className="image">
                    <img alt={item.title} src={item.img} />
                  </div>
                  <div className="text" key={item.id}>
                    <h3 className="short-texts">{item.description}</h3>
                  </div>
                  <div className="title">
                  <h1 className="secondary-degree">{item.title}</h1>
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
