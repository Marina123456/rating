import logo from './logo.svg';
import './App.css';
import Auth from './Auth.js';
import ResultStudent from './ResultStudent.js';
import Group from './Group.js';
import GroupList from './GroupList.js';
import CommandList from './CommandList.js';
import ProfileTeacher from './ProfileTeacher.js';
import EventList from './EventList.js';
import AllResultStudent from './AllResultStudent.js';
import Statistics from './Statistics.js';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
//itkvsite
function App() {
  return (
    <Router  basename={'/rating'}> 
    <Routes >
        <Route path='/' element={<Auth/>} /> 
        <Route path='/result-student/:id_student' element={<ResultStudent/>} />
        <Route path={'/group/:idGroup'}   element={<Group/>} />
        <Route path='/group-list' element={<GroupList/>} />
        <Route path='/command-list' element={<CommandList/>} />
        <Route path='/profile-teacher' element={<ProfileTeacher/>} />
        <Route path='/event-list' element={<EventList/>} />
        <Route path='/all-result-student' element={<AllResultStudent/>} />
        <Route path='/statistics' element={<Statistics/>} />
    </Routes >
 </Router>
  );
}

export default App;
