import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";
import { actFetchAuthorsRequest, actSearchAuthorRequest } from '../../actions/author';

class Search extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
    }
    searchClick = () => {
        let name = this.nameRef.current.value;
        (name === "") ? this.props.fetchAllAuthors() : this.props.searchAuthor(name)
    }

    isChange = () => {
        let name = this.nameRef.current.value;
        (name === "") ? this.props.fetchAllAuthors() : this.props.searchAuthor(name)
    }
    render() {
        return (
            <div className="form-search fl-right">
                <Link to="/category/add" id="add-category" className="fl-left">Thêm mới</Link>
                <input type="submit" value="Tìm kiếm" onClick={() => this.searchClick()} />
                <input type="text" name="name" onChange={() => this.isChange()} ref={this.nameRef} placeholder={'Nhập tên...'}/>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        authors: state.authors
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAllAuthors: () => {
            dispatch(actFetchAuthorsRequest())
        },
        searchAuthor: (authorsSearch) => {
            dispatch(actSearchAuthorRequest(authorsSearch))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)