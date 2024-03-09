import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import { login } from './store/auth/actions';
import { useNavigate } from "react-router-dom";

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const currentUser = useSelector((state)=>state.auth.currentUser);
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePwd = (event) => {
    setPwd(event.target.value);
  };
  
  const Enter = e  => {
    e.preventDefault();
    dispatch(login(email, pwd));
    //if (currentUser.id!=-1){
        navigate('/profile-teacher');
    //}
  };
    return (
      <div>
        

        <form style={{width: '50%', margin: '0 auto', position: 'relative'}} >
        <p>Введите данные для входа</p>
        <FormControl fullWidth>
        <TextField id="outlined-basic" label="email" variant="outlined" onChange={handleChangeEmail} value={email}/>
        </FormControl>
        <br/>
        <br/>
        <FormControl fullWidth>
        <TextField id="outlined-basic" label="Пароль" type="password" variant="outlined" onChange={handleChangePwd} value={pwd}/>
        </FormControl>
        <br/>
        <br/>
        
        <Button variant="contained" onClick={Enter} >Войти</Button>
        
        </form>
        
      </div>
    );
  }
  
  export default Auth;