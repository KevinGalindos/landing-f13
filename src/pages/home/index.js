import React from "react"
import LayoutPublic from "../../components/Layout/LayoutPublic/LayoutPublic";
import { BannerHome } from "../../components/PageHome/BannerHome/BannerHome";
import {OurClients} from '../../components/PageHome/OurClients/OurClients';
import Quotation from "../../components/PageHome/Quotation/Quotation";
import { WhatDoWeDo } from "../../components/PageHome/WhatDoWeDo/WhatDoWeDo";
import { WeTrain } from "../../components/PageHome/WeTrain/WeTrain";
import Knowus from "../../components/knowus/knowus";

const Home = () => {
  
  return (
    <LayoutPublic>
        <BannerHome/>
        <OurClients/>
        <WhatDoWeDo/>
        <WeTrain/>
        <Quotation/>
        <Knowus/>
    </LayoutPublic>
  )
}

export default Home