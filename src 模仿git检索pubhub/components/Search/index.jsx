import React, { Component } from 'react'
import axios from 'axios'
import pubhub from 'pubsub-js'
import './index.css'

export default class Search extends Component {
	search = ()=>{
    //解构赋值并给value重命名
    const {keyWordElement:{value:keyWord}} = this;
	//发送网络请求
	// console.log(keyWord)
	// axios({
	// 	method:'GET',
	// 	url:'http://localhost:3000/students'
	// }).then((response)=>{
	// 	console.log('成功'+ response.data);
	// },(error)=>{
	// 	console.log('失败'+error)
	// })
	// const {updateAppState} = this.props;
	// updateAppState({isLoading:true,isFirst:false})
	pubhub.publish('github',{isLoading:true,isFirst:false})
	axios({
		method:'GET',
		url:`/api1/search/users?q=${keyWord}`
	}).then((response)=>{
		//发布消息
	pubhub.publish('github',{isLoading:false,users:response.data.items})
		// updateAppState({isLoading:false,users:response.data.items})
	},(error)=>{
		console.log('失败'+error)
		pubhub.publish('github',{isLoading:false,err:error.message})
		// updateAppState({isLoading:false,err:error.message})
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