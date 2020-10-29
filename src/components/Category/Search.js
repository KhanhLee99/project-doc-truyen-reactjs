import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";
import { actFetchCategoriesRequest, actSearchCategoriesRequest } from '../../actions/category';

class Search extends Component {

    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
    }

    searchClick = () => {
        let name = this.nameRef.current.value;
        (name === "") ? this.props.fetchCategories() : this.props.searchCategories(name)
    }
    isChange = () => {
        let name = this.nameRef.current.value;
        (name === "") ? this.props.fetchCategories() : this.props.searchCategories(name)
    }
    render() {
        return (
            <div className="form-search fl-right">
                <Link to="add-author.html" id="add-category" className="fl-left">Thêm mới</Link>
                <input type="submit" value="Tìm kiếm" onClick={() => this.searchClick()} />
                <input type="text" ref={this.nameRef} onChange={() => this.isChange()} placeholder={'Nhập tên...'}/>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCategories: () => {
            dispatch(actFetchCategoriesRequest())
        },
        searchCategories: (name) => {
            dispatch(actSearchCategoriesRequest(name))
        }
    }
}
export default connect(null, mapDispatchToProps)(Search)
