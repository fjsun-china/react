import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../../component/MyNavLink'
import NewsContent from './NewsContent'
export default class News extends Component {
  state = {
    contents:[
      {id:1,content:'new1'},
      {id:2,content:'new2'},
      {id:3,content:'new3'},
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.contents.map((item)=>{           
              // 向路由组件传递params参数  
              //<li key={item.id}><MyNavLink to={`/home/news/detail/${item.content}/${item.id}`} children={item.content}/></li>
              return (
                // 向路由组件传递search参数
                // <li key={item.id}><MyNavLink to={`/home/news/detail/${item.content}/${item.id}`} children={item.content}/></li>
                //传递search参数
                <li key={item.id}><MyNavLink to={`/home/news/detail/?content=${item.content}&id=${item.id}`} children={item.content}/></li>
              )
            })
          }
        </ul>
        <div>
          <Switch>
            {/* 接收params参数 */}
            {/* <Route path='/home/news/detail/:content/:id' component={NewsContent}/>
             */}
             {/* 接收search参数 */}
             <Route path='/home/news/detail' component={NewsContent}/>
          </Switch>
        </div>
      </div>
    )
  }
}
