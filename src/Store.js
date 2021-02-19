import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};


export default createStore(initialState, rootReducer, applyMiddleware(...middleware))