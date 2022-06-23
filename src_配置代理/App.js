import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
// import axios from 'axios'
export default class App extends Component {
  // getData=()=>{
  //   axios({
  //     method:'GET',
  //     url:'http://localhost:3000/cars',
  //     data: {
  //       title: "今天天气不错, 还挺风和日丽的",
  //       author: "张三"
  //     }
  //   }).then((response)=>{
  //     console.log(response)
  //   })
  // }

  render() {
    return (
			<div className="container">
				<Search/>
				<List/>
			</div>
		)
  }
}
