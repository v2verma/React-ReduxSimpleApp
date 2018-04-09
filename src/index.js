import React from 'react';
import { render } from 'react-dom';
import {Provider} from "react-redux";
import {createStore ,applyMiddleware } from "redux";

import App from "./components/app";
import reducers from "./reducers";


// const App = () => (
//   <div >
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//   </div>
// );

render(
  <Provider store = {createStore(reducers)}>
    <App />
  </Provider>, document.getElementById('root'));
