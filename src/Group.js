import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom"; 

import TopBar from './Details/TopBar.js';

import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentList } from './store/student/actions';
import { useEffect }from 'react';
import { useParams } from 'react-router-dom';

function createData(id, fio, dataBrth, age, scores,rating) {
  return { id, fio, dataBrth, age, scores,  rating};
}

//const rows = [];




export default function Group() {
  const dispatch = useDispatch();
  console.log(useSelector((state)=>state.student.studentList));
  const rows =useSelector((state)=>state.student.studentList);
  const { idGroup } = useParams();
  useEffect(() => {
     dispatch(fetchStudentList(idGroup));
  
     }, []);
  return (
    <div>
      <TopBar/>
      
      <div style={{ height: 400, width: '70%', marginLeft:'330px', position: 'relative' }}>
      <br/>
      <div>Наименование группы: ПМ 7</div>
      <div>Количество учеников: {rows.length}</div>
      
      <div>Список:</div>
      <br/>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">ФИО</TableCell>
            <TableCell align="right">Дата рождения</TableCell>
            <TableCell align="right">Возраст</TableCell>
            <TableCell align="right">Баллы</TableCell>
            <TableCell align="right">Место в рейтинге</TableCell>
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
                <Link to={'/result-student/'+row.id}>
                {row.fio}
                </Link>
                </TableCell>
              <TableCell align="right">{row.dataBrth}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.scores}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
  );
}