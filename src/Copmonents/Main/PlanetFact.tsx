import React, { useContext } from 'react'
import { Context } from '../../Context';
import Modal from '../../Modal';
import cl from './Main.module.scss';

type Props = {}

const PlanetFact = (props: Props) => {
  const {selectPlanet,active,setActive} = useContext(Context);
  console.log(active)
  return (
    <div className={cl.planetFact}>
        <h2 className={cl.namePlanet}>{selectPlanet.title}</h2>
        <div className={cl.charact}>
            {
              selectPlanet.size.map((e:string, i:number) => {
                return <p key={i}>{i+1} {e}</p>
              })
            }
        </div>
        <button id='btn' onClick={() => {setActive(true)}} className={cl.modalBtn}>About</button>
        <Modal/>
    </div>
  )
}

export default PlanetFact