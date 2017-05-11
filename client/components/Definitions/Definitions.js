import React from 'react'
import './Definitions.scss'

export const Definitions = props => {
  const classes = props.shown ? 'definitions shown' : 'definitions'
  const redirectTo = url => { window.location = url }
  const links = {
    buyBook: 'https://www.amazon.com/gp/product/0380810336',
    cbtInfo: 'http://sourcesofinsight.com/how-to-use-the-triple-column-technique/',
    distortions: 'http://sourcesofinsight.com/10-distorted-thinking-patterns/'
  }

  return(
    <div className={ classes }>
      <div>
        <ul>
          <li onClick={ () => redirectTo(links.cbtInfo) }>
            What is CBT?
          </li>
          <li onClick={ () => redirectTo(links.buyBook) }>
            Buy the book
          </li>

          <li onClick={ () => redirectTo(links.distortions) }>
            Cognitive distortions
          </li>
          <li onClick={ props.hideHelp }>Exit</li>
        </ul>
      </div>
    </div>
  )
}
