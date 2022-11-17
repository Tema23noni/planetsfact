import React, { useContext } from 'react'
import cl from './Header.module.scss';
import { LazyLoadImage} from 'react-lazy-load-image-component';
import {Context} from '../../Context'
import PlanetsImg from './Menu/PlanetsImg';

const Nav = () => {
  const {setSelectPlanet, planets, selectPlanet} = useContext(Context)
  return (

    <nav className={cl.contNav}>
        <ul className={cl.navigator}>
        {
              Object.keys(planets).map((e) =>{
              return <PlanetsImg planet={planets[e]} src={planets[e].img} title={planets[e].title} setSelect={setSelectPlanet}/>
            })
          }

        </ul>
    </nav>
  )
}
export default Nav