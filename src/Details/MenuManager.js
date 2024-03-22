import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import EqualizerIcon from '@mui/icons-material/Equalizer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleIcon from '@mui/icons-material/People';

import { Link } from "react-router-dom"; 

export default function MenuManager() {
    return (
<List
      sx={{ width: '100%', height:'100%',maxWidth: 250, bgcolor: 'background.paper', position: 'absolute', top:'80px' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Основные операции
        </ListSubheader>
      }
    >
      <Link  to="/command-list">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Педагоги" />
        
      </ListItemButton>
      </Link>
      <Link  to="/all-result">
      <ListItemButton>
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText primary="Результаты" />
        
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
     
      
      <Link  to="/statistics">
      <ListItemButton>
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Статистика" />
        
      </ListItemButton>
      </Link>
    </List>
    );
}