import React from 'react'
import './App.scss'

import * as actions from '../../actions'
import { connect } from 'react-redux'

import { Navbar } from '../Navbar/Navbar'
import { Thoughts } from '../Thoughts/Thoughts'
import { Distortions } from '../Distortions/Distortions'
import { Responses } from '../Responses/Responses'
import { Definitions } from '../Definitions/Definitions'
import { Controls } from '../Controls/Controls'

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
    if(e.target !== document.body) return false
    switch(e.keyCode) {
      case 78:
      case 65: { this.props.addEntry() } // "n" or "a"
      break

      case 67: { this.props.clear() } // "c"
      break

      case 72: { // "h"
        this.props.layoutReducer.help
          ? this.props.hideHelp()
          : this.props.showHelp()
      }
      break

      case 77: { // "m"
        this.props.layoutReducer.controls
          ? this.props.hideDrawer()
          : this.props.showDrawer()
      }
      break

      case 83: { this.props.save() } // the "s" key
      break
    }
  }

  render() {
    return(
      <div onKeyUp={ e => this.handleKeyUp(e) }>
        <Navbar showDrawer={ () => this.props.showDrawer() }
          showHelp={ () => this.props.showHelp() }/>

        <Controls shown={ this.props.layoutReducer.controls }
          hideDrawer={ () => this.props.hideDrawer() }
          addEntry={ () => this.props.addEntry() }
          clear={ () => this.props.clear() }
          save={ () => this.props.save() } />

        <Definitions shown={ this.props.layoutReducer.help }
          hideHelp={ () => this.props.hideHelp() } />

        <div className='flex-container'>
          <Thoughts handleChange={ e => this.handleChange(e) }
            entries={ this.props.entriesReducer.entries } />
          <Distortions handleChange={ e => this.handleChange(e) }
            entries={ this.props.entriesReducer.entries } />
          <Responses handleChange={ e => this.handleChange(e) }
            entries={ this.props.entriesReducer.entries } />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => state
const mapDispatchToProps = dispatch => {
  return {
    addEntry: () => dispatch(actions.addEntry()),
    editEntry: item => dispatch(actions.editEntry(item)),
    save: () => dispatch(actions.save()),
    showDrawer: () => dispatch(actions.showDrawer()),
    hideDrawer: () => dispatch(actions.hideDrawer()),
    clear: () => dispatch(actions.clear()),
    showHelp: () => dispatch(actions.showHelp()),
    hideHelp: () => dispatch(actions.hideHelp()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
