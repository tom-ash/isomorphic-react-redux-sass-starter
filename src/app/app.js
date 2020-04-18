import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { items } = this.props

    return (
      <div id='app-container'>
        <h1>
          You are running isomorphic-react-redux-sass-starter!
        </h1>
        <div id='list'>
          <h2>
            Items:
          </h2>
          <ul>
            {items.map((item, index) =>(
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
