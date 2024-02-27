import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.quantumList) {
         
          return Object.assign({}, state, {
            quantumList: action.quantumList

                   });
        }
        return state;
        
      
        
          
                   
      default:
        return state;
      }
}