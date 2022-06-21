import './App.css';
import Header from './component/Header/index'
import List from './component/List';
import Footer from './component/Footer';
import React, { Component } from 'react'
export default class App extends Component {
  state = { todos: [
    {name:'吃饭',id:1,done:true},
    {name:'睡觉',id:2,done:true},
    {name:'敲代码',id:3,done:true},
  ]}
  render(){
     return (
          <div className='todo-container'>
              <div className="todo-wrap">
                  <Header/>
                  <List  todos={this.state.todos}/>
                  <Footer/>
              </div>
          </div>
        );
      } 
}
