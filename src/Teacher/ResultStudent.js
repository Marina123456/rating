import * as React from 'react';

import TopBar from '../Details/TopBar.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResultList } from '../store/student/actions.js';
import { useEffect }from 'react';
import { useParams } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'EVENT', headerName: 'Название мероприятия', width: 230 },
  { field: 'Status', headerName: 'Статус', width: 130 },
  { field: 'Level', headerName: 'Уровень', width: 130 },
  { field: 'Type', headerName: 'Тип', width: 130 },
  { field: 'result', headerName: 'Результат', width: 130 },
  { field: 'pathToDocument', headerName: 'Документ', width: 230 },
  {
    field: 'Score',
    headerName: 'Баллы',
    type: 'number',
    width: 90,
  }
  
];


export default function ResultStudent() {

  const dispatch = useDispatch();
  
  const rows =useSelector(state=>state.student.List_result);
  //const currentStudent =useSelector(state=>state.student.currentStudent);
  const { id_student } = useParams();
  const sum =  rows.reduce((acc, curr) => acc + parseInt(curr.Score), 0);
   //dispatch(selectCurrentStudent(id_student));
   const students =useSelector(state=>state.student.studentList);
     
  const currentStudent = students.filter((student)=>{if (student.id==id_student) return student;})[0];
  useEffect(() => {
    
   
     dispatch(fetchResultList(id_student));
  },[])
    
  return (
    
    <div>
      
      <TopBar/>
      
      <div style={{ height: 400, width: '70%', marginLeft:'330px', position: 'relative' }}>
      <br/>
      <div>Обучающийся: {currentStudent.fio}</div>
      <div>Общий балл: {sum } </div>
      <div>Место в рейтинге: 1</div>
      <div>Детализация:</div>
      <br/>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Название мероприятия</TableCell>
            <TableCell align="right">Уровень</TableCell>
            <TableCell align="right">Баллы</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Тип</TableCell>
            <TableCell align="right">Путь к документу</TableCell>
            <TableCell align="right">Результат</TableCell>
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
              <TableCell align="right">{row.EVENT}</TableCell>
              <TableCell align="right">{row.Level}</TableCell>
              <TableCell align="right">{row.Score}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
              <TableCell align="right">{row.Type}</TableCell>
              <TableCell align="right"><img width="80px" src={"https://vrar29.xyz/rating/api/_uploads/"+row.pathToDocument}/></TableCell>
              <TableCell align="right">{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
  );
}