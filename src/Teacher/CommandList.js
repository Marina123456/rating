import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import TopBar from '../Details/TopBar.js';

import { useStore } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect }from 'react';
import { fetchQuantumList } from '../store/quantum/actions.js';
import { fetchTeamList } from '../store/team/actions.js';
import { fetchGroupByQuantumList } from '../store/group/actions.js';
import { fetchStudentList } from '../store/student/actions.js';
import { fetchTeacherList } from '../store/teacher/actions.js';  
import { addNewTeam } from '../store/team/actions.js'; 

export default function CommandList() {
  const [isShowFormNew, setisShowFormNew] = React.useState(false);
  const [isIndividual, setIsIndividual] = React.useState(false);
  const [nameTeamNew, setnameTeamNew] = React.useState('');
  const emptyObj = { idQuantum: 0, idGroup: 0, idStudent:0, arrayGroup:[{id:0, Name:""}], arrayStudent:[{id:0, fio:""}] };
  const emptyObjManager = { idTeacher: 0 };
  const [inputs, setInputs] = React.useState([emptyObj]);
  const [inputsTeacher, setInputsTeacher] = React.useState([emptyObjManager]);
  const [inputFieldStudent, setInputFields] = React.useState([{id:0, FIO: ''}]);
  const handleChangeName=(event)=> {setnameTeamNew(event.target.value);  }
  const dispatch = useDispatch();
  const store = useStore();
  const rows = useSelector((state)=>state.team.teamList);
  const quatums = useSelector((state)=>state.quantum.quantumList);
  const currentGroupByQuantum = useSelector((state)=>state.group.groupByQuantumList);  
  const currentStudentByGroup = useSelector((state)=>state.student.studentList); 
  const teacherList= useSelector((state)=>state.teacher.teacherList);   
  
  useEffect(() => {   
    dispatch(fetchTeamList());
    dispatch(fetchQuantumList());
    dispatch(fetchTeacherList());
     
    }, []);
  const handleChangeQuantum= (event, index) => {      
      let onChangeValue = [...inputs];
      onChangeValue[index]["idQuantum"] = event.target.value;       
      dispatch(fetchGroupByQuantumList(event.target.value));
      onChangeValue[index]["arrayGroup"] = currentGroupByQuantum;
      setInputFields(onChangeValue);
    };
    const handleChangeGroup =(event, index) => {      
      let onChangeValue = [...inputs];
      onChangeValue[index]["idGroup"] = event.target.value;     
      dispatch(fetchStudentList(event.target.value));
      onChangeValue[index]["arrayStudent"] = currentStudentByGroup;       
      setInputFields(onChangeValue);
    };
    const handleChangeStudent =(event, index) => {      
      let onChangeValue = [...inputs];
      onChangeValue[index]["idStudent"] = event.target.value;     
         
      setInputFields(onChangeValue);
    };
    const handleChangeTeacher =(event, index) => {      
      let onChangeValue = [...inputsTeacher];
      onChangeValue[index]["idTeacher"] = event.target.value;     
         
      setInputsTeacher(onChangeValue);
    };
    const Individual = (e)=>{
      setIsIndividual(!isIndividual);
      let student = inputs[0]["arrayStudent"].filter((item)=>{ 
        if (item.id_member==[inputs[0]["idStudent"]]) 
            return item;
       });
      console.log(student[0]);
      if (!isIndividual){
        if (student.length!=0)
          setnameTeamNew(student[0].fio);
      } else {
        setnameTeamNew("");
      }
      
      
      
    }
    const handleAddTeam=()=>{
      
      let student_list=[];
      inputs.map((index)=>{
        let student={
          idQuantum: index.idQuantum,
          idGroup: index.idGroup,
          idStudent: index.idStudent
        }
        student_list.push(student);
      });
      let newTeam = {
        nameTeam: nameTeamNew,
        studentList: student_list,
        teacherList: inputsTeacher
      };
      dispatch(addNewTeam(newTeam));
    }
  return (
    <div>
      <TopBar/>      
      <div style={{ height: 400, width: '70%', marginLeft:'330px', position: 'relative' }}>
      <br/>
      <Button variant="contained" onClick={()=>{if (isShowFormNew) setisShowFormNew(false); else setisShowFormNew(true);}}>Добавить новую команду</Button>
      <br/>
      <br/>
      <form style={{display: (isShowFormNew)?'block':'none'}}>
        <p>Создание новой команды</p>
        <FormControl fullWidth>
        <TextField id="outlined-basic" label="Наименование команды" variant="outlined" onChange={handleChangeName} value={nameTeamNew}/>
        </FormControl>
        <br/>
        <br/>
        
        <br/>
        <br/>
        
        <Button variant="contained" onClick={()=>setInputs([...inputs, emptyObj])}>Добавить участника команды</Button>
        <br/>
        <br/>
        {inputs.map((item, index) => (
         <div>
           <FormControl style={{width:'300px'}}>
            <InputLabel id="quantumLabel">Квантум</InputLabel>
            <Select
            labelId="quantumLabel"
            id="quantumLabelSelect"
            label="Квантум"
            onChange={(event) => handleChangeQuantum(event, index)}
            >
              {quatums.map((quatum) => (<MenuItem value={quatum.id}>{quatum.Name}</MenuItem>))}
            </Select>
        </FormControl>
        <FormControl style={{width:'300px', marginLeft:'20px'}}>
            <InputLabel id="groupLabel">Группа</InputLabel>
            <Select
            labelId="groupLabel"
            id="groupLabelSelect"
            label="Группа"
            onChange={(event) => handleChangeGroup(event, index)}
            >
              {inputs[index]["arrayGroup"].map((group) => (<MenuItem value={group.id}>{group.Name}</MenuItem>))}
            </Select>
        </FormControl>
        <br/>
        <br/>
        <FormControl fullWidth>
            <InputLabel id="studentLabel">Обучающийся</InputLabel>
            <Select
            labelId="studentLabel"
            id="studentLabelSelect"
            label="Обучающийся"
            onChange={(event) => handleChangeStudent(event, index)}
            >
              {inputs[index]["arrayStudent"].map((student) => (<MenuItem value={student.id_member}>{student.fio}</MenuItem>))}
            </Select>
        </FormControl>
        <br/>
        <FormControlLabel control={<Checkbox  checked={isIndividual} onChange={Individual}/>}  label="Индивидуальная работа" />
        <br/> 
         <br/>         
         </div> 
        ))}
        <Button variant="contained" onClick={()=>setInputsTeacher([...inputsTeacher, emptyObjManager])}>Добавить наставника-руководителя</Button>
        <br/>
        <br/>
         {inputsTeacher.map((item, index) => (
          <div>
            <FormControl fullWidth>
            <InputLabel id="teacherLabel">Наставник-руководитель команды</InputLabel>
            <Select
            labelId="teacherLabel"
            id="teacherLabelSelect"
            label="Наставник-руководитель команды"
            onChange={(event) => handleChangeTeacher(event, index)}
            >
              {teacherList.map((teacher) => (<MenuItem value={teacher.id}>{teacher.FIO}</MenuItem>))}
            </Select>
        </FormControl>
        <br/>
        <br/>
          </div>
         ))}
         
        <br/>
        <br/>
        <Button variant="contained" onClick={handleAddTeam}>Добавить</Button>
        <Button variant="contained" style={{marginLeft:'20px'}} onClick={()=>{if (isShowFormNew) setisShowFormNew(false); else setisShowFormNew(true);}}>Закрыть</Button>
        <br/>
        <br/>
      </form>
      <div>Команды:</div>
      <br/>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Название команды</TableCell>
            <TableCell align="right">Состав команды</TableCell>
            <TableCell align="right">Руководители команды</TableCell>
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
              <TableCell align="left">               
                {row.name}               
                </TableCell>
              <TableCell align="left">
              {row.students.map((student) => (
                <p><Link to={"/result-student/"+student.id}>
                {student.fio}
                </Link></p>
              ))}
                </TableCell>
                <TableCell align="right">
              {row.teachers.map((teacher) => (
                <Link to="/">
                {teacher.fio}
                </Link>
              ))}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
  );
}