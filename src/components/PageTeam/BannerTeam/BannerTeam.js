import React from "react"
import LogoF13 from "../../../assets/images/Icons/LogoWhite.png"

import flatline from "../../../assets/images/Banners/linkedin_flatline.svg"

const BannerTeam = () => {
  return (
    <div className="banner-team">
      <div className="container">
        <div className="logo">
          <img src={LogoF13} alt="Logo-F13" />
        </div>
        <div className="banner-team__content">
          <img src={flatline} alt="flatline" />
          <p className="primary-title">
            Contamos con expertos dispuestos a seguir construyendo comunidad
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerTeam
