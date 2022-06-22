import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Item extends Component {
  static propTypes = {
    changeTodoChecked:PropTypes.func.isRequired,
  }
  state = {mouse:false};
  handleMouseEnter(){
    return ()=>{
      this.setState({
        mouse:true
      })
    }
  }
  handleMouseLeave(){
    return ()=>{
      this.setState({
        mouse:false
      })
    }
  }
  handleChange = (id)=>{
    return (event)=>{
      this.props.changeTodoChecked(id,event.target.checked);
    }
  }
  deleteTodo = (id)=>{
    const {deleteTodos} = this.props;
    deleteTodos(id);
  }
  render() {
    const {mouse} = this.state;
    const {item} = this.props;
    return (    
        <li style={{ backgroundColor: mouse? '#ddd': 'white'}} onMouseEnter = {this.handleMouseEnter()} onMouseLeave={this.handleMouseLeave()}>
            <label>
              <input type="checkbox" checked = {item.done} onChange = {this.handleChange(item.id)}></input>
              <span>{item.name}</span>
            </label>
            <button onClick={()=>this.deleteTodo(item.id)} style={{display:mouse?'block':'none'}}>删除</button>
        </li>
    )
  }
}
