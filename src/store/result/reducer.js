import {types} from './actionTypes';

export default function reduce(state = {}, action = {}) {
  switch (action.type) {
      case types.FETCH:
        if (action.resultList) {
         
          return Object.assign({}, state, {
            resultList: action.resultList

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
        
        case types.UPLOAD_FILE:
          if (action.resultUploadFile) {
           
            return Object.assign({}, state, {
              resultUploadFile: action.resultUploadFile
  
                     });
          }
          return state;
                   
      default:
        return state;
      }
}