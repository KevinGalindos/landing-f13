import React from "react"
import { Button } from "antd"

import { dummy } from "../../../../../assets/common/Utils/DummyTeam"

export const RolButtons = () => {
  return (
    <div className="RolButtons">
      <div className="container">
        <div className="btn-box">
          {dummy.rolbutton.map(item => (
            <div>
              <Button className="btn-rol">{item.title}</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
