import React from 'react';
import { Provider } from 'react-redux';
import { GlobalFontStyled } from './statics/iconfont';
import { GlobalResetStyled } from './style';
import { BrowserRouter, Route } from 'react-router-dom'
import  Header  from './common/header';
import  Footer  from './common/footer';

// 先跟着傻逼教程敲这一段代码先
import  Home  from './pages/home';
// import  daily  from './pages/daily';
import store from './store'
function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <GlobalResetStyled />
        <GlobalFontStyled />
        <Header/>
        <BrowserRouter>
          <div>
          {
            // exact，作用是让路径完全匹配，否则，当访问/detail目录时，同时也会访问到根目录
          }
            <Route path="/" exact component= { Home } ></Route>
          </div>
        </BrowserRouter>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
