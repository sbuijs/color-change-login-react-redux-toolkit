
//------------------------------
//placing the provider
//------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

//importing the reducers
import userReducer from './features/user'
import themeReducer from './features/theme'

const store = configureStore({
  //collection of reducers ----
  //reducer is a function that takes in information about the current
  //states (previous value and action that you want to perform on that state)
  //and returns back the value of that state
  reducer: {
    user: userReducer,
    theme: themeReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
    {/* connect the provider to the information in the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
