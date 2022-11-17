import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../../Context'
import cl from '../Header.module.scss';
import PlanetsImg from './PlanetsImg';



const Menu = ({active, setActive}) => {
    const {setSelectPlanet, planets, selectPlanet} = useContext(Context);

  return (
    <div className={active? `${cl.menu} ${cl.active}`: cl.menu} onClick={() => setActive(false)} >
      <div className={cl.blur}>
        <div className={cl.menu__cont} onClick={(e) => e.stopPropagation()}>
            <ul className={cl.bergerPlanets}>
              {
                  Object.keys(planets).map((e, i) =>{
                  return <PlanetsImg planet={planets[e]} key={i} src={planets[e].img} title={planets[e].title} setSelect={setSelectPlanet} setActive={setActive} />
                })
              }
            </ul>

        </div>
        </div>
    </div>
  )
}

export default React.memo(Menu)