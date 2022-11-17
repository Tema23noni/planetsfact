import React, { useEffect, useState } from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component';
type Props = {
    src: string,
    title: string,
    setSelect: any,
    setActive: any,
    planet:string,
}

const PlanetsImg = ({src,planet, title, setActive, setSelect}: Props) => {

  return (
    <li onClick={() => {
        
        setSelect(planet)
        setActive(false)
       
      }}><LazyLoadImage  className='link' src={src}/></li>
  )
}
export default PlanetsImg