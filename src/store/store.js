import { createStore,  applyMiddleware } from 'redux';
import reduce from './reducers';
import thunk from 'redux-thunk';
import initialState from './InitialState.js';

let store = createStore(reduce, initialState, applyMiddleware(thunk));//
export default store;