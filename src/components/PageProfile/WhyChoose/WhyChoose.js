import React from "react"

import Profiling from "../../../assets/images/Banners/wc-profiling.svg"


import { Button } from "antd"

export const WhyChoose = () => {

  return (
    <div className="WhyChoose">
      <div className="container">
        <div className="animate__animated animate__fadeIn box">
          <div className="box_image">
            <img src={Profiling} alt="Instructive" />
          </div>
          <div className="box_text">
            <div className="title">
              <h1 className="primary-title">¿Por qué escoger a F13?</h1>
              <h3 className="paragraphs">
                Jóvenes con bases tecnológicas a la vanguardia, creativos y
                productivos en colaboración con nuestros clientes.
              </h3>
              <Button className="button button--primary"
              >
                Quiero saber más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
