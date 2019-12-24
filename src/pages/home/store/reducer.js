import { GET_HOME_DATA } from './actionTypes'

const defaultState = {
    home:null
}

export default (state=defaultState, action) => {
    switch(action.type){
        case GET_HOME_DATA: 
          return {
            home:[...state.home,...action.home]
          } 
        default:
          return state;
    }
}