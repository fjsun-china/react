import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  
  render() {
    const {todos} = this.props
    const CompleteTodos = todos.filter((item)=>{
      return item.done === true;
    })
    return (
      <div className='todo-Footer'>
        <label>
          <input type="checkbox"></input>
          <span>已完成{CompleteTodos.length}/全部{todos.length}</span>
        </label>
        <button>清除已完成任务</button>
      </div>
    )
  }
}
