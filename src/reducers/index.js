import { combineReducers } from 'redux';
import authors from './authors';
import authorEditing from './authorEditing';
import isRedirect from './isRedirect';


const appReducers = combineReducers({
    authors,
    authorEditing,
    isRedirect
});

export default appReducers;