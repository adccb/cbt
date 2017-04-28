import React from 'react'
import './App.scss'

import { addEntry, editEntry } from '../../actions'
import { connect } from 'react-redux'

import { Navbar } from '../Navbar/Navbar'
import { Thoughts } from '../Thoughts/Thoughts'
import { Distortions } from '../Distortions/Distortions'
import { Responses } from '../Responses/Responses'

class App extends React.Component {
  handleChange(e) {
    const [ field, id ] = e.target.id.split('-')
    this.props.editEntry({
      id: parseInt(id, 10),
      field,
      value: e.target.value
    })
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
    return(
      <div>
        <Navbar addEntry={ () => this.props.addEntry() }
          nightMode={ () => this.nightMode() }/>
        <div className='flex-container'>
          <Thoughts handleChange={ e => this.handleChange(e) }
            entries={ this.props.entriesReducer.entries } />
          <Distortions list={ this.props.distortionsReducer.list }
            handleChange={ e => this.handleChange(e) }
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
    addEntry: () => dispatch(addEntry()),
    editEntry: item => dispatch(editEntry(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
