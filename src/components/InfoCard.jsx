import React from 'react'

import { BsFillInfoCircleFill } from "react-icons/bs"

export default function  InfoCard({title, children}) {
  return (
    <div className="infoCard">
    <h3> <BsFillInfoCircleFill/>{title}</h3>
    <p>{children}</p>
  </div>
  )
}


