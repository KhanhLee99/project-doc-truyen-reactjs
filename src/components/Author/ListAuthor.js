import Axios from 'axios'
import React, { Component } from 'react'
import MyContext from '../../myContext';
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";
import Pagination from './Pagination';
import Search from './Search';

class ListAuthor extends Component {
    render() {
        const listAuthor = this.context.listAuthor.map((item, key) => (
            <AuthorItem author={item} key={key} stt={key + 1} />
        ))
        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH TÁC GIẢ</h2>
                    <div className="hr" />
                    <Search />
                    <div className="list">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên tác giả</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listAuthor}
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có {this.context.listAuthor.length} bản ghi)</div>
                    <Pagination />
                </div>
            </div>
        )
    }
}
ListAuthor.contextType = MyContext;
export default ListAuthor;


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
            Axios.delete('http://127.0.0.1:8000/api/author/' + id).then((response) => {
                this.context.loadAuthor();
            })
        }
    }
    editClick = (e, id) => {
        this.context.getAuthorById(id);
    }
    render() {
        var { author } = this.props;
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{author.name}</td>
                <td>
                    <Link to={'/author/edit/' + author.id} title="Sửa" className="edit" onClick={(e, id) => this.editClick(e, author.id)}><i className="fa fa-pencil icon" /></Link>
                    <Link to='/' title="Xóa" className="delete" onClick={(e, id) => { this.deleteClick(e, author.id) }}><i className="fa fa-trash icon" /></Link>
                </td>
            </tr>
        )
    }
}
AuthorItem.contextType = MyContext;