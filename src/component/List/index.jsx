import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'
export default class List extends Component {
  static propTypes = {
    changeTodoChecked:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired,
  }
  render() {
    const {todos,deleteTodos,changeTodoChecked} = this.props;
    return (
      <div className='todo-List'>
          <ul>
            {
              todos.map((todo)=>{                 
                return <Item item={todo} key={todo.id} changeTodoChecked = {changeTodoChecked} deleteTodos={deleteTodos}/>               
              })
            }
          </ul>
        </div>
    )
  }
}
