import React, { Component } from 'react';
import Axios from 'axios';

class ListCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listCategory: []
        }
    }

    componentDidMount() {
        Axios.get('http://127.0.0.1:8000/api/categories').then((responsive) => {
            this.setState({
                listCategory: responsive.data
            })
        })
    }
    
    render() {

        const listCategory = this.state.listCategory.map((item, index) => {
            return <Category stt={index+1} cate={item} key={index}/>
        })

        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH CHUYÊN MỤC</h2>
                    <div className="hr" />
                    <div className="form-search fl-right">
                        <a href="add-category.html" id="add-category" className="fl-left">Thêm mới</a>
                        <input type="submit" defaultValue="Tìm kiếm" />
                        <input type="text" />
                    </div>
                    <div className="list">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên chuyên mục</th>
                                    <th>Chuyên mục cha</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCategory}
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có {this.state.listCategory.length} bản ghi)</div>
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

        );
    }
}

class Category extends Component {
    render() {
        let cate = this.props.cate;
        return (
            <tr>
                <td scope="row">{this.props.stt}</td>
                <td>{cate.name}</td>
                <td>Không có</td>
                <td>
                    <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                    <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                </td>
            </tr>
        );
    }
}

export default ListCategory;
