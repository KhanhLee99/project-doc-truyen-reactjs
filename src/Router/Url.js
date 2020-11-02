import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import ListAuthor from '../components/Author/ListAuthor';
import AddAuthor from '../components/Author/AddAuthor';
import ListUser from '../components/User/ListUser';
import ListStory from '../components/Story/ListStory';
//

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


class Url extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* <Route exact path="/">
                        <Home />
                    </Route> */}
                    <Route path="/authors">
                        <ListAuthor />
                    </Route>
                    <Route path="/author/add">
                        <AddAuthor />
                    </Route>
                    <Route path="/users">
                        <ListUser />
                    </Route>


                    <Route path="/story/add">
                        <AddStory />
                    </Route>
                    <Route path="/category/add">
                        <AddCategory />
                    </Route>

                    <Route path="/stories">
                        <ListStory />
                    </Route>
                    <Route path="/category/add">
                        <AddCategory />
                    </Route>
                    <Route path="/categories">
                        <ListCategory />
                    </Route>

                    <Route path="/author/edit" children={<EditAuthor />} />



                    {/* <Route path="/chi-tiet/:slug.:id.html" children={<ChiTiet />} />
                    <Route path="/chi-tiet/:slug.:id.html">
                            <ChiTiet />
                        </Route> */}

                    {/* <Route path="/edit/:id">
                        <Edit />
                    </Route> */}


                </Switch>
            </div>
        );
    }
}

const routes = [
    // {
    //     path: '/',
    //     exact: true,
    //     main: () => <HomePage />
    // },
    {
        path: '/authors',
        exact: false,
        main: () => <ListAuthor />
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
        main: () => <ListUser />
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
]

export default routes;