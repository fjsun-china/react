import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
export default class Search extends Component {
	search = ()=>{
    //解构赋值并给value重命名
    const {keyWordElement:{value:keyWord}} = this;
	//发送网络请求
	console.log(keyWord)
	// axios({
	// 	method:'GET',
	// 	url:'http://localhost:3000/students'
	// }).then((response)=>{
	// 	console.log('成功'+ response.data);
	// },(error)=>{
	// 	console.log('失败'+error)
	// })
	axios({
		method:'GET',
		url:`/api1/search/users?q=${keyWord}`
	}).then((response)=>{
		console.log('成功'+ response.data);
	},(error)=>{
		console.log('失败'+error)
	})
  }
  render() {
	return (
		<section className="jumbotron">
			<h3 className="jumbotron-heading">搜索github用户</h3>
			<div>
				<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
				<button onClick={this.search}>搜索</button>
			</div>
		</section>
	)
	}
}