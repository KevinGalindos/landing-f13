import React, { useState } from "react"

import FormBanner from "../../../assets/images/Banners/world_wide_web.svg"
import Lesson from "../../../assets/images/Banners/online_lesson.svg"

import { LeftOutlined } from "@ant-design/icons"
import { Button } from "antd"

import { FormWeTrain } from "../../Forms/FormWeTrain/FormWeTrain" 


export const WeTrain = () => {
  const [formVisible, setTormVisible] = useState("WeTrain")
  return (
    <div className="WeTrain">
      <div className="container">
        {formVisible === "WeTrain" && (
          <div className="animate__animated animate__fadeIn box">
            <div className="box_text">
              <div className="title">
                <h1 className="primary-title">
                  Además de desarrollar productos, también capacitamos
                </h1>
                <Button
                  onClick={() => setTormVisible("WeTrainFrom")}
                  className="button button--primary"
                >
                  Quiero saber más
                </Button>
              </div>
            </div>
            <div className="box_image">
              <img src={Lesson} alt="Instructive" />
            </div>
          </div>
        )}
        {formVisible === "WeTrainFrom" && (
          <div className="animate__animated animate__fadeIn box">
            <div className="box-button">
              <Button onClick={()=>setTormVisible("WeTrain")}>
              <LeftOutlined/>
              </Button>
            </div>
            <div className="box-form">
              <FormWeTrain />
            </div>
            <div className="box-img">
              <img src={FormBanner} alt="Work" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
