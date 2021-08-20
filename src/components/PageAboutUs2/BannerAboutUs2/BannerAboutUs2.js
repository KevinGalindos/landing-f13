import React from "react"

import LogoF13 from "../../../assets/images/Icons/Logo.png"
import Banner2 from "../../../assets/images/Banners/team_meeting.svg"

// import { LeftOutlined } from "@ant-design/icons"

export const BannerAboutUs2 = () => {
  return (
    <div className="BannerAboutUs2">
      <div className="container">
        <div className="banner">
          <div className="logo">
            <img src={LogoF13} alt="LogoF13" />
          </div>

          <div className="animate__animated animate__fadeIn box">
            <div className="box_text">
              <div className="title">
                <h1 className="primary-title">
                  Te preparamos para conseguir un trabajo en tecnología y al
                  mismo tiempo capacitarte
                </h1>
              </div>
            </div>
            <div className="box_image">
              <img src={Banner2} alt="Conference" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
