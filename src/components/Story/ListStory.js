import React, { Component } from 'react';
import Axios from 'axios';


class ListStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listStory: []
        }
    }



    componentDidMount() {
        Axios.get('http://127.0.0.1:8000/api/stories').then((response) => {
            this.setState({
                listStory: response.data
            });
            console.log(response);
        })
    }
    
    render() {

        const listStory = this.state.listStory.map((story, index) =>{
            return <Story author_id={story.author_id} name={story.name}/>
        })

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
                                {listStory}
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có {this.state.listStory.length} bản ghi)</div>
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

class Story extends Component {
    render() {
        return (
            <tr>
                <td scope="row">1</td>
                <td><a href="list-chapter.html">{this.props.name}</a></td>
                <td>{this.props.author_id}</td>
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
        );
    }
}

export default ListStory;
