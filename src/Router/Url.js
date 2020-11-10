import React  from 'react';

import ListAuthor from '../components/Author/ListAuthor';
import AddAuthor from '../components/Author/AddAuthor';
import ListUser from '../components/User/ListUser';
import ListStory from '../components/Story/ListStory';
import AddStory from '../components/Story/AddStory';
import ListCategory from '../components/Category/ListCategory';
import AddCategory from '../components/Category/AddCategory';
import EditAuthor from '../components/Author/EditAuthor';
import EditCategory from '../components/Category/EditCategory';
import EditStory from '../components/Story/EditStory';
import ListChapter from '../components/Chapter/ListChapter';
import AddChapter from '../components/Chapter/AddChapter';
import DetailChapter from '../components/Chapter/DetailChapter';
import EditChapter from '../components/Chapter/EditChapter';
import UserCurrent from '../components/Admin/UserCurrent';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dasboard/Dashboard';


const routes = [
    {
        path: '/dashboard',
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: '/authors',
        exact: false,
        main: ({ history }) => <ListAuthor history={history} />
    },
    {
        path: '/author/add',
        exact: false,
        main: ({ history }) => <AddAuthor history={history} />
    },
    {
        path: '/author/:id/edit',
        exact: false,
        main: ({ match, history }) => <EditAuthor match={match} history={history} />
    },
    {
        path: '/users',
        exact: false,
        main: ({ history }) => <ListUser history={history} />
    },
    {
        path: '/stories',
        exact: false,
        main: ({ history }) => <ListStory history={history}/>
    },
    {
        path: '/story/add',
        exact: false,
        main: ({ history }) => <AddStory history={history} />
    },
    {
        path: '/story/:id/edit',
        exact: false,
        main: ({ match, history }) => <EditStory match={match} history={history} />
    },
    {
        path: '/story/:id',
        exact: false,
        main: ({ match, history }) => <ListChapter match={match} history={history} />
    },
    {
        path: '/chapter/add/story/:id',
        exact: false,
        main: ({ match, history }) => <AddChapter match={match} history={history} />
    },
    {
        path: '/chapter/:id/detail',
        exact: false,
        main: ({ match, history }) => <DetailChapter match={match} history={history} />
    },
    {
        path: '/chapter/edit/:id',
        exact: false,
        main: ({ match, history }) => <EditChapter match={match} history={history} />
    },
    {
        path: '/categories',
        exact: false,
        main: ({ history }) => <ListCategory history={history} />
    },
    {
        path: '/category/add',
        exact: false,
        main: ({ history }) => <AddCategory history={history} />
    },
    {
        path: '/category/:id/edit',
        exact: false,
        main: ({ match, history }) => <EditCategory match={match} history={history} />
    },
    {
        path: '/admin/edit',
        exact: false,
        main: ({ match, history }) => <UserCurrent match={match} history={history} />
    },
    {
        path: '/',
        exact: true,
        main: () => <Login/>
    },
]

export default routes;