import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom"; 
import Button from '@mui/material/Button';
import TopBar from '../Details/TopBar.js';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupListStudent } from '../store/group/actions.js';
import { useEffect }from 'react';

function createData(id, name, countStudents) {
  return { id, name, countStudents};
}

export default function StudentGroups() {
  const dispatch = useDispatch();
  console.log(useSelector((state)=>state.group.groupList));
  const rows =useSelector((state)=>state.group.groupList);
  const currentStudent =useSelector((state)=>state.auth.currentUser);
  console.log(currentStudent);
  useEffect(() => {
     dispatch(fetchGroupListStudent(currentStudent.id));
  
     }, []);
  return (
    <div>
       <TopBar/>
     
      <div style={{ height: 400, width: '70%', marginLeft:'330px', position: 'relative'}}>
      
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