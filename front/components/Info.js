import React, { Component } from 'react'
import '../styles/info.scss'

import * as infoDataTypes from '../constants/infoDataTypes.js'
import { Books } from './info'

class Info extends Component {
  renderByType() {
    const {data} = this.props
    switch (data.infoDataType) {
      case infoDataTypes.BOOKS: return <Books />
      default: break;
    }
  }
  render() {
    return (
      <div className='info'>
        { this.renderByType() }
      </div>
    )
  }
}

export default Info
