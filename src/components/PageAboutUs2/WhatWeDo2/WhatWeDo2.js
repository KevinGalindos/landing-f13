import React from "react"

import Marketing from "../../../assets/images/Banners/marketing.svg"

export const WhatWeDo2 = () => {
  return (
    <div className="WhatWeDo2">
      <div className="container">
        <div className="WhatWeDo2-content">
          <div className="text">
            <h1 className="primary-title">¿Qué hacemos?</h1>
            <p className="paragraphs">
              En F13 contamos con estrategias para agilizar procesos,
              optimizando tiempos para obtener resultados de calidad y siguiendo
              estándares. Queremos ser líderes en proyectos tecnológicos
              teniendo en cuenta siempre la experiencia de nuestros clientes y
              capacitando a nuestro equipo.{" "}
            </p>
          </div>

          <div className="banner-img">
            <img src={Marketing} alt="Marketing"/>
          </div>
        </div>
      </div>
    </div>
  )
}
