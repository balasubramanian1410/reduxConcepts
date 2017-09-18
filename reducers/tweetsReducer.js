
export default function reducer(state = {
	users:[],
	tweets:[],
	fetching:false,
	fetched:false,
	error:null,
	options: [{"data":"Yes"},{"data":"No"}],
	yesNoActiveIndex:2,
	},
	action){

	switch(action.type){
	
	case "FETCH_USER": {
		return {...state,fetching:true,users:[action.payload]}
	}
	
	case "GET_USER_NAME":{
		return{...state,fetching:false,fetched:true,users:action.payload,}
	}
	case "SET_USER_AGE":{
		return {...state,fetching:false,fetched:true,users:action.payload}
	}
	case "yesNoActiveIndex":{
		return {...state,yesNoActiveIndex:action.payload}
	}
	case "ADD_USERS":{
		console.log("ADD_USERS",state.users);
		return {...state,users:action.payload}
	}
	default:return state
	
	}

}

