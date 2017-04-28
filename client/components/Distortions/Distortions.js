import React from 'react'
import './Distortions.scss'

const distortions = [
  'all-or-nothing thinking', 'overgeneralization', 'mental filter', 'should statements',
  'disqualifying the positive', 'jumping to conclusions', 'emotional reasoning',
  'magnification or minimization', 'labeling and mislabeling', 'personalization',
]

export const Distortions = props => {
  const distortionValues = distortions.map((i, index) => (
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
