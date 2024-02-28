import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.LOGIN:
        if (action.current_user) {
         
          return Object.assign({}, state, {
            currentUser: action.current_user

                   });
        }
        return state;
        case types.ADD:
        if (action.resultAdd) {
         
          return Object.assign({}, state, {
            resultAdd: action.resultAdd

                   });
        }
        return state;
      
        
          
                   
      default:
        return state;
      }
}