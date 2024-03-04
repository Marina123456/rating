import {types} from './actionTypes';
import { useDispatch, useSelector } from 'react-redux';

const host ='https://vrar29.xyz/rating/api';
///List_result/index.php?id_student=%271601158%27

function calculateAge (birthDate, otherDate) {
  birthDate = new Date(birthDate);
  otherDate = new Date(otherDate);

  var years = (otherDate.getFullYear() - birthDate.getFullYear());

  if (otherDate.getMonth() < birthDate.getMonth() || 
      otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
      years--;
  }

  return years;
}

export function fetchStudentList(idGroup) {
   return async function fetchStudentListThunk (dispatch, getState) {
      const route  = `${host}/liststudent/index.php?id_group=${idGroup}`;
      console.log(route);
      let response = await fetch(route);
          response = await response.json();

      let new_result = response.filter(x => x);

      let resultWithFIO = new_result.map((item) =>{
        const container = {};

        container["id"] = item.id_student;
        container["id_member"] = item.id_member;
        container["fio"] = item.Surname+" "+item.Name+" "+item.Patronymic;
        let temp_date =  new Date(Date.parse(item.BirthDate));
        let temp_month = Number(temp_date.getUTCMonth())+1;
        container["dataBrth"] =temp_date.getDate().toString()+"."+temp_month+"."+temp_date.getFullYear().toString();
        container["age"] =calculateAge(temp_date,new Date());//new Date().getFullYear() - temp_date.getFullYear();
        container["scores"] = item.Rating;
        container["rating"] = 0;

        return container;
      });


      return dispatch({ type: types.FETCH, studentList: resultWithFIO });//response

  }
}

export function selectCurrentStudent(id_student) {
  return async function selectCurrentStudentThunk (dispatch, getState) {
     const students =useSelector((state)=>state.student.studentList);
     let new_result = students.filter((student)=>{if (student.id==id_student) return student;})
     return dispatch({ type: types.SELECT_CURRENT_STUDENT, currentStudent: new_result });//response

 }
}

export function fetchResultList(id_student) {
  return async function fetchResultListThunk (dispatch, getState) {
     const route  = `${host}/List_result/index.php?id_student=${id_student}`;
     console.log(route);
     let response = await fetch(route);
         response = await response.json();

     let new_result = response.filter(x => x);
     console.log(new_result);
     return dispatch({ type: types.FETCH_RESULT, List_result: new_result });//response

 }
}

/*
[id] => 1601160
[id_group] => 1
[id_student] => 1601160
[Surname] => Крючков
[Name] => Владимир
[Patronymic] => Ильич
[BirthDate] => 2008-03-05
[idFromNavigator] => e38ac22d-3acb-449a-8391-06f49a1f85c4
[Rating] => 5*/

// return { id, fio, dataBrth, age, scores,  rating};



  