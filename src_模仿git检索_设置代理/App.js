import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import { logDOM } from '@testing-library/react';
export default class App extends Component {
  state = {
    users:[],
    isLoading:false, //是否有loading
    isFirst:true, //是否是第一次打开页面
    err:''
  };

  updateAppState = (stateObject)=>{
    this.setState(stateObject)
  }
  render() {
    return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<List {...this.state}/>
			</div>
		)
  }
}
//react中展开运算符可以批量传值props 例：{...this.state}