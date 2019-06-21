import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

// Redux
import { applyMiddleware, createStore } from 'redux'
import { Provider, ReactReduxContext } from "react-redux";

//React routee
import { Route, BrowserRouter as Router } from 'react-router-dom'

// Custom
import Login from './Views/Login'
import App from './App';
import allReducers from './reducers/'
import { save, load } from "redux-localstorage-simple"

// Save to local storage using the redux middleware
// everytime an action is handled by a reducer
const createStoreWithMiddleware
    = applyMiddleware(save())(createStore)

// Load state from local storage when we create store
const store = createStoreWithMiddleware(
    allReducers,
    load()
)

ReactDOM.render(

    <Router>
        <Provider store={store} context={ReactReduxContext}>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/app" component={App} />
        </Provider>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
