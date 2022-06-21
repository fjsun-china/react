import './App.css';
import Header from './component/Header/index'
import List from './component/List';
import Footer from './component/Footer';
import React, { Component } from 'react';
export default class App extends Component {
  state = { todos: [
    {name:'吃饭',id:1,done:true},
    {name:'睡觉',id:2,done:true},
    {name:'敲代码',id:3,done:true},
  ]}

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
  deleteTodo = (id)=>{
    const newTodos = this.state.todos.filter((item)=>{
      return item.id !== id;
    })
    this.setState({todos:newTodos})
  }
  render(){
     return (
          <div className='todo-container'>
              <div className="todo-wrap">
                  <Header addTodos = {this.addTodos}/>
                  <List  todos={this.state.todos} changeTodoChecked={this.changeTodoChecked} deleteTodo = {this.deleteTodo}/>
                  <Footer todos={this.state.todos} />
              </div>
          </div>
        );
      } 
}
