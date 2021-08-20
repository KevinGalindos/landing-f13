import React from "react"
import LayoutPublic from "../../components/Layout/LayoutPublic/LayoutPublic";
import BannerTeam from "../../components/PageTeam/BannerTeam/BannerTeam";
import {CardsTeaching} from "../../components/PageTeam/CardsTeaching/CardsTeaching";
import CardsTeam from "../../components/PageTeam/CardsTeam/CardsTeam";
import Knowus from "../../components/knowus/knowus";



const Team = () => {
  
  return (
    <LayoutPublic>
        <BannerTeam/>
        <CardsTeam/>
        <CardsTeaching/>
        <Knowus/>
    </LayoutPublic>
  )
}

export default Team