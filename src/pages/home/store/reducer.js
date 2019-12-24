import { GET_HOME_DATA } from './actionTypes'

const defaultState = {
    home:null
}

export default (state=defaultState, action) => {
    switch(action.type){
        case GET_HOME_DATA: 
          if(!!state.home){
	        return {
	          home: [...state.home,...action.home]
	        }
	      }
	      else{
	        return {
	          ...state,
	          home: [...action.home]
	        }
	      }
        default:
          return state;
    }
}