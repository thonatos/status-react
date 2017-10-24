import React, { Component } from 'react'
import styles from './full.module.css'

class Full extends Component {
  render() {
    const { children } = this.props

    return (
      <div className={styles.wrap}>
        {children}
      </div>
    )
  }
}

export default Full
