import Auth from './Teacher/Auth.js';
import ResultStudent from './Teacher/ResultStudent.js';
import Group from './Teacher/Group.js';
import GroupList from './Teacher/GroupList.js';
import AllResultStudent from './AllResultStudent.js';
//учитель
import CommandList from './CommandList.js';
import ProfileTeacher from './Teacher/ProfileTeacher.js';
import EventList from './Teacher/EventList.js';
import Statistics from './Statistics.js';
import Kriterii from './Admin/Kriterii.js';
//ученик
import StudentGroups from './Student/StudentGroups.js';
//руководитель
import TeacherResults from './Manager/TeachersResults.js';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
//itkvsite



function App() {
  return (
    <Router  basename={'/rating'}> 
    <Routes >
        <Route path='/' element={<Auth/>} /> 
        <Route path='/all-result' element={<TeacherResults/>} />
        <Route path='/kriterii' element={<Kriterii/>} />
        <Route path='/result-student/:id_student' element={<ResultStudent/>} />
        <Route path={'/group/:idGroup'}   element={<Group/>} />
        <Route path='/group-list' element={<GroupList/>} />
        <Route path='/command-list' element={<CommandList/>} />
        <Route path='/profile-teacher' element={<ProfileTeacher/>} />
        <Route path='/event-list' element={<EventList/>} />
        <Route path='/all-result-student' element={<AllResultStudent/>} />
        <Route path='/statistics' element={<Statistics/>} />
        <Route path='/student-groups' element={<StudentGroups/>} />
    </Routes >
 </Router>
  );
}

export default App;
