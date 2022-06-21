import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  render() {
    const {item} = this.props;
    return (    
        <li>
            <label>
              <input type="checkbox"></input>
              <span>{item.name}</span>
            </label>
            <button>删除</button>
        </li>
    )
  }
}
