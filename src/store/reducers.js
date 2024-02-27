import { combineReducers } from 'redux';
import groupReducer from './group/reducer';
import eventReducer from './event/reducer';
import studentReducer from './student/reducer';
import statusReducer from './status/reducer';
import levelReducer from './level/reducer';
import typeReducer from './type/reducer';
import resultReducer from './result/reducer';
import teamReducer from './team/reducer';
import quantumReducer from './quantum/reducer';
import teacherReducer from './teacher/reducer';

let reduce = combineReducers({group: groupReducer, 
    event: eventReducer, 
    student: studentReducer, 
    status: statusReducer, 
    level: levelReducer, 
    type: typeReducer, 
    result: resultReducer, 
    team: teamReducer, 
    quantum: quantumReducer,
    teacher: teacherReducer
});
export default reduce;