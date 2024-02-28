import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/de';

import TopBar from './Details/TopBar.js';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect }from 'react';

import { fetchEventList } from './store/event/actions';
import { addNewEvent } from './store/event/actions';
import { fetchStatusList } from './store/status/actions';
import { fetchLevelList } from './store/level/actions';
import { fetchTypeList } from './store/type/actions';




export default function EventList() {
  const dispatch = useDispatch();
  console.log(useSelector((state)=>state.event.eventList));
  const rows =useSelector((state)=>state.event.eventList);
  const statusList = useSelector((state)=>state.status.statusList);

  const levelList = useSelector((state)=>state.level.levelList);
  const typeList = useSelector((state)=>state.type.typeList);
  useEffect(() => {
     dispatch(fetchEventList());
     dispatch(fetchStatusList());
     dispatch(fetchLevelList());
     dispatch(fetchTypeList());
     }, []);

    const [statusNew, setStatusNew] = React.useState('');
    const [levelNew, setLevelNew] = React.useState('');
    const [typeNew, setTypeNew] = React.useState('');
    const [preventEventNew, setPreventEvent] = React.useState('');
    const [isShowFormNew, setisShowFormNew] = React.useState(false);
    const [nameEvetnNew, setNameEvetnNew] = React.useState('');
    const [dateFrom, setDateFrom] = React.useState(dayjs());
    const [dateTo, setDateTo] = React.useState(dayjs());
  const handleChange = (event) => {
    setStatusNew(event.target.value);
  };
  const handleChangeLevel = (event) => {
    setLevelNew(event.target.value);
  };
  const handleChangeType = (event) => {
    setTypeNew(event.target.value);
  };
  const handleChangepreventEvent = (event) => {
    setPreventEvent(event.target.value);
  };
  
  const handleChangeName=(event)=> {
    setNameEvetnNew(event.target.value);
  }
  
  const handleChangeShow=(event)=> {
    if (isShowFormNew)
      setisShowFormNew(false);
    else setisShowFormNew(true);
  }

  const handleAddNewEvent=() => {
    let newEvent = {
      eventName: nameEvetnNew,
      id_type:typeNew,
      id_level:levelNew,      
      id_status:statusNew,
      date_from: dayjs(dateFrom).format('YYYY-MM-DD'),
      date_to: dayjs(dateTo).format('YYYY-MM-DD'),
      id_previousEvent: preventEventNew
    }
    dispatch(addNewEvent(newEvent));

  }
  dayjs.locale('de')
  return (
    <div>
      <TopBar/>
      
      <div style={{ height: 400, width: '70%', marginLeft:'330px', position: 'relative' }}>
      <br/>
      <Button variant="contained" onClick={handleChangeShow}>Добавить новое мероприятие</Button>
      <br/>      
      <br/>
      <form style={{display: (isShowFormNew)?'block':'none'}}>
        <p>Создание нового мероприятия</p>
        <FormControl fullWidth>
        <TextField id="outlined-basic" label="Наименование мероприятия" variant="outlined" onChange={handleChangeName} value={nameEvetnNew}/>
        </FormControl>
        <br/>
        <br/>
        <FormControl fullWidth>
            <InputLabel id="statusLabel">Статус</InputLabel>
            <Select
            labelId="statusLabel"
            id="statusLabelSelect"
            value={statusNew}
            label="Статус"
            onChange={handleChange}
            >
              {statusList.map((statusItem) => (<MenuItem value={statusItem.id}>{statusItem.Name}</MenuItem>))}
            </Select>
        </FormControl>
        <br/>
        <br/>
        <FormControl fullWidth>
            <InputLabel id="levelLabel">Уровень</InputLabel>
            <Select
            labelId="levelLabel"
            id="levelLabelSelect"
            value={levelNew}
            label="Уровень"
            onChange={handleChangeLevel}
            >
              
              {levelList.map((levelItem) => (<MenuItem value={levelItem.id}>{levelItem.Name}</MenuItem>))}
            
            </Select>
        </FormControl>
        <br/>
        <br/>
        <FormControl fullWidth>
            <InputLabel id="typeLabel">Тип</InputLabel>
            <Select
            labelId="typeLabel"
            id="typeLabelSelect"
            value={typeNew}
            label="Тип"
            onChange={handleChangeType}
            >
              
               {typeList.map((typeItem) => (<MenuItem value={typeItem.id}>{typeItem.Name}</MenuItem>))}
       
            </Select>
        </FormControl>
        <br/>
        <br/>
        <FormControl fullWidth>
        
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
            <DatePicker label="Начало мероприятия:" value={dateFrom} onChange={(newValue)=>{setDateFrom(newValue)}}/>
        </LocalizationProvider>
        </FormControl>
        <br/>
        <br/>
        <FormControl fullWidth>
        
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
           <DatePicker label="Конец мероприятия:"  value={dateTo} onChange={(newValue)=>{setDateTo(newValue)}} />
          </LocalizationProvider>
        </FormControl>
        <br/>
        <br/>
        <FormControl fullWidth>
            <InputLabel id="preventEventLabel">Предшествующее мероприятие</InputLabel>
            <Select
            labelId="preventEventLabel"
            id="preventEventLabelSelect"
            value={preventEventNew}
            label="Предшествующее мероприятие"
            onChange={handleChangepreventEvent}
            >
           
            {rows.map((row) => (<MenuItem value={row.id}>{row.Name}</MenuItem>))}
            
            </Select>
        </FormControl>
        <br/>
        <br/>
        <Button variant="contained" onClick={handleAddNewEvent}>Добавить</Button>
        <Button variant="contained" style={{marginLeft:'20px'}} onClick={handleChangeShow} >Закрыть</Button>
      </form>
      <br/>
      <div>Мероприятия:</div>
      <br/>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Название мероприятия</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Уровень</TableCell>
            <TableCell align="right">Тип мероприятия</TableCell>
            <TableCell align="right">Дата с</TableCell>
            <TableCell align="right">Дата по</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">                
                {row.Name}               
              </TableCell>
              <TableCell align="right">                
                {row.Status}             
              </TableCell>
              <TableCell align="right">                
                {row.Level}             
              </TableCell>
              <TableCell align="right">                
                {row.Type}             
              </TableCell>
              <TableCell align="right">                
                {dayjs(row.date_from).format('DD.MM.YYYY')}             
              </TableCell>
              <TableCell align="right">                
                {dayjs(row.date_to).format('DD.MM.YYYY')}             
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
  );
}