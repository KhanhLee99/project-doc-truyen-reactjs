import React, { Component } from 'react';
import Axios from 'axios';
import MyContext from '../../myContext';


class ListStory extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         listStory: []
    //     }
    // }



    // componentDidMount() {
    //     Axios.get('http://127.0.0.1:8000/api/stories').then((response) => {
    //         this.setState({
    //             listStory: response.data
    //         });
    //         console.log(response);
    //     })
    // }

    render() {

        const listStory = this.context.listStory.map((item, index) =>{
            return <StoryItem stt={index+1} story={item} key={index}/>
        })

        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH TRUYỆN</h2>
                    <div className="hr" />
                    <div className="form-search fl-right">
                        <a href="/story/add" id="add-category" className="fl-left">Thêm mới</a>
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
                    <div className="num-record">(Có {this.context.listStory.length} bản ghi)</div>
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

ListStory.contextType = MyContext;

class StoryItem extends Component {

    deleteClick = (e, id) => {
        e.preventDefault();
        if(window.confirm('Ban co chac muon xoa?')){
            Axios.delete('http://127.0.0.1:8000/api/story/' +id).then((response) => {
                this.context.loadStory();
            })
        }
    }
    

    render() {

        let {story} = this.props;

        return (
            <tr>
                <td scope="row">{this.props.stt}</td>
                <td><a href="list-chapter.html">{story.name}</a></td>
                <td>{story.author_id}</td>
                <td>15</td>
                <td>Đang cập nhật</td>
                <td>Admin</td>
                <td>3/4/2020</td>
                <td>
                    <a href="list-chapter.html" title="Xem chi tiết" className="edit"><i className="fa fa-file icon" /></a>
                    <a href='/' title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                    <a href='/' title="Xóa" className="delete" onClick={(e, id) => this.deleteClick(e, story.id)}><i className="fa fa-trash icon" /></a>
                </td>
            </tr>
        );
    }
}

StoryItem.contextType = MyContext;

export default ListStory;
