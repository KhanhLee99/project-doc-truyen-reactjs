import React, { Component } from 'react'
import Axios from 'axios';
import MyContext from '../../myContext';


export default class AddAuthor extends Component {
    constructor(props) {
        super(props);
        //khanh moi sua o day
        this.nameRef = React.createRef();
        this.descriptionRef = React.createRef();
    }


    addClick = () => {
        if (this.nameRef.current.value === "") {
            alert('Không để trống tên tác giả');
        }
        else {
            let newAuthor = {
                name: this.nameRef.current.value,
                description: this.descriptionRef.current.value
            }
            Axios.post('http://127.0.0.1:8000/api/author/add', newAuthor).then((responsive) => {
                alert('Da them thanh cong');
                this.context.loadAuthor();
            })
        }
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI TÁC GIẢ</h2>
                    <div className="hr1" />
                    <label htmlFor="name">Tên tác giả</label>
                    <input ref={this.nameRef} type="text" name="name" id="name" />

                    <label htmlFor="description">Mô tả ngắn</label>
                    <textarea ref={this.descriptionRef} name="description" id="description" />

                    <button onClick={() => this.addClick()} value="Thêm mới">Thêm mới</button>
                </div>
            </div>

        )
    }
}
AddAuthor.contextType = MyContext;
