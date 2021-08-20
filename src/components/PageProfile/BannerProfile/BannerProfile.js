import React from "react"
import LogoF13 from "../../../assets/images/Icons/Logo.png"
import LogoF13White from "../../../assets/images/Icons/LogoWhite.png"

import flatline from "../../../assets/images/Banners/banner-profile.svg"

const Starter = () => {
  return (
    <div className="banner-profile">
      <div className="container">
        <div className="logo">
          <img src={LogoF13} alt="Logo-F13" />
        </div>
        <div className="logoWhite">
          <img src={LogoF13White} alt="Logo-F13" />
        </div>
        <div className="banner-profile__content">
          <h2 className="primary-title">
            Aquí puedes empezar o continuar con tu idea
          </h2>
          <img src={flatline} alt="flatline" />
        </div>
      </div>
    </div>
  )
}

export default Starter
