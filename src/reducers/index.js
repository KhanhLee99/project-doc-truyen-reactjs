import { combineReducers } from 'redux';
import authors from './authors';
import authorEditing from './authorEditing';
import isRedirect from './isRedirect';
import users from './users';
import categories from './categories';
import categoryEditing from './categoryEditing';


const appReducers = combineReducers({
    authors,
    authorEditing,
    isRedirect,
    users,
    categories,
    categoryEditing
});

export default appReducers;