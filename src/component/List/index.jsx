import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
  render() {
    console.log(this)
    const {todos} = this.props;
    return (
      <div className='todo-List'>
          <ul>
            {
              todos.map((todo)=>{                 
                return <Item item={todo} key={todo.id}/>               
              })
            }
          </ul>
        </div>
    )
  }
}
