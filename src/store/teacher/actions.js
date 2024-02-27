import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function fetchTeacherList() {
   return async function fetchTeacherListThunk (dispatch, getState) {
      const route  = `${host}/teacher/index.php`;
      console.log(route);
      let response = await fetch(route);
          response = await response.json();
      
      let new_result = response.filter(x => x);
      return dispatch({ type: types.FETCH, teacherList: new_result });//response

  }
}

export function fetchResulTeachertList(id_teacher) {
    return async function fetchResultTeacherListThunk (dispatch, getState) {
       const route  = `${host}/List_result/index.php?id_teacher='${id_teacher}'`;
       console.log(route);
       let response = await fetch(route);
           response = await response.json();
  
       let new_result = response.filter(x => x);
       console.log(new_result);
       return dispatch({ type: types.FETCH_RESULT, List_result: new_result });//response
  
   }
  }  