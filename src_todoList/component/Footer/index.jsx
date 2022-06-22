import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {

  handleAllTodo = (event)=>{
    const {handleAllTodos} = this.props;
    const flag = event.target.checked;
    handleAllTodos(flag);
  }
  clearTodos = ()=>{
    const {clearTodosDone} = this.props;
    clearTodosDone();
  }
  render() {
    const {todos} = this.props
    const todosDone = todos.filter((item)=>{
      return item.done === true;
    })
    const totalTodos = todos.length;
    return (
      <div className='todo-Footer'>
        <label>
          <input type="checkbox" checked = {totalTodos === todosDone.length &&  totalTodos !==0 ? true : false} onChange = {this.handleAllTodo}></input>
          <span>已完成{todosDone.length}/全部{todos.length}</span>
        </label>
        <button onClick = {this.clearTodos}>清除已完成任务</button>
      </div>
    )
  }
}
