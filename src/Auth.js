import * as React from 'react';
import { Link } from "react-router-dom"; 

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function Auth() {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePwd = (event) => {
    setPwd(event.target.value);
  };
  const Enter = () => {
    
  };
    return (
      <div>
        

        <form style={{width: '50%', margin: '0 auto', position: 'relative'}}>
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
        <Link  to="/profile-teacher">
        <Button variant="contained" onClick={Enter}>Войти</Button>
        </Link>
        </form>
        
      </div>
    );
  }
  
  export default Auth;