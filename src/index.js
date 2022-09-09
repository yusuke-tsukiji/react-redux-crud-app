import React from 'react';
import ReactDOM from 'react-dom/client';
import { createApi } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';
import './index.css';
import reducers from './reducers'
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createApi(reducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
