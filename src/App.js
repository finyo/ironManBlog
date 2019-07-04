import React from 'react';
import { Provider } from 'react-redux';
import { GlobalFontStyled } from './statics/iconfont';
import { GlobalResetStyled } from './style';
import  Header  from './common/header';
import store from './store'
function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <GlobalResetStyled />
        <GlobalFontStyled />
            <Header/>
      </div>
    </Provider>
  );
}

export default App;
