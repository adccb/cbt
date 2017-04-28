import React from 'react'
import './Thoughts.scss'

export const Thoughts = props => {
  const entries = props.entries.map(i => (
    <li key={ i.createdAt }>
      <input type='text' defaultValue={ i.thought }
        id={ `thought-${ i.createdAt }` }
        placeholder='Thought...'
        onChange={ e => props.handleChange(e) } />
    </li>
  ))

  return(
    <div className='panel' id='thoughts'>
      <div>
        <h3>Thoughts</h3>

        <ul>
          { entries }
        </ul>
      </div>
    </div>
  )
}
