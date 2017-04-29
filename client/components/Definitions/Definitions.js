import React from 'react'
import './Definitions.scss'

export const Definitions = props => {
  const classes = props.shown ? 'definitions shown' : 'definitions'

  return(
    <div className={ classes }>
      <div>
        <h3>Definitions</h3>

        <ul>
          <li onClick={ props.hideHelp }>hide</li>
        </ul>
      </div>
    </div>
  )
}
