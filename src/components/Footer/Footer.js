import React from "react"
import linkendin from "../../assets/images/Icons/Linkeding.svg"
import instagram from "../../assets/images/Icons/Instagram.svg"
import twitter from "../../assets/images/Icons/Twitter.svg"
import logo from "../../assets/images/Icons/LogoWhite.svg"


const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__content__icons">
            <p className="paragraphs">Siguenos</p>
            <div className="footer__content social-content">
              <div className="rounded-img">
                <img alt="linkendin" src={linkendin} />
              </div>
              <div className="rounded-img">
                <img alt="instagram" src={instagram} />
              </div>
              <div className="rounded-img">
                <img alt="twitter" src={twitter} />
              </div>
            </div>
            <button className="button--secondary">
              Contáctanos
            </button>
          </div>
          <div className="footer__content__contact">
            <div className="col-links">
              <a className="paragraphs" href="/#">Nosotros</a>
              <a className="paragraphs" href="/#">Acerca de f13</a>
              <a className="paragraphs" href="/#">Diseño</a>
              <a className="paragraphs" href="/#">Políticas</a>
            </div>
            <div className="col-links">
              <p className="paragraphs">Conéctate con nosotros</p>
              <p className="paragraphs">(057) 3134760746</p>
              <p className="paragraphs">F13florencia@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer__content__copyright-container">
          <div className="footer-logo">
            <img alt="logo" src={logo} />
          </div>
          <div className="col-links copyright-content">
            <div className="divider" />
            <p className="short-texts">F13 technologies 2020. Todos los derechos reservados</p>
            <p className="short-texts">Desarrollo por F13 en Caquetá-Colombia</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer