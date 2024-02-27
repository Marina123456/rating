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
import Button from '@mui/material/Button';

import TopBar from './Details/TopBar.js';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupList } from './store/group/actions';
import { useEffect }from 'react';

function createData(id, name, countStudents) {
  return { id, name, countStudents};
}

//const rows = [
  //createData(1, 'ПМ 7', 14)
  
//];





export default function GroupList() {
  const dispatch = useDispatch();
  console.log(useSelector((state)=>state.group.groupList));
  const rows =useSelector((state)=>state.group.groupList);
  useEffect(() => {
     dispatch(fetchGroupList(0));
  
     }, []);
  return (
    <div>
       <TopBar/>
     
      <div style={{ height: 400, width: '70%', marginLeft:'330px', position: 'relative'}}>
      <br/>
      <Button variant="contained">Добавить новую группу</Button>
      <Button  style={{marginLeft:'20px'}} variant="contained">Импортировать из Навигатора</Button>
      <br/>
      <br/>
      <div>Педагог: Жирнова Марина Анатольевна</div>
     
      
      <div>Группы:</div>
      <br/>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Номер группы</TableCell>
            <TableCell align="right">Колличество учеников</TableCell>
            
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
                <Link to={'/group/'+row.id}>
                {row.Name}
                </Link>
                </TableCell>
              <TableCell align="right">10</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
  );
}