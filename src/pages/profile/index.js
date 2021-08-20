import React from "react"
import LayoutPublic from "../../components/Layout/LayoutPublic/LayoutPublic";
import Starter from "../../components/PageProfile/BannerProfile/BannerProfile";
import {WhyChoose} from "../../components/PageProfile/WhyChoose/WhyChoose";
import Knowus from "../../components/knowus/knowus";
import Jobs from "../../components/PageProfile/JobsProfile/JobsProfile";


const Profile = () => {
  
  return (
    <LayoutPublic>
        <Starter/>
        <Jobs/>
        <WhyChoose/>
        <Knowus/>
    </LayoutPublic>
  )
}

export default Profile