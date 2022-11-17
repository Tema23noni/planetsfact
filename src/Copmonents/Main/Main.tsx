import React from 'react'
import Planet from './Planet'
import cl from './Main.module.scss';
import PlanetFact from './PlanetFact';
type Props = {}

const Main = (props: Props) => {
  return (
    <div className={cl.cont}>
      <Planet/>
      <PlanetFact/>
    </div>
  )
}

export default Main