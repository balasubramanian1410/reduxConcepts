import React,{ Component } from "react"
import {connect} from "react-redux"

import * as actions from "../actions/userActions"



class App extends Component {
	
	componentWillMount(){
		this.props.dispatch(actions.callService())
	}
	
	handleOptions(index,id){
		
	//this.setState({yesNoActiveIndex: index});	
	this.props.dispatch(actions.setState("yesNoActiveIndex",index))	
	}
	addUsers(){
		var username = document.getElementById('users').value;
		console.log(username);
		var dummy = this.props.user;
		dummy.push({name:username,age:35});
		this.props.dispatch(actions.addUsers(dummy));
	}
	render(){
		console.log("test:",this.props);
		return (
		<div className="col-xs-12 no-padd bg-white">
		<input type='text' id='users'></input>
		<input type='button' onClick={this.addUsers.bind(this)}></input>
		{this.props.user.map(function(key,index){
			return(
				<div key={index}>
				<h1>{key.name}</h1>
				<h1>{key.age}</h1>
				{true?
						<div className="col-xs-12 no-padd">
						<div className="col-xs-12 fontbold no-padd font13">I have completed the Performance Nxt discussion with my team member</div>
						<div className="col-xs-12 no-padd mt10 bg-white yesnoradio">
						  {/*this.props.options.map(function(key,index){                    
							  return(
								<span className="lft "><span className={this.props.yesNoActiveIndex == index?"radio-normal active":"radio-normal"} onClick={this.handleOptions.bind(this,index,"yesNoButton_"+index+"")}></span><span className="lft">{key.data}</span></span>
							  )             
						  }.bind(this))*/}                  
						</div>
						{/*this.props.yesNoActiveIndex == 1?
						<div id='selectReason' className="col-xs-12 mt10 no-padd">	
						<div className="col-xs-12 no-padd fontbold">Reason</div>
						<div className="col-xs-12 no-padd">
						
						</div>
						</div>
						:
						null
						*/}
						</div>
						:
						null
						}
				</div>
			)
		}.bind(this))}
		
		</div>
		)
	}

}

function selectState(store) {
   return {
    user:store.users
   }
}

export default connect(selectState)(App)