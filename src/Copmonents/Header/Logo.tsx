import React from 'react'
import cl from './Header.module.scss';
type Props = {}

const Logo = (props: Props) => {
  return (
    <div className={cl.logoText}>Planets Fact</div>
  )
}
export default Logo