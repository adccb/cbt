import React from 'react'
import './App.scss'

import { addEntry, editEntry, save, clear } from '../../actions'
import { connect } from 'react-redux'

import { Navbar } from '../Navbar/Navbar'
import { Thoughts } from '../Thoughts/Thoughts'
import { Distortions } from '../Distortions/Distortions'
import { Responses } from '../Responses/Responses'
import { Definitions } from '../Definitions/Definitions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props = props

    document.body.addEventListener('keyup', e => this.handleKeyUp(e))
  }

  handleChange(e) {
    const [ field, id ] = e.target.id.split('-')
    this.props.editEntry({
      id: parseInt(id, 10),
      field,
      value: e.target.value
    })
  }

  handleKeyUp(e) {
    const lookup = {
      65: () => this.props.addEntry(), // the "a" key
      67: () => this.props.clear(), // the "c" key
      83: () => this.props.save() // the "s" key
    }

    if(lookup[e.keyCode]) lookup[e.keyCode]()
  }

  nightMode() {
    const [...classes] = document.body.className.split(' ')
    if(!classes.includes('night-mode')) {
      document.body.className = 'night-mode'
    } else {
      document.body.className = document.body.className.replace('night-mode', ' ')
    }
  }

  render() {
    const def = this.props.def ? <Definitions handleChange={ e => this.handleChange(e) }
      entries={ this.props.entriesReducer.entries } /> : undefined

    return(
      <div onKeyUp={ e => this.handleKeyUp(e) }>
        <Navbar addEntry={ () => this.props.addEntry() }
          nightMode={ () => this.nightMode() }
          clear={ () => this.props.clear() }
          save={ () => this.props.save() } />

        <div className='flex-container'>
          <Thoughts handleChange={ e => this.handleChange(e) }
            entries={ this.props.entriesReducer.entries } />
          <Distortions handleChange={ e => this.handleChange(e) }
            entries={ this.props.entriesReducer.entries } />
          <Responses handleChange={ e => this.handleChange(e) }
            entries={ this.props.entriesReducer.entries } />
          { def }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => state
const mapDispatchToProps = dispatch => {
  return {
    addEntry: () => dispatch(addEntry()),
    editEntry: item => dispatch(editEntry(item)),
    save: () => dispatch(save()),
    clear: () => dispatch(clear()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
