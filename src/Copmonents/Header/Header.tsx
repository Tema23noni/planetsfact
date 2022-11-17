import React, { useEffect, useState } from 'react'
import Logo from './Logo';
import Nav from './Nav';
import cl from './Header.module.scss';
import BNav from './Menu/BNav';
import Menu from './Menu/Menu.jsx';

function Header(){
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [bergerActive, setBergerActive] = useState(false);
  useEffect(() =>{
    const widthScreen = () =>{
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', widthScreen)
    return () => window.addEventListener('resize', widthScreen);
  }, [])
  return (
    <div className={cl.header}>
      {
        screenWidth > 750
        ?
        <>
          <Logo/>
          <Nav/>
        </>
        :
        <>
        <BNav setActive={setBergerActive} active={bergerActive}/>
        <Menu setActive={setBergerActive} active={bergerActive}/>
        </>
      }
    </div>
  )
}

export default Header