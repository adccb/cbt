import React from 'react'
import './Navbar.scss'

export const Navbar = props => {
  return(
    <div className='navbar'>
      <div className='nav-left'>
        <div className='img-container' onClick={ props.showDrawer }>
          <img src='/img/hamburger-menu.png' alt='' />
        </div>
      </div>

      <div className='nav-right'>
        <div className='img-container' onClick={ props.showHelp }>
          <img src='/img/see-more.png' alt='' />
        </div>
      </div>
    </div>
  )
}
