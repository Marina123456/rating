import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.typeList) {
         
          return Object.assign({}, state, {
            typeList: action.typeList

                   });
        }
        return state;
        
      
        
          
                   
      default:
        return state;
      }
}