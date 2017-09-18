export function callService(){
	return{
		type: "FETCH_USER",
		payload:{
			name:"bala",
			age:35,
		}
	}
} 


export function setUserName(name){
	return{
		type: "SET_USER_NAME",
		payload:{name},
	}
}

export function setUserAge(age){
	return{
		type: "SET_USER_AGE",
		payload: age
	}
}


export function setState(type,value){
	return{
		type: type,
		payload: value
	}
}

export function addUsers(value){
	return{
		type: 'ADD_USERS',
		payload: value
	}
}