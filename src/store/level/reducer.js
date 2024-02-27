import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.levelList) {
         
          return Object.assign({}, state, {
            levelList: action.levelList

                   });
        }
        return state;
        
      
        
          
                   
      default:
        return state;
      }
}