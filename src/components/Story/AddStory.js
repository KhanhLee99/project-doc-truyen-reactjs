import React, { Component } from 'react';
import Axios from 'axios';
import MyContext from '../../myContext';


class AddStory extends Component {

    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.author_idRef = React.createRef();
        this.statusRef = React.createRef();
        this.descriptionRef = React.createRef();
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
        if(this.nameRef.current.value===''){
            alert('Khong de trong ten Truyen!');
        }
        else{
            let newStory = {
                name: this.nameRef.current.value,
                author_id: this.author_idRef.current.value,
                status: this.statusRef.current.value,
                description: this.descriptionRef.current.value
            }
            Axios.post('http://127.0.0.1:8000/api/story/add', newStory).then(() => {
                alert('Da them thanh cong');
                this.context.loadStory();
            })
        }
        
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI TRUYỆN</h2>
                    <div className="hr1" />
                    <form action>
                        <label htmlFor="name">Tên truyện</label>
                        <input ref={this.nameRef} type="text" name="name" id="name" />
                        {/* <label htmlFor="category">Chuyên mục</label>
                        <select name="category" id="category">
                            <option value>--- Chọn chuyên mục ---</option>
                            <option value>Chuyên mục 1</option>
                            <option value>Chuyên mục 2</option>
                        </select> */}
                        <label htmlFor="author">Tác giả</label>
                        <select ref={this.author_idRef} name="author" id="author">
                            <option value>--- Chọn tác giả ---</option>
                            <option value="1">Tác giả 1</option>
                            <option value="2">Tác giả 2</option>
                        </select>
                        <label htmlFor="category">Tình trạng</label>
                        <select ref={this.statusRef}  name="status" id="status">
                            <option value>--- Chọn tình trạng truyện ---</option>
                            <option value ="1" selected>Đang cập nhật</option>
                            <option value ="2">Hoàn thành</option>
                        </select>
                        <label htmlFor="description">Mô tả ngắn</label>
                        <textarea ref={this.descriptionRef}  name="description" id="description" />
                        <label htmlFor="file">Ảnh đại diện</label>
                        <input type="file" name="file" id="file" />
                        <button onClick={() => this.addClick()} >Thêm mới</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddStory;
AddStory.contextType = MyContext;
