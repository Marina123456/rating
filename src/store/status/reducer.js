import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.statusList) {
         
          return Object.assign({}, state, {
            statusList: action.statusList

                   });
        }
        return state;
        
      
        
          
                   
      default:
        return state;
      }
}