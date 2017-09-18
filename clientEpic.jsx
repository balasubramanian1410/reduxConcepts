import React from "react"
import ReactDOM from "react-dom"
import 'rxjs';

console.clear();

const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });
const callAjax = () => ({ type: 'AJAX_CALL' });


const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PING });
	
	
const apiEpic = (action$) =>
    action$.ofType('AJAX_CALL').mapTo({ type: PONG });

	

const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };
	
    default:
      return state;
  }
};

// components/App.js/////////////////////


import {connect} from "react-redux"

let App = ({ isPinging, ping,callAjax }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
	<button onClick={callAjax}>Start AJAX_CALL</button>
  </div>
);

App = connect(
  ({ isPinging }) => ({ isPinging }),{ ping,callAjax }
)(App);

// redux/configureStore.js//////////////////////////////////

import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import {createEpicMiddleware} from "redux-observable"
import { combineEpics } from 'redux-observable';

const rootEpic = combineEpics(
  apiEpic,
  pingEpic
);

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(pingReducer,applyMiddleware(epicMiddleware));

// index.js////////////////////////

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);