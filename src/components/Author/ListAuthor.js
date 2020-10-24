import Axios from 'axios'
import React, { Component } from 'react'
import MyContext from '../../myContext';

class ListAuthor extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         listAuthor: []
    //     }
    // }

    // loadAuthor = () => {
    //     Axios.get('http://127.0.0.1:8000/api/authors').then((response) => {
    //         this.setState({
    //             listAuthor: response.data
    //         })
    //     })
    // }

    // componentDidMount() {
    //     this.loadAuthor();
    // }

    render() {
        const listAuthor = this.context.listAuthor.map((item, key) => {
            return (
                <AuthorItem author={item} key={key} stt={key + 1} />
            )
        })
        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH TÁC GIẢ</h2>
                    <div className="hr" />
                    <div className="form-search fl-right">
                        <a href="/category/add" id="add-category" className="fl-left">Thêm mới</a>
                        <input type="submit" value="Tìm kiếm" />
                        <input type="text" />
                    </div>
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
                    <div className="paging">
                        <ul id="list-paging" className="fl-right">
                            <li>
                                <a href='/'>&lt;</a>
                            </li>
                            <li className="paging-active">
                                <a href='/'>1</a>
                            </li>
                            <li>
                                <a href='/'>2</a>
                            </li>
                            <li>
                                <a href='/'>3</a>
                            </li>
                            <li>
                                <a href='/'>4</a>
                            </li>
                            <li>
                                <a href='/'>&gt;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
ListAuthor.contextType = MyContext;
export default ListAuthor;


class AuthorItem extends Component {
    deleteClick = (e, id) => {
        e.preventDefault();
        if (window.confirm('Ban co chac muon xoa?')) {
            Axios.delete('http://127.0.0.1:8000/api/author/' + id).then((response) => {
                this.context.loadAuthor();
            })
        }
    }
    editClick = (e, id) => {
        e.preventDefault();
        alert(id);
    }
    render() {
        var { author } = this.props;
        return (
            <tr>
                <td scope="row">{this.props.stt}</td>
                <td>{author.name}</td>
                <td>
                    <a href='/' title="Sửa" className="edit" onClick={(e, id) => { this.editClick(e, author.id) }}><i className="fa fa-pencil icon" /></a>
                    <a href='/' title="Xóa" className="delete" onClick={(e, id) => { this.deleteClick(e, author.id) }}><i className="fa fa-trash icon" /></a>
                </td>
            </tr>
        )
    }
}
AuthorItem.contextType = MyContext;