import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function fetchGroupList(idTeacher) {
   return async function fetchGroupListThunk (dispatch, getState) {
      const route  = `${host}/listgroup/index.php?id_teacher='${idTeacher}'`;
      console.log(route);
      let response = await fetch(route);
          response = await response.json();

      let new_result = response.filter(x => x);

      return dispatch({ type: types.FETCH, groupList: new_result });//response

  }
}

export function fetchGroupByQuantumList(idQuantum) {
    return async function fetchGroupByQuantumListThunk (dispatch, getState) {
       const route  = `${host}/listgroup/index.php?id_quantum='${idQuantum}'`;
       console.log(route);
       let response = await fetch(route);
           response = await response.json();
 
       let new_result = response.filter(x => x);
       
       return dispatch({ type: types.FETCH_BY_QUANTUM, groupByQuantumList: new_result });//response
 
   }
 }
 export function fetchGroupListStudent(idStudent){
    return async function fetchGroupByStudentThunk (dispatch, getState) {
        const route  = `${host}/listgroup/index.php?id_student='${idStudent}'`;
        console.log(route);
        let response = await fetch(route);
            response = await response.json();
  
        let new_result = response.filter(x => x);
        
        return dispatch({ type: types.FETCH_BY_QUANTUM, groupByStudent: new_result });//response
  
    }
 }



  