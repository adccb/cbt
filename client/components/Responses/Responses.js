import React from 'react'
import './Responses.scss'

export const Responses = props => {
  const entries = props.entries.map(i => (
    <li key={ i.createdAt }>
      <input type='text' defaultValue={ i.response }
        id={ `response-${ i.createdAt }` }
        placeholder='Response...'
        onChange={ e => props.handleChange(e) } />
    </li>
  ))

  return(
    <div className='panel' id='thoughts'>
      <div>
        <h3>Responses</h3>

        <ul>
          { entries }
        </ul>
      </div>
    </div>
  )
}
