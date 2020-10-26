import React, { Component } from 'react';
import MyContext from '../../myContext'
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";

class Search extends Component {

    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
    }
    
    searchClick = () => {
        this.context.searchStory(this.nameRef.current.value);
    }

    render() {
        return (
            <div className="form-search fl-right">
                <Link to="add-story.html" id="add-category" className="fl-left">Thêm mới</Link>
                <input type="submit" onClick={() => this.searchClick()} value="Tìm kiếm" />
                <input type="text" ref={this.nameRef} />
            </div>

        );
    }
}

Search.contextType = MyContext;
export default Search;
