import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function fetchLevelList() {
   return async function fetchLeveltListThunk (dispatch, getState) {
      const route  = `${host}/level/index.php`;
      console.log(route);
      let response = await fetch(route);
          response = await response.json();
      
      let new_result = response.filter(x => x);
      return dispatch({ type: types.FETCH, levelList: new_result });//response

  }
}

  