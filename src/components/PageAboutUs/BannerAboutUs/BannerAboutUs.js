import React from "react"

import LogoF13 from "../../../assets/images/Icons/Logo.png"
import Banner from "../../../assets/images/Banners/conference_presentation.svg"

// import { LeftOutlined } from "@ant-design/icons"
import { Button } from "antd"

export const BannerAboutUs = () => {
  return (
    <div className="BannerAboutUs">
      <div className="container">
        <div className="banner">
          <div className="logo">
            <img src={LogoF13} alt="LogoF13" />
          </div>

          <div className="animate__animated animate__fadeIn box">
            <div className="box_image">
              <img src={Banner} alt="Conference" />
            </div>
            <div className="box_text">
              <div className="title">
                <h1 className="primary-title">Invertimos en tu educación</h1>
                <p className="paragraphs">
                  Creemos que los jóvenes al salir de sus estudios superiores
                  necesitan asesoría para enfrentar el mercado actual y lo
                  demandado en un mundo globalizado y tecnológico.{" "}
                </p>
                <Button className="button button--primary">
                  Estoy interesado
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
