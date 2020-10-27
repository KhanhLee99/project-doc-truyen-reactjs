import React, { Component } from 'react'
import Axios from 'axios';
import {
    BrowserRouter as Route,
    Link, Redirect
} from "react-router-dom";
import MyContext from '../../myContext';

class EditAuthor extends Component {
    constructor(props) {
        super(props);
        
        this.nameRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    editClick = (e, id) => {
        e.preventDefault();
        let authorEdit = {
            name: this.nameRef.current.value,
            description: this.descriptionRef.current.value
        }
        Axios.put('http://127.0.0.1:8000/api/author/' + id, authorEdit).then((responsive) => {
            alert('Đã sửa thành công');
            this.context.loadAuthor();
            this.context.falseRedirect();
        })
    }

    render() {
        if (!this.context.isRedirect) {
            return (
                <Redirect to='/authors' />
            )
        }
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>SỬA THÔNG TIN TÁC GIẢ</h2>
                    <div className="hr1" />
                    <form>
                        <label htmlFor="name">Tên tác giả</label>
                        <input ref={this.nameRef} type="text" name="name" id="name" defaultValue={this.context.authorEdit.name} />

                        <label htmlFor="description">Mô tả ngắn</label>
                        <textarea ref={this.descriptionRef} name="description" id="description" defaultValue={this.context.authorEdit.description} />

                        <button onClick={(e, id) => this.editClick(e, this.context.authorEdit.id)} >Chỉnh sửa</button>
                    </form>
                </div>
            </div>
        )
    }
}
EditAuthor.contextType = MyContext;
export default EditAuthor;

{/* <input ref={(input) => { this.name = input }} type="text" name="name" id="name" defaultValue={this.context.authorEdit.name} /> */ }
// this.name.value
{/* <textarea  ref={(input) => { this.description = input }} name="description" id="description" defaultValue={this.context.authorEdit.description} /> */ }

