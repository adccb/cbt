import React from 'react'
import './Navbar.scss'

export const Navbar = props => {
  return(
    <div className='navbar'>
      <div className='control'>
        <img onClick={ props.addEntry } src='/img/plus.png' alt='' />
      </div>

      <div className='control'>
        <img onClick={ props.nightMode } src='/img/brightness.svg' alt='' />
      </div>

      <div className='control'>
        <img onClick={ props.save } src='/img/save.svg' alt='' />
      </div>

      <div className='control'>
        <img onClick={ props.clear } src='/img/cancel.svg' alt='' />
      </div>
    </div>
  )
}
