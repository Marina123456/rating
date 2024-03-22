import * as React from 'react';
import TopBar from './Details/TopBar.js';

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

import { fetchResultList } from './store/result/actions.js';
import { fetchTeamList } from './store/team/actions.js';
import { fetchEventList } from './store/event/actions.js';
import { fetchResulTeachertList } from './store/teacher/actions.js';
import { addNewFile } from './store/result/actions.js';
import { addNewResult } from './store/result/actions.js';
import ym from 'react-yandex-metrika';

function createData(id, eventName, status, level,type, result, team, memberTeam, teacherManagers, pathToDocument, scores) {
    return { id, eventName, status,level,type, result,team, memberTeam, teacherManagers, pathToDocument, scores };
  }
  
  const rows = [
    createData(1, 'Конкурс проектов СПО Арктика','Финал','Всероссийский', 'Конкурс',  'Участник', 'Молодежный центр 360',  [{id:1, name:'Кручков Владимир Ильич'}, {id: 1, name:'Крутикова Анфиса Викторовна'}],[{id: 1, name:'Жирнова Марина Анатольевна'}],'./диплом.jpg',5)
    
  ];
  

export default function AllResultStudent() {
  ym('hit', '/all-result-student');


  const dispatch = useDispatch();
    const [eventNew, setEventNew] = React.useState('');
    const [teamNew, setTeamNew] = React.useState('');
    const [resultNew, SetResultNew] = React.useState('');
    const [pathToDocumentNew, setPathToDocumentNew] = React.useState(null)
    const resultList = useSelector((state) => state.result.resultList);
    const teamList = useSelector((state)=>state.team.teamList);
    const eventList = useSelector((state) => state.event.eventList);
    const resultTeacherList = useSelector((state) => state.teacher.List_result);
    console.log(resultTeacherList);
    const [isShowFormNew, setisShowFormNew] = React.useState(false);
    useEffect(() => {
      
      dispatch(fetchResultList())
      dispatch(fetchTeamList())
      dispatch(fetchEventList());
      dispatch(fetchResulTeachertList(0));
      }, []);
      
 
  const handleChangeDoc = (file) => {
    if (file) {
    setPathToDocumentNew(file)
    }
  }
    
  const handleChangeEvent = (event) => {
    setEventNew(event.target.value);
  };
  const handleChangeTeam = (event) => {
    setTeamNew(event.target.value);
  };
  const handleChangeResult = (event) => {
    SetResultNew(event.target.value);
  };

  const clearFields = () => {
    setEventNew('');
    setTeamNew('');
    SetResultNew('');
    setPathToDocumentNew('');
  }

  const handleAddNewResult = (event) =>{
    let objNew = {
      id_event:eventNew,
      id_team:teamNew,
      id_result:resultNew,
      pathToDocument: pathToDocumentNew.name
    }

    let data = new FormData();
    data.append('pathToDocumentNew', pathToDocumentNew);
   
    console.log(objNew);
    dispatch(addNewFile(data));
    dispatch(addNewResult(objNew));

    dispatch(fetchResulTeachertList(0));
    setisShowFormNew(false);
    clearFields();
  }
  return (
    <div>
      <TopBar/>
      
      <div style={{ height: 400, width: '70%', marginLeft:'330px', position: 'relative' }}>
      <br/>
      
      <br/>
      <Button variant="contained" onClick={()=>{if (isShowFormNew) setisShowFormNew(false); else setisShowFormNew(true);}}>Добавить новый результат</Button>
      <br/>
      <br/>
      <form style={{display: (isShowFormNew)?'block':'none'}}>
        <p>Добавление нового результата</p>
        <FormControl fullWidth>
            <InputLabel id="eventLabel">Мероприятие</InputLabel>
            <Select
            labelId="eventLabel"
            id="eventLabelSelect"
            value={eventNew}
            label="Мероприятие"
            onChange={handleChangeEvent}
            >
            {eventList.map((event)=><MenuItem value={event.id}>{event.Name}</MenuItem>)}
            </Select>
        </FormControl>
       
        <br/>
        <br/>
        <FormControl fullWidth>
            <InputLabel id="teamLabel">Команда</InputLabel>
            <Select
            labelId="teamLabel"
            id="teamLabelSelect"
            value={teamNew}
            label="Команда"
            onChange={handleChangeTeam}
            >
            {teamList.map((team)=>(<MenuItem value={team.id}>{team.name}</MenuItem>))}
            </Select>
        </FormControl>
        <br/>
        <br/> 
        <FormControl fullWidth>
            <InputLabel id="resultLabel">Результат</InputLabel>
            <Select
            labelId="resultLabel"
            id="resultLabelSelect"
            value={resultNew}
            label="Результат"
            onChange={handleChangeResult}>
            
            {resultList.map((result)=>(<MenuItem value={result.id}>{result.Name}</MenuItem>))}
            </Select>
        </FormControl>
        <br/>
        <br/>
        <InputLabel id="pathToDocumentLabel"> Подтверждающий документ</InputLabel>
        <FormControl fullWidth> 
        <MuiFileInput value={pathToDocumentNew} onChange={handleChangeDoc} />
        </FormControl>
        <br/>
        <br/>
        <Button variant="contained" onClick={handleAddNewResult}>Добавить</Button>
        <Button variant="contained" style={{marginLeft:'20px'}} onClick={()=>{if (isShowFormNew) setisShowFormNew(false); else setisShowFormNew(true);}}>Закрыть</Button>
      </form>

      
      <br/>
      <br/>
      <div>Результаты педагога</div>
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