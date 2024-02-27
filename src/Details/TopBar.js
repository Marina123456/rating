import * as React from 'react';
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import EqualizerIcon from '@mui/icons-material/Equalizer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';

import { Link } from "react-router-dom"; 
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {  grey,purple } from '@mui/material/colors';

export default function TopBar() {
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
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
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
              Личный кабинет педагога
            </Typography>
            {auth && (
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
        <List
      sx={{ width: '100%', height:'100%',maxWidth: 250, bgcolor: 'background.paper', position: 'absolute', top:'80px' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Основные операции
        </ListSubheader>
      }
    ><Link  to="/group-list">
      <ListItemButton>
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="Группы" />
      </ListItemButton>
      </Link>
      <Link  to="/command-list">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Комманды" />
        
      </ListItemButton>
      </Link>
      <Link  to="/event-list">
      <ListItemButton>
        <ListItemIcon>
          <EventNoteIcon />
        </ListItemIcon>
        <ListItemText primary="Мероприятия" />
       
      </ListItemButton>
      </Link>
     
      <Link  to="/all-result-student">
      <ListItemButton>
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary="Результаты" />
        
      </ListItemButton>
      </Link>
      <Link  to="/statistics">
      <ListItemButton>
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Статистика" />
        
      </ListItemButton>
      </Link>
    </List>
      </Box>
    );
  }