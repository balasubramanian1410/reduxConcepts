/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));*/

import {applyMiddleware,CombineReducers,createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const initialState={
	fetching:false,
	fetched:false,
	users:[],
};

const reducer = (state=initialState, action) => {
	switch(action.type){
		case "FETCHED":{
			return {...state,fetched:true,fetching:false,users:action.payload}
			break;
		}
	}
	return state;
}


const middleware = applyMiddleware(thunk, logger());

const store = createStore(reducer,middleware);

store.subscribe(() =>{
	console.log("store changed",store.getState());
})


/*store.dispatch({type:'INC',payload:1})
store.dispatch({type:'INC',payload:2})
store.dispatch({type:'INC',payload:3})
store.dispatch({type:'INC',payload:22})*/

store.dispatch((dispatch) => {
	
	dispatch({type:"FETCHED",payload:{"name":"bala","age":"24"}})
	
})