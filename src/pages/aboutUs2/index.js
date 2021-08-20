import React from "react"

import LayoutPublic from "../../components/Layout/LayoutPublic/LayoutPublic"
import Clients from "../../components/PageAboutUs2/Clients/Clients"
import Reviews from "../../components/PageAboutUs2/Reviews/Reviews"
import {BannerAboutUs2} from '../../components/PageAboutUs2/BannerAboutUs2/BannerAboutUs2'
import {WhatWeDo2} from '../../components/PageAboutUs2/WhatWeDo2/WhatWeDo2'

import Knowus from '../../components/knowus/knowus'

const AboutUs = () => {
  return (
    <LayoutPublic>
      <BannerAboutUs2/>
      <WhatWeDo2/>
      <Clients/>
      <Reviews/>
      <Knowus/>
    </LayoutPublic>
  )
}

export default AboutUs
