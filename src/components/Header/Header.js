import React, { useState } from "react"

import linkendin from "../../assets/images/Icons/Linkeding.svg"
import instagram from "../../assets/images/Icons/Instagram.svg"
import twitter from "../../assets/images/Icons/Twitter.svg"
import spain from "../../assets/images/Icons/espana.svg"
import { menuHamburguer } from "./components/menuResponsive/menuResponsive";
import { Dropdown,Select } from "antd"
import {  MenuOutlined } from "@ant-design/icons"


import { dummy } from "../../assets/common/Utils/DummyHome"

const Header = () => {
  const [flag, setFlags] = useState(spain)
  const [visible, setVisible] = useState(false)
  const changeLanguage = body => setFlags(body)
  console.log(visible)
  const options = (
    <>
       {dummy.flag.map(item => (
        <option key={item.id} onClick={() => changeLanguage(item.image)}>
          <img alt={item.name} src={item.image} />
        </option>
      ))}
    </>
  )
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content__icons">
            <img alt="linkendin" src={linkendin} />
            <img alt="instagram" src={instagram} />
            <img alt="twitter" src={twitter} />
          </div>
          <div className="header__content__menu">
            <a href="/#" className="short-texts ">
              Contáctanos
            </a>
            <a href="/#" className="short-texts ">
              Nosotros
            </a>
            <a href="/#" className="short-texts ">
              Servicios
            </a>
            <Select defaultValue={ <img  alt="flag" src={flag} />}>
            {options}
            </Select>
          </div>
          <div className="header__content__hamburger-menu">
            <Dropdown overlay={() => menuHamburguer({setVisible})} trigger={['click']} visible={visible} placement="topLeft" onClick={()=>setVisible(true)}>
              <MenuOutlined color="white" />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
