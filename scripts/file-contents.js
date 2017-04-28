const newComponentContent = `import React from 'react'
import './{{name}}.scss'

export default class {{name}} extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <p>hello world</p>
      </div>
    )
  }
}`

const newFnComponentContent = `import React from 'react'
import './{{name}}.scss'

export default function {{name}}(props) {
  return(
    <div>
      <p>hello world</p>
    </div>
  )
}`

module.exports = { newComponentContent, newFnComponentContent }
