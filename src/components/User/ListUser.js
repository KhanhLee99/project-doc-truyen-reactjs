import React, { Component } from 'react';
import Axios from 'axios';

export default class ListUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listUser: []
        }
    }
    
    componentDidMount() {
        Axios.get('http://127.0.0.1:8000/api/users').then((response) => {
            this.setState({
                listUser: response.data
            })
        })
    }
    
    render() {

        const listUser = this.state.listUser.map((item, index) => {
            return <User stt={index+1} user={item} key={index}/>
        })

        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH THÀNH VIÊN</h2>
                    <div className="hr" />
                    <div className="form-search fl-right">
                        <a href id="add-category" className="fl-left">Thêm mới</a>
                        <input type="submit" value="Tìm kiếm" />
                        <input type="text" />
                    </div>
                    <div className="list">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên thành viên</th>
                                    <th>Email</th>
                                    <th>Chức vụ</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUser}
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có {this.state.listUser.length} bản ghi)</div>
                    <div className="paging">
                        <ul id="list-paging" className="fl-right">
                            <li>
                                <a href>&lt;</a>
                            </li>
                            <li className="paging-active">
                                <a href>1</a>
                            </li>
                            <li>
                                <a href>2</a>
                            </li>
                            <li>
                                <a href>3</a>
                            </li>
                            <li>
                                <a href>4</a>
                            </li>
                            <li>
                                <a href>&gt;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class User extends Component {
    render() {
        var user1 = this.props.user;
        return (
            <tr>
                <td scope="row">{this.props.stt}</td>
                <td>{user1.name}</td>
                <td>{user1.email}</td>
                <td>{user1.role}</td>
                <td>
                    <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                    <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                </td>
            </tr>
        );
    }
}


