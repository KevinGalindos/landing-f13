import React from "react"
import { Button } from "antd"
import { Link } from "gatsby"

const CardJob = ({ data }) => {
  return (
    <div className="card-jobs">
      <h3 className="paragraphs">{data.title}</h3>
      <img src={data.img} alt={data.title} />
      <p className="short-texts">{data.description}</p>
      <Button className="button--primary"><Link to="/team">Ver más</Link></Button>
    </div>
  )
}

export default CardJob
