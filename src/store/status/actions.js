import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function fetchStatusList() {
   return async function fetchStatustListThunk (dispatch, getState) {
      const route  = `${host}/status/index.php`;
      console.log(route);
      let response = await fetch(route);
          response = await response.json();
      
      let new_result = response.filter(x => x);
      return dispatch({ type: types.FETCH, statusList: new_result });//response

  }
}

  