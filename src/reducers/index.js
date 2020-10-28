import { combineReducers } from 'redux';
import authors from './authors';


const appReducers = combineReducers({
    authors,
});

export default appReducers;