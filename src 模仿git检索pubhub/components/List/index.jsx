import React, { Component } from 'react'
import pubhub from 'pubsub-js'
import'./index.css'
export default class List extends Component {
	state = {
		users:[],
		isLoading:false, //是否有loading
		isFirst:true, //是否是第一次打开页面
		err:''
	};
	//组件挂载时订阅消息
	componentDidMount(){
		pubhub.subscribe('github',(_,data)=>{
			this.setState({...data})
		})
	}
	render() {
		const {users,isLoading,isFirst,err} = this.state;
		console.log(this.state)
		return (
			<div className='row'>
				{
					isFirst ? <h2>第一次打开页面，请输入关键字，点击按钮搜索</h2> :
					isLoading ? <h2>Loading......</h2> :
					err ? <h2>{err}</h2>:
					users.map((userObj)=>{
						return (
							<div key={userObj.id} className="card">
								<a rel="noreferrer" href={userObj.html_url} target="_blank">
									<img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
			)
		}
}
