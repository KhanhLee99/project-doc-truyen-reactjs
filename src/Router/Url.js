import React, { Component } from 'react';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,} from "react-router-dom";

import ListAuthor from '../components/Author/ListAuthor';
import AddAuthor from '../components/Author/AddAuthor';
import ListUser from '../components/User/ListUser';
import ListStory from '../components/Story/ListStory';
//
import AddStory from '../components/Story/AddStory';
import AddCategory from '../components/Catelory/AddCategory';
import ListCatelories from '../components/Catelory/ListCatelories';

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
                    <Route path="/categories">
                        <ListCatelories />
                    </Route>

                    <Route path="/stories">
                        <ListStory/>
                    </Route>
                    
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

export default Url;