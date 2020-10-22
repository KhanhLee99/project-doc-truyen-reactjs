import React, { Component } from 'react'


export default class ListStory extends Component{
    
    render() {
      return (
  
        <div className="content-wrapper">
        <div className="main-list">
          <h2 className="fl-left">DANH SÁCH TRUYỆN</h2>
          <div className="hr" />
          <div className="form-search fl-right">
            <a href="add-story.html" id="add-category" className="fl-left">Thêm mới</a>
            <input type="submit" defaultValue="Tìm kiếm" />
            <input type="text" />
          </div>
          <div className="list">
            <table className="content-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên truyện</th>
                  <th>Tác giả</th>
                  <th>Số chương</th>
                  <th>Trạng thái</th>
                  <th>Người thêm</th>
                  <th>Ngày đăng</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td><a href="list-chapter.html">Tây Du Ký</a></td>
                  <td>Ngô Thừa Ân</td>
                  <td>15</td>
                  <td>Đang cập nhật</td>
                  <td>Admin</td>
                  <td>3/4/2020</td>
                  <td>
                    <a href="list-chapter.html" title="Xem chi tiết" className="edit"><i className="fa fa-file icon" /></a>
                    <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                    <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                  </td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>Tây Du Ký</td>
                  <td>Ngô Thừa Ân</td>
                  <td>15</td>
                  <td>Đang cập nhật</td>
                  <td>Admin</td>
                  <td>3/4/2020</td>
                  <td>
                    <a href title="Xem chi tiết" className="edit"><i className="fa fa-file icon" /></a>
                    <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                    <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                  </td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>Tây Du Ký</td>
                  <td>Ngô Thừa Ân</td>
                  <td>15</td>
                  <td>Đang cập nhật</td>
                  <td>Admin</td>
                  <td>3/4/2020</td>
                  <td>
                    <a href title="Xem chi tiết" className="edit"><i className="fa fa-file icon" /></a>
                    <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                    <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                  </td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>Tây Du Ký</td>
                  <td>Ngô Thừa Ân</td>
                  <td>15</td>
                  <td>Đang cập nhật</td>
                  <td>Admin</td>
                  <td>3/4/2020</td>
                  <td>
                    <a href title="Xem chi tiết" className="edit"><i className="fa fa-file icon" /></a>
                    <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                    <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                  </td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>Tây Du Ký</td>
                  <td>Ngô Thừa Ân</td>
                  <td>15</td>
                  <td>Đang cập nhật</td>
                  <td>Admin</td>
                  <td>3/4/2020</td>
                  <td>
                    <a href title="Xem chi tiết" className="edit"><i className="fa fa-file icon" /></a>
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
  };