import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.groupList) {
         
          return Object.assign({}, state, {
            groupList: action.groupList

                   });
        }
        return state;
      case types.FETCH_BY_QUANTUM:
          if (action.groupByQuantumList) {
           
            return Object.assign({}, state, {
              groupByQuantumList: action.groupByQuantumList
  
                     });
          }
          return state;                   
      default:
        return state;
      }
}