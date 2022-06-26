import React, { Component } from 'react'
import {Route,Link,NavLink, Switch, Redirect} from 'react-router-dom'
import About from './page/About'
import Home from './page/Home'
import './App.css'
import MyNavLink from './component/MyNavLink'
import Test from './page/Test'
export default class App extends Component {
  render() {
    return (
			<div className="container">
				<div className='daohang'>
					{/* 没有高亮显示 */}
					<ul>
						<li><MyNavLink to='/about' children='about'/></li>
						<li><MyNavLink to='/home' children='home'/></li>

					{/* <NavLink to='/about'>about</NavLink><br/>
					<NavLink to='/home'>home</NavLink> */}
					{/* <MyNavLink to='/test/z/x' children='test'/> */}
					</ul>
				</div>
				<div className='zhanshi'>
				{/* 这是新版的写法 */}
				{/* <Routes>
						<Route path='/' element={<About/>}/>
						<Route path='/about' element={<About/>}/>
						<Route path='/home' element={<Home/>}/>
				</Routes> */}
				{/* 这是旧版的写法 */}
				{/* Switch包裹Route  匹配到相同的path后，后面的路由就不会再去匹配 提高性能
					如果不加Switch 页面是就会显示path相同的路由内容
					path默认模糊匹配 to的路径开头和path匹配上就可以 后面的不一样也不影响
					exact严格模式 path必须和to一样
				*/}
				{/* Redirect 重定向 */}
					<Switch>
						<Route  path='/about' component={About}/>
						<Route  path='/home' component={Home}/>
						{/* <Route  path='/test' component={Test}/> */}
						<Redirect to='/about'/>
					</Switch>
				</div>
			</div>
		)
  }
}
//react中展开运算符可以批量传值props 例：{...this.state}
