import React, { Component } from 'react';
import Axios from 'axios';
import MyContext from '../../myContext';
import Search from './Search';
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";

export default class ListUser extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         listUser: []
    //     }
    // }
    
    // componentDidMount() {
    //     Axios.get('http://127.0.0.1:8000/api/users').then((response) => {
    //         this.setState({
    //             listUser: response.data
    //         })
    //     })
    // }
    
    render() {

        const listUser = this.context.listUser.map((item, index) => {
            return <UserItem stt={index+1} user={item} key={index}/>
        })

        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH THÀNH VIÊN</h2>
                    <div className="hr" />
                    <Search/>
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
                    <div className="num-record">(Có {this.context.listUser.length} bản ghi)</div>
                    <div className="paging">
                        <ul id="list-paging" className="fl-right">
                            <li>
                                <Link to>&lt;</Link>
                            </li>
                            <li className="paging-active">
                                <Link to>1</Link>
                            </li>
                            <li>
                                <Link to>2</Link>
                            </li>
                            <li>
                                <Link to>3</Link>
                            </li>
                            <li>
                                <Link to>4</Link>
                            </li>
                            <li>
                                <Link to>&gt;</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

ListUser.contextType = MyContext;

class UserItem extends Component {

    deleteClick =(e, id) => {
        e.preventDefault();
        if(window.confirm('Ban co chac muon xoa?')){
            Axios.delete('http://127.0.0.1:8000/api/user/' +id).then((response) =>{
                this.context.loadUser();
            })
        }
    }

    render() {
        let {user} = this.props;
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

UserItem.contextType = MyContext;




