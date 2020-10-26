import React, { Component } from 'react';
import Axios from 'axios';
import MyContext from '../../myContext';
import Search from './Search'
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";


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
                    <Search/>
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
                <td><Link to="list-chapter.html">{story.name}</Link></td>
                <td>{story.author_id}</td>
                <td>15</td>
                <td>Đang cập nhật</td>
                <td>Admin</td>
                <td>3/4/2020</td>
                <td>
                    <Link to="list-chapter.html" title="Xem chi tiết" className="edit"><i className="fa fa-file icon" /></Link>
                    <Link to='/' title="Sửa" className="edit"><i className="fa fa-pencil icon" /></Link>
                    <Link to='/' title="Xóa" className="delete" onClick={(e, id) => this.deleteClick(e, story.id)}><i className="fa fa-trash icon" /></Link>
                </td>
            </tr>
        );
    }
}

StoryItem.contextType = MyContext;

export default ListStory;
