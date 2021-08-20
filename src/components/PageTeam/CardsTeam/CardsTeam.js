import { Col } from "antd"
import React from "react"
import { dummy } from "../../../assets/common/Utils/DummyTeam"

import Card from "../CardsTeam/component/card"
import { RolButtons } from "../CardsTeam/component/RolButtons/RolButtons"

const CardsTeam = () => {
  return (
    <div className="cards-team">
      <div className="container">
        <h2 className="primary-title"> ¿Con quienes contamos?</h2>
          <RolButtons />
        <Col>
          {dummy.members.map(item => (
            <Card data={item} />
          ))}
        </Col>
      </div>
    </div>
  )
}

export default CardsTeam
