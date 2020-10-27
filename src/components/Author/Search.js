import Axios from 'axios';
import React, { Component } from 'react'
import MyContext from '../../myContext';
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
    }
    searchClick = () => {
        this.context.searchAuthor(this.nameRef.current.value)
    }
    render() {
        return (
            <div className="form-search fl-right">
                <Link to="/author/add" id="add-category" className="fl-left">Thêm mới</Link>
                <input type="submit" value="Tìm kiếm" onClick={() => this.searchClick()} />
                <input type="text" name="name" ref={this.nameRef} />
            </div>
        )
    }
}
Search.contextType = MyContext;
