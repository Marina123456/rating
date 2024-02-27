import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function fetchTeamList() {
   return async function fetchTeamListThunk (dispatch, getState) {
      const route  = `${host}/team/index.php`;
      console.log(route);
      let response = await fetch(route);
          response = await response.json();
      
      let new_result = response.filter(x => x);
      return dispatch({ type: types.FETCH, teamList: new_result });//response

  }
}
export function addNewTeam(newTeam) {
    return async function addNewTeamThunk (dispatch, getState) {
       const route  = `${host}/team/index.php`;
       let resultAdd ="NO";
       console.log(JSON.stringify(newTeam));
      try{
      let response = await fetch(route, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newTeam)
      });
      console.log("раб");
      resultAdd = await response.text();
      
     // resultAdd = await response.json();
      console.log(resultAdd);
    } catch (err) {
      console.error(err);
    }
       
       
       return dispatch({ type: types.ADD, resultAdd: resultAdd });//response
 
   }
 }
  