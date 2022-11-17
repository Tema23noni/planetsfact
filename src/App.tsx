import React, { useEffect, useState } from 'react';
import Header from './Copmonents/Header/Header';
import cl from './App.module.scss';
import Main from './Copmonents/Main/Main';
import Cursor from './Copmonents/Cursor';
import {Context} from './Context';
import {planets} from './dataOfPlanet';
import Modal from './Modal';

type Props = {};

function App(props: Props){
  const [selectPlanet, setSelectPlanet] = useState(planets.mars)
  const [active, setActive] = useState(false);

  const value = {
    selectPlanet,
    setSelectPlanet,
    planets,
    active,
    setActive
  }

  return (
    <Context.Provider value={value}>
    <div className={cl.App}>
      <Cursor/>
      <div className={cl.cont}>
        
        <Header/>
        <div className={cl.contSun}>
          <div className={cl.sun}></div>
        </div>
        <Main/>
      </div>
      
    </div>
    </Context.Provider>
  )
}

export default App
