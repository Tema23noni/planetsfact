import React, { useContext, useEffect, useState } from 'react';
import { planets } from '../../dataOfPlanet';
import cl from './Main.module.scss';
import {motion} from 'framer-motion';
import { Context } from '../../Context';
type Props = {}

const Planet = (props: Props) => {
    const {selectPlanet} = useContext(Context)
    const [movingVal, setMovingVal] = useState({
        x: -20,
        y: -10
    })
    useEffect(() =>{
        const paralax = (e: any) =>{
            setMovingVal({
                x: (e.clientX * movingVal.x)/200,
                y: (e.clientY * movingVal.y)/200
            })
        }
        window.addEventListener('mousemove', paralax);
        return () =>{
            window.removeEventListener('mousemove', paralax)
        }
    }, [])
    const variants = {
        default:{
            x: movingVal.x,
            y: movingVal.y
        }
    }
  return (
    <div className={cl.planCont}>
        <motion.img variants={variants}
        animate='default' src={selectPlanet.img} id='planet' className={cl.planet}/>
    </div>
  )
}

export default Planet