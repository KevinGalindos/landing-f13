import React from "react"

import LayoutPublic from "../../components/Layout/LayoutPublic/LayoutPublic"
import { BannerAboutUs } from "../../components/PageAboutUs/BannerAboutUs/BannerAboutUs"
import { Cards } from "../../components/PageAboutUs/Cards/Cards"
import Interesting from "../../components/PageAboutUs/Interesting/Interesting"
import WhoToTrain from "../../components/PageAboutUs/WhoToTrain/WhoToTrain"
import Knowus from '../../components/knowus/knowus'

const AboutUs = () => {
  return (
    <LayoutPublic>
      <BannerAboutUs />
      <Interesting />
      <Cards/>
      <WhoToTrain />
      <Knowus/>
    </LayoutPublic>
  )
}

export default AboutUs
