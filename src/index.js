import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import signUpReducer from './features/signup';

const store = createStore(signUpReducer,composeWithDevTools());
console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>


      <App />
    
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// reportWebVitals();
