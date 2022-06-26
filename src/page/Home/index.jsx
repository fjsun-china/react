import React, { Component } from 'react'
import'./index.css'
import News from './News'
import Message from './Message'
import MyNavLink from '../../component/MyNavLink'
import { Route, Switch, Redirect} from 'react-router-dom' 
export default class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<ul>
						<li><MyNavLink to='/home/news' children='News'/></li>
						<li><MyNavLink to='/home/message' children='Message'/></li>
					</ul>
				</div>
				<div>
					<Switch>
						<Route path='/home/news' component={News}/>
						<Route path='/home/message' component={Message}/>
						<Redirect to='/home/news'/>
					</Switch>
					</div>
			</div>
		)
	}
}
