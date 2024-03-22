import * as React from 'react';
import TopBar from '../Details/TopBar.js';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { MuiFileInput } from 'mui-file-input';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect }from 'react';

import { fetchResultList } from '../store/result/actions.js';
import { fetchTeamList } from '../store/team/actions.js';
import { fetchEventList } from '../store/event/actions.js';
import { fetchResulTeachertList } from '../store/teacher/actions.js';
import { fetchStatusList } from '../store/status/actions';
import { fetchLevelList } from '../store/level/actions';
import { fetchTeacherList } from '../store/teacher/actions';
import { fetchStudentListAll } from '../store/student/actions';

import { addNewFile } from '../store/result/actions.js';
import { addNewResult } from '../store/result/actions.js';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/de';


function createData(id, eventName, status, level,type, result, team, memberTeam, teacherManagers, pathToDocument, scores) {
    return { id, eventName, status,level,type, result,team, memberTeam, teacherManagers, pathToDocument, scores };
  }
  
  const rows = [
    createData(1, 'Конкурс проектов СПО Арктика','Финал','Всероссийский', 'Конкурс',  'Участник', 'Молодежный центр 360',  [{id:1, name:'Кручков Владимир Ильич'}, {id: 1, name:'Крутикова Анфиса Викторовна'}],[{id: 1, name:'Жирнова Марина Анатольевна'}],'./диплом.jpg',5)
    
  ];
  

export default function TeacherResults() {
  const dispatch = useDispatch();
    const [eventSelected, setEventSelected] = React.useState('');
    const [teamSelected, setTeamSelected] = React.useState('');
    const [resultSelected, setResultSelected] = React.useState('');
    const [teacherSelected, setTeacherSelected] = React.useState('');
    const [studentSelected, setStudentSelected] = React.useState('');
    const [statusSelected, setStatusSelected] = React.useState('');
    const [levelSelected, setLevelSelected] = React.useState('');

    const [dateFrom, setDateFrom] = React.useState(dayjs());
    const [dateTo, setDateTo] = React.useState(dayjs());

    const resultList = useSelector((state) => state.result.resultList);
    const teamList = useSelector((state)=>state.team.teamList);
    const eventList = useSelector((state) => state.event.eventList);
    const resultTeacherList = useSelector((state) => state.teacher.List_result); 
    const teacherList = useSelector((state) => state.teacher.teacherList);
    const studentList = useSelector((state)=>state.student.studentList);
    const [isShowFormNew, setisShowFormNew] = React.useState(false);
    useEffect(() => {
      
      dispatch(fetchResultList())
      dispatch(fetchTeamList())
      dispatch(fetchEventList());
      dispatch(fetchStatusList());
      dispatch(fetchLevelList());
      dispatch(fetchTeacherList());
      dispatch(fetchStudentListAll(0));
      dispatch(fetchResulTeachertList(0));
      }, []);
      
 
 
 
  const filtr = () =>{ }
  return (
    <div>
      <TopBar/>
      
      <div style={{ height: 400, width: '70%', marginLeft:'330px', position: 'relative' }}>
      <br/>
      
      <br/>
      <Button variant="contained" onClick={()=>{if (isShowFormNew) setisShowFormNew(false); else setisShowFormNew(true);}}>Очистить фильтры</Button>
      <Button style={{marginLeft:'20px'}} variant="contained" onClick={()=>{if (isShowFormNew) setisShowFormNew(false); else setisShowFormNew(true);}}>Отчёт в Excel</Button>
      <br/>
      <br/>
      
        <FormControl style={{width:'150px'}}>
        
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
            <DatePicker label="Дата с:" value={dateFrom} onChange={(newValue)=>{setDateFrom(newValue)}}/>
        </LocalizationProvider>
        </FormControl>
        
        
        <FormControl style={{marginLeft:'20px', width:'150px'}}>
        
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
            <DatePicker label="Дата по:" value={dateTo} onChange={(newValue)=>{setDateTo(newValue)}}/>
        </LocalizationProvider>
        </FormControl>
        
        <FormControl style={{marginLeft:'20px', width:'150px'}}>
            <InputLabel id="preventEventLabel">Мероприятие</InputLabel>
            <Select
            labelId="preventEventLabel"
            id="preventEventLabelSelect"
            value={eventSelected}
            label="Предшествующее мероприятие"
            onChange={(e)=>setEventSelected(e.target.value)}
            >
           
            {eventList.map((row) => (<MenuItem value={row.id}>{row.Name}</MenuItem>))}
            
            </Select>
        </FormControl>
        
        <FormControl style={{marginLeft:'20px', width:'150px'}}>
            <InputLabel id="preventEventLabel">Педагог</InputLabel>
            <Select
            labelId="preventEventLabel"
            id="preventEventLabelSelect"
            value={teacherSelected}
            label="Предшествующее мероприятие"
            onChange={(e)=>setTeacherSelected(e.target.value)}
            >
           
            {teacherList.map((row) => (<MenuItem value={row.id}>{row.FIO}</MenuItem>))}
            
            </Select>
        </FormControl>
        
        <FormControl style={{marginLeft:'20px', width:'150px'}}>
            <InputLabel id="preventEventLabel">Обучающийся</InputLabel>
            <Select
            labelId="preventEventLabel"
            id="preventEventLabelSelect"
            value={studentSelected}
            label="Предшествующее мероприятие"
            onChange={(e)=>setStudentSelected(e.target.value)}
            >
           
            {studentList.map((row) => (<MenuItem value={row.id}>{row.fio}</MenuItem>))}
            
            </Select>
        </FormControl>
        
        <FormControl style={{marginLeft:'20px', width:'150px'}}>
            <InputLabel id="preventEventLabel">Команда</InputLabel>
            <Select
            labelId="preventEventLabel"
            id="preventEventLabelSelect"
            value={teamSelected}
            label="Предшествующее мероприятие"
            onChange={(e)=>setTeamSelected(e.target.value)}
            >
           
            {teamList.map((row) => (<MenuItem value={row.id}>{row.Name}</MenuItem>))}
            
            </Select>
        </FormControl>
        <br/>
        <br/>
        <FormControl style={{ width:'150px'}}>
            <InputLabel id="preventEventLabel">Результат</InputLabel>
            <Select
            labelId="preventEventLabel"
            id="preventEventLabelSelect"
            value={resultSelected}
            label="Предшествующее мероприятие"
            onChange={(e)=>setResultSelected(e.target.value)}
            >
           
            {resultList.map((row) => (<MenuItem value={row.id}>{row.Name}</MenuItem>))}
            
            </Select>
        </FormControl>
        
        <FormControl style={{marginLeft:'20px', width:'150px'}}>
            <InputLabel id="preventEventLabel">Статус</InputLabel>
            <Select
            labelId="preventEventLabel"
            id="preventEventLabelSelect"
            value={statusSelected}
            label="Предшествующее мероприятие"
            onChange={(e)=>setStatusSelected(e.target.value)}
            >
           
            {rows.map((row) => (<MenuItem value={row.id}>{row.Name}</MenuItem>))}
            
            </Select>
        </FormControl>
        
        <FormControl style={{marginLeft:'20px', width:'150px'}}>
            <InputLabel id="preventEventLabel">Уровень</InputLabel>
            <Select
            labelId="preventEventLabel"
            id="preventEventLabelSelect"
            value={levelSelected}
            label="Предшествующее мероприятие"
            onChange={(e)=>setLevelSelected(e.target.value)}
            >
           
            {rows.map((row) => (<MenuItem value={row.id}>{row.Name}</MenuItem>))}
            
            </Select>
        </FormControl>
        <br/>
        <br/>
      <div>Все результаты:</div>
      <br/>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Название мероприятия</TableCell>
            <TableCell align="left">Статус</TableCell>
            <TableCell align="left">Уровень</TableCell>
            <TableCell align="left">Тип</TableCell>
            <TableCell align="left">Результат</TableCell>
            <TableCell align="left">Команда</TableCell>
            <TableCell align="left">Подтверждающий документ</TableCell>
            <TableCell align="left">Баллы</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { resultTeacherList.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                
                <TableCell align="left">{row.EVENT}</TableCell>
                <TableCell align="left">{row.Status}</TableCell>
                <TableCell align="left">{row.Level}</TableCell>
                <TableCell align="left">{row.Type}</TableCell>
                <TableCell align="left">{row.result}</TableCell>
                <TableCell align="left">{row.name_team}</TableCell>
                <TableCell align="left">
                <img src={"https://vrar29.xyz/rating/api/_uploads/"+row.pathToDocument} width="100px"/>
                </TableCell>
                <TableCell align="left">{row.Score}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
  );
}