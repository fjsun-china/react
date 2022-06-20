import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  render() {
    return (
      <div className='todo-Item'>
        <li>
          <label>
            <input type="checkbox"></input>
            <span>xxxxxx</span>
          </label>
          <button>删除</button>
        </li>
      </div>
    )
  }
}
