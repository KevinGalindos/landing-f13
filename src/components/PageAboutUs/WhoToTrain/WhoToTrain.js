import React from "react"
import { Link } from "gatsby"
import { Button } from "antd"

import profile_analysis from "../../../assets/images/Icons/profile_analysis.svg"

const WhoToTrain = () => {
  return (
    <div className="who-train">
      <div className="container">
        <div className="who-train__content">
          <img src={profile_analysis} alt="question" />
          <div className="who-train__content--description">
            <h3 className="secondary-degree ">
              ¿A quiénes capacitamos?
          </h3>
            <p className="paragraphs">
              Jóvenes dispuestos a desaprender
              para generar nuevos conocimientos
              en pro de su progreso profesional
          </p>
            <Button className="button--primary"><Link to="/team">Ver más</Link></Button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoToTrain
