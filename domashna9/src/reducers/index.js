import {combineReducers} from 'redux';
import SayHelloReducer from './SayHelloReducer';
import NameSurnameReducer from './NameSurnameReducer';

export default combineReducers({
    SayHelloReducer,
    NameSurnameReducer
})

