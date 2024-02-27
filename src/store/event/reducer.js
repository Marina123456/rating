import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.eventList) {
         
          return Object.assign({}, state, {
            eventList: action.eventList

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