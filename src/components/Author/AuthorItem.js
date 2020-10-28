import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Route,
    Link, Redirect
} from "react-router-dom";
import { actDeleteAuthorRequest } from '../../actions/author';

class AuthorItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authorEdit: {}
        }
    }

    deleteClick = (e, id) => {
        e.preventDefault();
        if (window.confirm('Ban co chac muon xoa?')) {
            this.props.deleteAuthor(id);
        }
    }
    editClick = (e, id) => {
        // e.preventDefault();
        // Axios.get('http://127.0.0.1:8000/api/author/' + id).then((response) => {
        //     this.context.getAuthorEdit(response.data);
        //     this.context.trueRedirect();
        // })

    }
    render() {
        var { author } = this.props;
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{author.name}</td>
                <td>
                    <Link to={`/author/${author.id}/edit`} title="Sửa" className="edit" onClick={(e, id) => this.editClick(e, author.id)}><i className="fa fa-pencil icon" /></Link>
                    <a href='/' title="Xóa" className="delete" onClick={(e, id) => { this.deleteClick(e, author.id) }}><i className="fa fa-trash icon" /></a>
                </td>
            </tr>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteAuthor: (id) => {
            dispatch(actDeleteAuthorRequest(id))
        },
    }
}
export default connect(null, mapDispatchToProps)(AuthorItem);
