/*import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import Layout from "./components/Layout"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>	
,app); */

/**
 * IMPORTANT ***************************************************************
 *
 * This example uses the global version of RxJS that includes ALL operators.
 * Inside your app, you will likely need to import the operators you use or
 * import all of them in your index.js entry file.
 *
 * Learn more about this: http://goo.gl/4ZlYeC
 */

import React from "react"
import ReactDOM from "react-dom"
import 'rxjs';

console.clear();

const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });
const cancelCall = () => {console.log('called cancel'); return({ type: 'cancelCall' })};
const callAjax = (payload) => ({ type: 'AJAX_CALL', payload:payload});


const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: PING });
	
import { ajax } from 'rxjs/observable/dom/ajax';
import Rx from 'rxjs/Rx';

const apiEpic = (action$) => {
	var xhttp = new XMLHttpRequest();
	return action$.ofType('AJAX_CALL').debounceTime(500).switchMap((action) => {
		
          const promiseSource  =  Rx.Observable.from(new Promise( (resolve,reject) => {				
				
				

				xhttp.open("POST", "https://appraisalauthenction01.azurewebsites.net/AppraisalServices/rest/routingRestClass/processRequestPost", true);

				xhttp.setRequestHeader("Content-type", "text/plain");

				xhttp.send("{'adfsToken':'PHNhbWxwOlJlc3BvbnNlIElEPSJfODZiOWIzMjktNGJmNi00ZDEzLWEyMjEtZjIyZTFjZjZlMGNiIiBWZXJzaW9uPSIyLjAiIElzc3VlSW5zdGFudD0iMjAxNy0wOC0xOFQxMDo0MTo0NC4wOTJaIiBEZXN0aW5hdGlvbj0iaHR0cHM6Ly9hcHByYWlzYWxhdXRoZW5jdGlvbjAxLmF6dXJld2Vic2l0ZXMubmV0L0RlbW9DaGVjay9DaGVja2F1dGhlbnRpY2F0aW9uIiBDb25zZW50PSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6Y29uc2VudDp1bnNwZWNpZmllZCIgSW5SZXNwb25zZVRvPSJfY2M5ODNiMzAtMzJhOC00MmRhLTk2ODktZWVhZTcxYmMyNWRiIiB4bWxuczpzYW1scD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48SXNzdWVyIHhtbG5zPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIj5odHRwOi8vcG5lLWhqbi1hZGZzMjAxLndpcHJvLmNvbS9hZGZzL3NlcnZpY2VzL3RydXN0PC9Jc3N1ZXIFUsSPHNhbWxwOlN0YXR1cz48c2FtbHA6U3RhdHVzQ29kZSBWYWx1ZT0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnN0YXR1czpTdWNjZXNzIiAvPjwvc2FtbHA6U3RhdHVzPjxBc3NlcnRpb24gSUQ9Il83YTkyODhjMC1jNzhjLTQ3OTctOTI5OS04MDA0NTgwYzg4N2EiIElzc3VlSW5zdGFudD0iMjAxNy0wOC0xOFQxMDo0MTo0NC4wOTJaIiBWZXJzaW9uPSIyLjAiIHhtbG5zPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YXNzZXJ0aW9uIj48SXNzdWVyPmh0dHA6Ly9wbmUtaGpuLWFkZnMyMDEud2lwcm8uY29tL2FkZnMvc2VydmljZXMvdHJ1c3Q8L0lzc3Vlcj48ZHM6U2lnbmF0dXJlIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6U2lnbmVkSW5mbz48ZHM6Q2Fub25pY2FsaXphdGlvbk1ldGhvZCBBbGdvcml0aG09Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvMTAveG1sLWV4Yy1jMTRuIyIgLz48ZHM6U2lnbmF0dXJlTWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxkc2lnLW1vcmUjcnNhLXNoYTI1NiIgLz48ZHM6UmVmZXJlbmNlIFVSST0iI183YTkyODhjMC1jNzhjLTQ3OTctOTI5OS04MDA0NTgwYzg4N2EiPjxkczpUcmFuc2Zvcm1zPjxkczpUcmFuc2Zvcm0gQWxnb3JpdGhtPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjZW52ZWxvcGVkLXNpZ25hdHVyZSIgLz48ZHM6VHJhbnNmb3JtIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8xMC94bWwtZXhjLWMxNG4jIiAvPjwvZHM6VHJhbnNmb3Jtcz48ZHM6RGlnZXN0TWV0aG9kIEFsZ29yaXRobT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxlbmMjc2hhMjU2IiAvPjxkczpEaWdlc3RWYWx1ZT44TU1BME5RRzV1MU5wdEQvUXZ1cFpNdGU4czdUTi94WmNpelBENUpEejFzPTwvZHM6RGlnZXN0VmFsdWUFUsSPC9kczpSZWZlcmVuY2UFUsSPC9kczpTaWduZWRJbmZvPjxkczpTaWduYXR1cmVWYWx1ZT5MbTZsRTJLaHA5L05XY3hxWGtNK28wTmp4SFJ1REVnOENNUG5OTGk3aDBIU0wvUUthK3l2RVdlckE3RW4xQlhSUGt2a0krK25jaTdiNDBRSVp5QUY1VEthMGYwSGZCMXlIbWMxa0R2UWtLdXR4SjhMWnVjUDkvNS9hV293VXN6b01yVmNOeUhpVHFBMzV0YlpEMmpUVSsxQ1NDRWZWeTZZTjNxRk1kaHRWSFlLTHlnZmNsTVZFS0MxU0ExeWZuZkRDU0JERjJDY3lkQVh4ajJWQjVidDMveTVYTzFkMkdLU3FCNUZsZ3RMbkJUeGxBSXI5VzRuRUpCTk5yQ1Iyb1B6aUIrem9qbjVQUzhpL2tkQUs3dTN5SlNDbG1ESGRhc2VBMm9xR2c0Ly8xamZWelFJQXZlc241ZE9od1p3eFN1TnV5ZjVnREh1bVZHcnZtYktOT2dmVnc9PTwvZHM6U2lnbmF0dXJlVmFsdWUFUsSPEtleUluZm8geG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvMDkveG1sZHNpZyMiPjxkczpYNTA5RGF0YT48ZHM6WDUwOUNlcnRpZmljYXRlPk1JSUdEekNDQlBlZ0F3SUJBZ0lUR2dBQVBmYzJlbmNGbDZTOXJnQUJBQUE5OXpBTkJna3Foa2lHOXcwQkFRVUZBREFtTVNRd0lnWURWUVFERXh0WGFYQnlieUJEYkdGemN5QXhJRVZ1ZEdWeWNISnBjMlVnUTBFd0hoY05NVFl3TlRJM01EWTBNRE15V2hjTk1Ua3dOVEkzTURZME1ETXlXakI3TVFzd0NRWURWUVFHRXdKSlRqRVNNQkFHQTFVRUNCTUpTMkZ5Ym1GMFlXdGhNUkl3RUFZRFZRUUhFd2xDWVc1bllXeHZjbVV4RWpBUUJnTlZCQW9UQ1ZkcGNISnZJRXgwWkRFTU1Bb0dBMVVFQ3hNRFNVMUhNU0l3SUFZRFZRUURFeGx3Ym1VdGFHcHVMV0ZrWm5NeU1ERXVkMmx3Y204dVkyOXRNSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQTIxc3dqeUFzTmpQQXlQS1RqTjBsRGdUSWlFZGQ3NlB5K0JNRFp3SDZrYmVuREQrcUFZdGhTeW9oTFU1NTBWSXd0TmlKZ2VGekhqMm14NHUwRklRYlZJWlArcmh1V0xSYkQwQk1IQkZkYnFsUHNIZEdNL1V1YWVZSzcvNkFQZkJrNXlZL2dNZitVSk9kOW1oaW5MS0JWeWJoSXRaU2prd0xJOWV6eEdzbkFRWlNoVDBMMTNUbEpBNThCTVJXUVJlcnJsT2RQdTBwem1aUWNER043OFYrSzZUeFBIbUFzN0g3MmlaUHNUcnA2SlJrVEVqdkMvajRVNG1xTXlVanpIdUx6c1JscnBybHM2V1VzcDJicU44bFlqeEoybnJudk1TWFM0QXg4WnMrVFR1WXdHYXF0YUpVWXdkSTVLbTlwZW9WWHhsZ0ZvUENWN01oVDJKMlpjNElYd0lEQVFBQm80SUMzekNDQXRzd0N3WURWUjBQQkFRREFnV2dNRDBHQ1NzR0FRUUJnamNWQndRd01DNEdKaXNHQVFRQmdqY1ZDSUxkbkVTRHpOSUJoWThhaCt2ZlJJV2I3aENCSjRPNCtIbUd6cFk3QWdGa0FnRUpNQjBHQTFVZERnUVdCQlNQT1ZhOGxRc0ZrNnpnTlZ6aHZZY0cyTWlYQmpBZkJnTlZIU01FR0RBV2dCU0ROa3VRZVFLY0JSakxjUGRHckZ5ZGFwTnJxakNDQVJJR0ExVWRId1NDQVFrd2dnRUZNSUlCQWFDQi9xQ0IrNGFCejJ4a1lYQTZMeTh2UTA0OVYybHdjbThsTWpCRGJHRnpjeVV5TURFbE1qQkZiblJsY25CeWFYTmxKVEl3UTBFc1EwNDlRa3hTTFZOVlFrTkJMVU14TURFc1EwNDlRMFJRTEVOT1BWQjFZbXhwWXlVeU1FdGxlU1V5TUZObGNuWnBZMlZ6TEVOT1BWTmxjblpwWTJWekxFTk9QVU52Ym1acFozVnlZWFJwYjI0c1JFTTlkMmx3Y204c1JFTTlZMjl0UDJObGNuUnBabWxqWVhSbFVtVjJiMk5oZEdsdmJreHBjM1EvWW1GelpUOXZZbXBsWTNSRGJHRnpjejFqVWt4RWFYTjBjbWxpZFhScGIyNVFiMmx1ZElZbmFIUjBjRG92TDNkcGNHTmxjblF1ZDJsd2NtOHVZMjl0TDJOeWJDOXpkV0pqWVRFdVkzSnNNSUlCQXdZSUt3WUJCUVVIQVFFRWdmWXdnZk13Z2NBR0NDc0dBUVVGQnpBQ2hvR3piR1JoY0Rvdkx5OURUajFYYVhCeWJ5VXlNRU5zWVhOekpUSXdNU1V5TUVWdWRHVnljSEpwYzJVbE1qQkRRU3hEVGoxQlNVRXNRMDQ5VUhWaWJHbGpKVEl3UzJWNUpUSXdVMlZ5ZG1salpYTXNRMDQ5VTJWeWRtbGpaWE1zUTA0OVEyOXVabWxuZFhKaGRHbHZiaXhFUXoxM2FYQnlieXhFUXoxamIyMC9ZMEZEWlhKMGFXWnBZMkYwWlQ5aVlYTmxQMjlpYW1WamRFTnNZWE56UFdObGNuUnBabWxqWVhScGIyNUJkWFJvYjNKcGRIa3dMZ1lJS3dZQkJRVUhNQUdHSW1oMGRIQTZMeTlpYkhJdGNHdHBMVzlqYzNBdWQybHdjbTh1WTI5dEwyOWpjM0F3RXdZRFZSMGxCQXd3Q2dZSUt3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','empNo':'','command': '379', 'agentCode': 'EMP', 'appraisalType':'21', 'param':{'searchType':'name','searchString':'"+action.payload+"'}, 'rpMwa':''}");
				setTimeout(() => {
				  //xhttp.abort();
				}, 1000);
				xhttp.onreadystatechange = function() {
				  if (this.readyState == 4 && this.status == 200) {
					console.log(this.responseText);
					var result = JSON.parse(this.responseText);
					if(result.Result[0].status){
						//
						if(result.Result[0].tdata.hasOwnProperty('searchresult')){
							resolve(result.Result[0].tdata.searchresult);
						}else {
							resolve([]);
						}
					}
					
					//dispatch({type: 'PING',payload: this.responseText});
					
				  }
				}
				
				
			}));
		
		
		return promiseSource.map(result => 
					({
						type: 'AJAX_CALL_DONE',
						payload: result
					})
		)	
	}).race();
	
	}

const pingReducer = (state = { isPinging: false , apiData : []}, action) => {
  switch (action.type) {
    case PING:
      return { isPinging: true };

    case PONG:
      return { isPinging: false };
	
	case 'AJAX_CALL_DONE':
		return {isPinging: false, apiData: action.payload}
    default:
      return state;
  }
};

// components/App.js/////////////////////


import {connect} from "react-redux"

let App = ({ isPinging,apiData, ping,callAjax,cancelCall }) => {
	
	
	function handleChange(event){
		console.log(event.target.value);
		callAjax(event.target.value);
	}
	console.log(apiData);
	return (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
	<input type='text' onChange={handleChange}/>
    <div>Api Data: from Server</div>
		{apiData.map(function(key,index){
			return(
				<h1 key={`searchResult_${index}`}>{key.empName}</h1>
			)
		})}
    <button onClick={ping}>Start PING</button>
	<button onClick={callAjax}>Start AJAX_CALL</button>
	<button onClick={cancelCall}>Cancell AJAX_CALL</button>
  </div>
);}

App = connect(
  ({ isPinging, apiData }) => ({ isPinging, apiData }),{ ping,callAjax,cancelCall }
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
