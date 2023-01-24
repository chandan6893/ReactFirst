import {createStore} from "redux";
const DEFAULT__STATE = {
    loggedInUser: null
}

const reducer = (state=DEFAULT__STATE,action) =>{
    if(action.type === "SET__LOGIN__DATA"){
        return {...state,loggedInUser : action.payload}
    }else if(action.type === "LOGOUT"){
        return {loggedInUser:null}
    }
    return state;
    
}

const store = createStore(reducer);
export default store;