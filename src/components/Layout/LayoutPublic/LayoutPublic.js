import React from "react"

import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"

const LayoutPublic = ({ children }) => {

  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}



export default LayoutPublic
