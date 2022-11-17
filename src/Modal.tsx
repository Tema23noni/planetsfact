import React, { useContext } from 'react'
import { Context } from './Context';
type Props = {}

const Modal = ({}) => {
    const {active,setActive, selectPlanet} = useContext(Context);
  return (
    <div className={active ? 'modal__active': 'modal'} onClick={() => setActive(false)}>
        <div className="modal__cont" onClick={e => e.stopPropagation()}>
            <div className='modal__close' onClick={() => setActive(false)}>CLOSE</div>
            <h2 className='modal__title'>{selectPlanet.title}</h2>
            <div className='modal__fact'>
                {
                    selectPlanet.fact.map((e:string, i:number) =>{
                        return <p key={i}>{i+1}. {e}</p>
                    })
                }
            </div>
        </div>
    </div>  
  )
}

export default Modal