import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
    return (
        //NavLink可以通过activeClassName设置样式 但是link不行
        <NavLink activeClassName='' {...this.props}/>
    )
  }
}
