import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  render() {
    return (
      <div className='todo-Footer'>
        <label>
          <input type="checkbox"></input>
          <span>已完成{}/全部{}</span>
        </label>
        <button>清楚已完成任务</button>
      </div>
    )
  }
}
