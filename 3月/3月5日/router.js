//react-router
//v3

// import { Router , Route, IndexRoute } from 'react-router'
// const PrimaryLayout = props => (
//     <div>
//         <header>this is header </header>
//         <main>this is main</main>
//     </div>
// )


// const HomePage = () => <div>home page</div>
// const UserPage = () => <div>user page</div>


// const App = () => (
//     <Router history={browserHistory}>
//       <Route path="/" component={PrimaryLayout}>
//         <IndexRoute component={HomePage} />
//         <Route path="/users" component={UsersPage} />
//       </Route>
//     </Router>
//   )
  
// render(<App />, document.getElementById('root'))

// IndexRouter => 默认的  
// 例如上方 当访问 ‘/’ 的时候 page = PrimaryLayout + HomePage 因为使用了IndexRouter
// Router里面嵌套route,其他地方不行, 也就是只能有一个router






//react-router 
// v4

import { BrowserRouter, Route } from 'react-router-dom'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

render(<App />, document.getElementById('root'))

// 区别 可以在组件内部嵌套router，不用像v3一样必须写在route里面
// react-router 变为 react-route

//react-router4的api
//route => 这个不用多说

//switch 使用这个api之后只匹配一次
// import React from "react";
// import { render } from "react-dom";
// import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

// const HomePage = () => <div>Home Page</div>;
// const UserPage = () => <div>Users Page</div>;
// const UserAddPage = () => <div>user add page</div>;
// const PrimaryLayout = () => (
//   <div className="primary-layout">
//     <main>
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/users/add" component={UserAddPage} />
//         <Route path="/users" component={UserPage} />
//         <Redirect to="/" />
//       </Switch>
//     </main>
//   </div>
// );

// const App = () => (
//   <BrowserRouter>
//     <PrimaryLayout />
//   </BrowserRouter>
// )

// render(<App />, document.getElementById("root"));


//上面Switch不存在的时候 
// 我们访问 `/users/add` 的时候 答案是 homePage + UserAddPage + UserPage
// 第一个Route中的 exact ，一定要加, 否则，在访问 /user 或 /user/add 的时候还是会匹配到 /


// Redirect 
// 一般放在最后 就是都没有匹配到的时候重定向



//router中的参数 

{/* <Route path='/demo/:name' component={DemoPage} />
const DemoPage = (props) => (
    <div>
      demo page, name = {props.match.params.name}
    </div>
) */}


// 当我访问 `/demo/kjj`的时候 页面现实 demo page, name = kjj


// 通过props.match.params访问



// 嵌套布局


<Route path="/demo" component={DemoRouter} />
const DemoRouter = (props) => (
    <div>
      <Switch>
        <Route path={props.match.path} exact component={DemoPage} />
        <Route path={`${props.match.path}/:userName`} component={DemoPageHa}/>
      </Switch>
    </div>
  )
  
const DemoPageHa = (props) => (
<div>
    {props.match.params.userName}
</div>
)

// 访问/demo/kjj 显示kjj
也就是说在route上component可以通过prop.match.path来访问path