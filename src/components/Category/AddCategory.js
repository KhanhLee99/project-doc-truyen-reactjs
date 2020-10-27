import Axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../../myContext';

class AddCategory extends Component {

    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    addClick = () => {

        if (this.nameRef.current.value === "") {
            alert("Khong de trong ten Chuyen Muc!");
        }
        else {
            let newCategory = {
                name: this.nameRef.current.value,
                description: this.descriptionRef.current.value
            }
            Axios.post('http://127.0.0.1:8000/api/category/add', newCategory).then(() => {
                alert('Da them thanh cong!');
                this.context.loadCategory();
            })
        }
    }



    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI CHUYÊN MỤC</h2>
                    <div className="hr1" />
                    {/* <form action> */}

                    <label htmlFor="name">Tên chuyên mục</label>
                    <input ref={this.nameRef} type="text" name="name" id="name" />
                    <label htmlFor="description">Mô tả ngắn</label>
                    <textarea ref={this.descriptionRef} name="description" id="description" defaultValue={""} />
                    <button onClick={() => this.addClick()}>Thêm mới</button>
                    {/* </form> */}
                </div>
            </div>

        );
    }
}

AddCategory.contextType = MyContext;
export default AddCategory;
