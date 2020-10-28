import { combineReducers } from 'redux';
import authors from './authors';
import authorEditing from './authorEditing';
import isRedirect from './isRedirect';
import users from './users';


const appReducers = combineReducers({
    authors,
    authorEditing,
    isRedirect,
    users,
});

export default appReducers;