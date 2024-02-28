import {types} from './actionTypes';

const host ='https://vrar29.xyz/rating/api';

export function login(email, password) {
   return async function loginThunk (dispatch, getState) {
      const route  = `${host}/auth/index.php?email='${email}'&password='${password}'`;
      
      let response = await fetch(route,{
        mode: 'cors'
      });
          response = await response.json();
      
      let new_result = response.filter(x => x);
      if (new_result.length>0)
      {
        console.log(new_result[0].Name);
        return dispatch({ type: types.LOGIN, current_user: {
          id: new_result[0].id,
          email: new_result[0].email,
          password: new_result[0].password,
          FIO: new_result[0].Surname+' '+new_result[0].Name+' '+new_result[0].Patronymic,
          role: new_result[0].role
        }} );//response

      } else 
      {
        return dispatch({ type: types.LOGIN, 
          current_user:  {
          id:-1,
          email: '',
          password: '',
          FIO: '',
          role: ''
      } });//response
      }
      

  }
}



  