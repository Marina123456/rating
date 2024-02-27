import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function fetchQuantumList() {
   return async function fetchQuantumListThunk (dispatch, getState) {
      const route  = `${host}/quantum/index.php`;
      console.log(route);
      let response = await fetch(route);
          response = await response.json();
      
      let new_result = response.filter(x => x);
      return dispatch({ type: types.FETCH, quantumList: new_result });//response

  }
}

  