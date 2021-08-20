import React from "react"
import linkendin from '../../../../assets/images/Icons/LinkedingBlue.svg'
import GitHub from '../../../../assets/images/Icons/GitHubBlue.svg'
import Slider from "react-slick";

const Card = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
  }
  return (
    <div className="card-member-team">
      <div className="card-member-team__profile">
        <img alt={data.name} src={data.img} />
        <h3 className="paragraphs">{data.name}</h3>
        <span className="mini-texts">{data.ocupation}</span>
        <div className="content-icons">
          <img alt="linkedin" src={linkendin} />
          <img alt="github" src={GitHub} />
        </div>
      </div>
      <div className="card-member-team__projects">
        <h3 className="paragraphs">Proyectos participe </h3>
        <span className="short-texts">{data.description}</span>
        <Slider {...settings}>
          {data.projects.map(item => (
            <div className="brands">
              <img src={item.img} alt={item.title} />
            </div>
          )
          )}
        </Slider>
      </div>
    </div>
  )
}

export default Card
