import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";
import { actDeleteUserRequest } from '../../actions/users';

class UserItem extends Component {
    deleteClick = (e, id) => {
        e.preventDefault();
        if (window.confirm('Bạn có chắc muốn xóa ?')) {
            this.props.deleteUser(id);
        }
    }
    render() {
        let { user } = this.props;
        return (
            <tr>
                <td scope="row">{this.props.stt}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                    <Link to title="Sửa" className="edit"><i className="fa fa-pencil icon" /></Link>
                    <Link to='/' title="Xóa" className="delete" onClick={(e, id) => this.deleteClick(e, user.id)}><i className="fa fa-trash icon" /></Link>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteUser: (id) => {
            dispatch(actDeleteUserRequest(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(UserItem)