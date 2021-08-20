import React from "react"
import Slider from "react-slick";

import CardJob from "./components/CardJob/CardJob"
import { dummy } from "../../../assets/common/Utils/DummyProfie"

const Jobs = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500
  }
  return (
    <div className="jobs">
      <div className="container">
        <h2 className="primary-title">Trabaja con profesionales</h2>
        <div className="jobs__content">
          {dummy.jobs.map(item=>(
          <CardJob data={item}/>
          )
          )}
        </div>
        <div className="jobs__content-slider">
          <Slider {...settings}>
         {dummy.jobs.map(item=>(
          <CardJob data={item}/>
          )
          )}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Jobs
