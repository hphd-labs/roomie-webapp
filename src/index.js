import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Reducers
import reducers from './reducers';

//Containers

//Components
import Header from './components/Header';
import SplashPage from './components/splash_index';
import Signin from './components/signin';
import Missing from './components/missing';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={SplashPage}/>
            <Route path='/signin' component={Signin}/>
            <Route component={Missing}/>
          </Switch>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
