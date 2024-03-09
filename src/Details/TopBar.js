import * as React from 'react';
import {  useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import MenuTeacher from './MenuTeacher';
import MenuManager from './MenuManager';
import MenuStudent from './MenuStudent';
import MenuAdmin from './MenuAdmin';

import { Link } from "react-router-dom"; 
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {  grey,purple } from '@mui/material/colors';

export default function TopBar() {
    const currentUser = useSelector((state)=>state.auth.currentUser);
    const [title, setTitle] = React.useState('');
    React.useEffect(() => {
      console.log(currentUser);
      switch(currentUser.role) {
        case 'teacher': 
          setTitle('Педагог');
          break;      
        case 'student':  
          setTitle('Учащийся');
          break;
        case 'manager':  
          setTitle('Руководитель');
          break;
        case 'admin':  
          setTitle('Администратор');
          break;
        default:
          setTitle('');
      }
      }, []);
    const theme = createTheme({
        palette: {
          primary: {
            main: '#ffffff',
            contrastText: purple[500],
        },
        
        },
        components: {
            MuiAppBar: {
                styleOverrides:{
                    root: {
                        boxShadow: 'none',
                        borderBottom: 'solid 1px',
                        borderColor: grey[300]
                    }
                }
            }
        }
      });
    const [anchorEl, setAnchorEl] = React.useState(null); 
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={theme}>
        <AppBar position="static"  backgroundcolor="white">
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentUser.id!=-1 ? title+' - '+currentUser.FIO : ''}
            </Typography>
            { (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}><Link  to="/profile-teacher">Мой профиль</Link></MenuItem>
                  <MenuItem onClick={handleClose}>Выйти</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        </ThemeProvider>
        {(currentUser.role=='teacher') ? <MenuTeacher/>:''}
        {(currentUser.role=='manager') ? <MenuManager/>:''}
        {(currentUser.role=='student') ? <MenuStudent/>:''}  
        {(currentUser.role=='admin') ? <MenuAdmin/>:''}
      </Box>
    );
  }