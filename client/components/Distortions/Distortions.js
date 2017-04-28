import React from 'react'
import './Distortions.scss'

export const Distortions = props => {
  const distortionValues = props.list.map((i, index) => (
    <option value={ index } key={ index }>
      { i }
    </option>
  ))

  const entries = props.entries.map(i => (
    <li key={ i.createdAt }>
      <select onChange={ e => props.handleChange(e) }
        id={ `distortion-${ i.createdAt }` }>
        { distortionValues }
      </select>
    </li>
  ))

  return(
    <div className='panel'>
      <div>
        <h3>Distortions</h3>

        <ul>
          { entries }
        </ul>
      </div>
    </div>
  )
}
