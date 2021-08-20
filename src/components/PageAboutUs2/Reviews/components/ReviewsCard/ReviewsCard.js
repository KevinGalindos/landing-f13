import React from "react"

import comillas from '../../../../../assets/images/Icons/Comillas.svg'
import AppStore from '../../../../../assets/images/Icons/AppStore.svg'

const ReviewsCard = ({ img, description, name, social, proffesion, ...props }) => {

  return (
    <div className="reviews-card">
      <div className="reviews-card__content">
        <div className="brand">
          <img src={img} alt={name} />
          <div className="circle-review"><img src={comillas} /></div>
        </div>
        <div className="reviews-card__content--description">
          <span className="paragraphs ">"{description}"</span>
          <span className="paragraphs name ">{name}</span>
          <span className="paragraphs social ">{social}  {proffesion}</span>
        </div>
      </div>
    </div>
  )
}


export default ReviewsCard
