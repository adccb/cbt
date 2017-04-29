import React from 'react'
import './Controls.scss'

export const Controls = props => {
  const classes = props.shown ? 'controls shown' : 'controls'

  return(
    <div className={ classes }>
      <div>
        <ul>
          <li onClick={ props.addEntry }>Add entry</li>
          <li onClick={ props.save }>Save</li>
          <li onClick={ props.clear }>Clear save</li>
          <li onClick={ props.hideDrawer }>Exit</li>
        </ul>
      </div>
    </div>
  )
}
