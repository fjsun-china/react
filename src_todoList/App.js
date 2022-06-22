import './App.css';
import Header from './component/Header/index'
import List from './component/List';
import Footer from './component/Footer';
import React, { Component } from 'react';
export default class App extends Component {
  state = { todos: [
    {name:'吃饭',id:1,done:false},
    {name:'睡觉',id:2,done:false},
    {name:'敲代码',id:3,done:false},
  ],}

  addTodos = (todo)=>{
    const {todos} = this.state;
    this.setState({
      todos:[todo,...todos]
    });
  }
  changeTodoChecked=(id,checked)=>{
    const newTodos = this.state.todos.map((item)=>{
        if(id===item.id){
          return {...item,done:checked}
        }else{
           return item;
        }
      })
      this.setState({todos:newTodos})
  }
  deleteTodos = (id)=>{
    const newTodos = this.state.todos.filter((item)=>{
      return item.id !== id;
    })
    this.setState({todos:newTodos})
  }
  handleAllTodos=(checked)=>{
    const {todos} = this.state;
    const newTodos = todos.map((item)=>{
      item.done = checked;
      return item; 
    })
    this.setState({todos:newTodos})
  }
  clearTodosDone =()=>{
    const {todos} = this.state;
    const newTodos = todos.map((item)=>{
      if(item.done === true) item.done = false
      return item; 
    });
    this.setState({todos:newTodos})
    const todolist = todos.filter((item)=>{
      return item.done === false;
   });
   if(todolist.length <= 0){
     this.setState({TodosAllChecked:false})
   }
  }
  render(){
     return (
          <div className='todo-container'>
              <div className="todo-wrap">
                  <Header addTodos = {this.addTodos}/>
                  <List  todos={this.state.todos} changeTodoChecked={this.changeTodoChecked} deleteTodos = {this.deleteTodos}/>
                  <Footer todos={this.state.todos} handleAllTodos={this.handleAllTodos} clearTodosDone={this.clearTodosDone}/>
              </div>
          </div>
        );
      } 
}
