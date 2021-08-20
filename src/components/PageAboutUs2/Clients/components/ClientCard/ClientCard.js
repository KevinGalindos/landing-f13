import React from "react"

import PlayStore from '../../../../../assets/images/Icons/PlayStore.svg'
import AppStore from '../../../../../assets/images/Icons/AppStore.svg'

const ClientCard = ({ img, description, title, ...props }) => {

  return (
    <div className="clients-card">
      <div className="clients-card__content">
        <div className="brand">
          <img src={img} alt={title} />
        </div>
        <span className="paragraphs ">{description}</span>
        <div className="icon-stores">
        <img src={PlayStore} alt="PlayStore" />
        <img src={AppStore} alt="AppStore" />
        </div>
      </div>
    </div>
  )
}


export default ClientCard
