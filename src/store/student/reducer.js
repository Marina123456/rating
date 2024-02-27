import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.studentList) {
         
          return Object.assign({}, state, {
            studentList: action.studentList

                   });
        }
        return state;

        case types.FETCH_RESULT:
          if (action.List_result) {
           
            return Object.assign({}, state, {
              List_result: action.List_result
  
                     });
          }
          return state;
        
      
        
          
                   
      default:
        return state;
      }
}