import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import './index.css'
export default class Header extends Component {
  static propTypes = {
    addTodos:PropTypes.func.isRequired,
  }
  handleOnkeyUp=(event)=>{
    if(event.target.value!== '' && event.keyCode === 13){
      const newTodo = {name:event.target.value,id:nanoid(),done:false}
      this.props.addTodos(newTodo);
      event.target.value ='';
    }else{
      return;
    }
  }
  render() {
    return (
      <div className='todo-header'>
        <input onKeyUp={this.handleOnkeyUp} placeholder='请输入你的任务名称，按回车确认'></input>
      </div>
    )
  }
}

