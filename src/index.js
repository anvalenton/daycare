import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './rootReducer';
import {Provider} from 'react-redux';   
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
      ? a => a
      : window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();