import React, { Component } from 'react'
import HomeComponent from './component'

class Container extends Component {
  render() {
    return <HomeComponent {...this.props} />
  }
}

export default Container
