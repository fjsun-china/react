import React, { Component } from 'react'
import qs from 'qs'
export default class NewsContent extends Component {
  //获取params参数
  // render() {
  //   console.log(this.props)
  //   return (
  //       <div>
  //       <ul>
  //         <li>id:{this.props.match.params.id}</li>
  //         <li>content:{this.props.match.params.content}</li>
  //       </ul>
  //     </div>
  //   )
  // }
  //获取search参数
  render() {
    let {search} = this.props.location;
    let {id,content} = qs.parse(search.slice(1));
    console.log(this.props)
    return (
        <div>
        <ul>
          <li>id:{id}</li>
          <li>content:{content}</li>
        </ul>
      </div>
    )
  }
}
