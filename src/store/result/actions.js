import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function fetchResultList() {
   return async function fetchResultListThunk (dispatch, getState) {
      const route  = `${host}/result/index.php`;
      console.log(route);
      let response = await fetch(route);
          response = await response.json();
      
      let new_result = response.filter(x => x);
      console.log(new_result);
      return dispatch({ type: types.FETCH, resultList: new_result });//response

  }
}
export function addNewFile(newFile) {
  return async function addNewFileThunk (dispatch, getState) {
     const route  = `${host}/result/index.php`;
     let resultAdd ="NO";
     console.log(JSON.stringify(newFile));
     
    try{
    let response = await fetch(route, {
      method: 'POST',
      mode: 'cors',
      
      body: newFile
    });
    
    resultAdd = await response.text();
    
   // resultAdd = await response.json();
    console.log(resultAdd);
  } catch (err) {
    console.error(err);
  }
     
     
     return dispatch({ type: types.UPLOAD_FILE, resultUploadFile: resultAdd });//response

 }
}

export function addNewResult(newResult) {
    return async function addNewResultThunk (dispatch, getState) {
       const route  = `${host}/result/index.php`;
       let resultAdd ="NO";
       console.log(JSON.stringify(newResult));
       
      try{
      let response = await fetch(route, {
        method: 'POST',
        mode: 'cors',
        
        body: JSON.stringify(newResult)
      });
      
      resultAdd = await response.text();
      
     // resultAdd = await response.json();
      console.log(resultAdd);
    } catch (err) {
      console.error(err);
    }
       
       
       return dispatch({ type: types.ADD, resultAdd: resultAdd });//response
 
   }
 }

  