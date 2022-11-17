import React from 'react'
import cl from '../Header.module.scss'
type Props = {
    setActive: any,
    active: boolean
}

const BNav = ({setActive,active}:Props) => {
  console.log(active)
  return (
    <div className={cl.burger__cont} onClick={() => setActive(!active)}>
        <div className={cl.burgerBtn} >
            <span/>
        </div>
    </div>
  )
}

export default BNav