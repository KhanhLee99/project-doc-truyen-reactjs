import React, { Component } from 'react';
import Axios from 'axios';


class AddStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newStory: {
                name: '',
                author_id: '',
                status: '',
                description: '',
                // path_img: ''
            }
        }
    }

    changeName = (e) => {
        this.setState({
            newStory: {
                name: e.target.value,
                author_id: this.state.newStory.author_id,
                status: this.state.newStory.status,
                description: this.state.newStory.description,
                // path_img: this.state.newStory.path_img
            }
        })
    }

    
    changeAuthor = (e) => {
        this.setState({
            newStory: {
                name: this.state.newStory.name,
                author_id: e.target.value,
                status: this.state.newStory.status,
                description: this.state.newStory.description,
                // path_img: this.state.newStory.path_img
            }
        })
    }
    changeStatus = (e) => {
        this.setState({
            newStory: {
                name: this.state.newStory.name,
                author_id: this.state.newStory.author_id,
                status: e.target.value,
                description: this.state.newStory.description,
                // path_img: this.state.newStory.path_img
            }
        })
    }
    changeDescription = (e) => {
        this.setState({
            newStory: {
                name: this.state.newStory.name,
                author_id: this.state.newStory.author_id,
                status: this.state.newStory.status,
                description: e.target.value,
                // path_img: this.state.newStory.path_img
            }
        })
    }
    // changePathImg = (e) => {
    //     this.setState({
    //         newStory: {
    //             name: this.state.newStory.name,
    //             author_id: this.state.newStory.author_id,
    //             status: this.state.newStory.status,
    //             description: this.state.newStory.description,
    //             path_img: e.target.value
    //         }
    //     })
    // }

    addClick = () =>{
        Axios.post('http://127.0.0.1:8000/api/story/add', this.state.newStory).then((responsive) => {
            this.setState({
                
                newStory: {
                    name: '',
                    author_id: '',
                    status: '',
                    description: '',
                    // path_img: ''
                }
            });
            alert('Da them thanh cong');
        })
    }
    


    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI TRUYỆN</h2>
                    <div className="hr1" />
                    <form action>
                        <label htmlFor="name">Tên truyện</label>
                        <input onChange={(e) => this.changeName(e)} type="text" name="name" id="name" />
                        {/* <label htmlFor="category">Chuyên mục</label>
                        <select name="category" id="category">
                            <option value>--- Chọn chuyên mục ---</option>
                            <option value>Chuyên mục 1</option>
                            <option value>Chuyên mục 2</option>
                        </select> */}
                        <label htmlFor="author">Tác giả</label>
                        <select onChange={(e) => this.changeAuthor(e)} name="author" id="author">
                            <option value>--- Chọn tác giả ---</option>
                            <option value="1">Tác giả 1</option>
                            <option value="2">Tác giả 2</option>
                        </select>
                        <label htmlFor="category">Tình trạng</label>
                        <select onChange={(e) => this.changeStatus(e)}  name="status" id="status">
                            <option value>--- Chọn tình trạng truyện ---</option>
                            <option value ="1" selected>Đang cập nhật</option>
                            <option value ="2">Hoàn thành</option>
                        </select>
                        <label htmlFor="description">Mô tả ngắn</label>
                        <textarea onChange={(e) => this.changeDescription(e)}  name="description" id="description" />
                        <label htmlFor="file">Ảnh đại diện</label>
                        <input onChange={(e) => this.changePathImg(e)} type="file" name="file" id="file" />
                        <button onClick={() => this.addClick()} >Thêm mới</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddStory;
