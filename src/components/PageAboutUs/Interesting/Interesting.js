import React from "react"

import question from "../../../assets/images/Icons/Question.svg"

const Interesting = () => {
  return (
    <div className="interesting">
      <div className="container">
        <div className="interesting__content">
          <div className="divider-left"/>
          <img src={question} alt="question" />
          <div className="interesting__content--description">
            <h3 className="secondary-degree ">
              ¿Porqué estamos interesados
              en capacitar?
          </h3>
            <p className="paragraphs">
              Creemos que los jóvenes al salir de sus estudios
              superiores necesitan asesoría para enfrentar
              el mercado actual y lo demandado en un mundo
              globalizado y tecnológico.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interesting
