import React, { Component } from 'react';

class ListCatelories extends Component {
    render() {
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
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Anime</td>
                                    <td>Không có</td>
                                    <td>
                                        <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                                        <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Anime</td>
                                    <td>Không có</td>
                                    <td>
                                        <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                                        <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Anime</td>
                                    <td>Không có</td>
                                    <td>
                                        <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                                        <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Anime</td>
                                    <td>Không có</td>
                                    <td>
                                        <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                                        <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Anime</td>
                                    <td>Không có</td>
                                    <td>
                                        <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                                        <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Anime</td>
                                    <td>Không có</td>
                                    <td>
                                        <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                                        <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Anime</td>
                                    <td>Không có</td>
                                    <td>
                                        <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                                        <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">1</td>
                                    <td>Anime</td>
                                    <td>Không có</td>
                                    <td>
                                        <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                                        <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có 10 bản ghi)</div>
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

export default ListCatelories;