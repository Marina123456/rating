import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function fetchEventList() {
   return async function fetchEventListThunk (dispatch, getState) {
      const route  = `${host}/events/get-index.php`;
      console.log(route);
      let response = await fetch(route,{
        mode: 'cors'
      });
          response = await response.json();
      
      let new_result = response.filter(x => x);
      console.log(new_result);
      return dispatch({ type: types.FETCH, eventList: new_result });//response

  }
}

export function addNewEvent(newEvent) {
    return async function addNewEventThunk (dispatch, getState) {
       const route  = `${host}/events/index.php`;
       let resultAdd ="NO";
       console.log(JSON.stringify(newEvent));
      try{
      let response = await fetch(route, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newEvent)
      });
      //console.log(response);
      resultAdd = await response.text();
      
     // resultAdd = await response.json();
      console.log(resultAdd);
    } catch (err) {
      console.error(err);
    }
       
       
       return dispatch({ type: types.ADD, resultAdd: resultAdd });//response
 
   }
 }

  