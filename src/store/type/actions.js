import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function fetchTypeList() {
   return async function fetchTypeListThunk (dispatch, getState) {
      const route  = `${host}/type/index.php`;
      console.log(route);
      let response = await fetch(route);
          response = await response.json();
      
      let new_result = response.filter(x => x);
      return dispatch({ type: types.FETCH, typeList: new_result });//response

  }
}

  