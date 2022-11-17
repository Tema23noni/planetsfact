import React, {  useEffect, useState } from 'react' 
import {motion} from "framer-motion";
import cl from '../App.module.scss';

import { Context } from '../Context';
type Props = {}

const Cursor = (props: Props) => {
    const [mousePos, setMousePos] = useState({
        x:0,
        y:0,
    })
    const [cursorVar, setCursorVar] = useState('default');
    useEffect(() =>{
        const mouseMove = (e:any) =>{
            setMousePos({
                x: e.clientX,
                y: e.clientY
            })
            if(e.target.className === 'link' || e.target.id === 'planet' ){
                setCursorVar('link')
            }
            else if(e.target.id === 'btn'){
                setCursorVar('btn')
            }
            else{
                setCursorVar('default')
            }            
        }
        
        window.addEventListener('mousemove', mouseMove)
        return () =>{
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    const variants = {
        default: {
            x: mousePos.x+2,
            y: mousePos.y,
            border: '2px solid #000',
            backgrounColor: 'rgba($color: #fff, $alpha: 0.3)'
        },
        link:{
            height: 60,
            width: 60,
            x: mousePos.x -5,
            y: mousePos.y -5,
            border: '2px solid white'            
        },
        btn:{
            x: mousePos.x+2,
            y: mousePos.y,
            backgrounColor: 'none',
            border: '2px solid grey'
        },
    }
    return (
    <>
        <motion.div
            className={cl.cursor}
            variants={variants}
            animate={cursorVar}
        >
        </motion.div>
    
    </>
  )
}

export default Cursor