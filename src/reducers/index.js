import { combineReducers } from 'redux';
import authors from './authors';
import authorEditing from './authorEditing';
import isRedirect from './isRedirect';
import users from './users';
import categories from './categories';
import categoryEditing from './categoryEditing';
import stories from './stories';
import storyEditing from './storyEditing';
import chapters from './chapters';


const appReducers = combineReducers({
    authors,
    authorEditing,
    isRedirect,
    users,
    categories,
    categoryEditing,
    stories,
    storyEditing,
    chapters
});

export default appReducers;