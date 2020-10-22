import Axios from 'axios';
import React, { Component } from 'react';

class AddCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newCategory: {
                name: '',
                description: '',
            }
        }
    }

    changeName = (e) => {
        this.setState({
            newCategory: {
                name: e.target.value,
                description: this.state.newCategory.description
            }
        })
    }

    changeDescription = (e) => {
        this.setState({
            newCategory: {
                name: this.state.newCategory.name,
                description: e.target.value
            }
        })
    }

    addClick = () =>{
        Axios.post('http://127.0.0.1:8000/api/category/add', this.state.newCategory).then(() => {
            this.setState({
                newCategory:{
                    name: '',
                    description: ''
                }
            });

            alert('Da them thanh cong!');
        })
    }

    

    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI CHUYÊN MỤC</h2>
                    <div className="hr1" />
                    <form action>
                        
                        <label htmlFor="name">Tên chuyên mục</label>
                        <input onChange={(e) => this.changeName(e)} type="text" name="name" id="name" />
                        <label htmlFor="description">Mô tả ngắn</label>
                        <textarea onChange={(e) => this.changeDescription(e)} name="description" id="description" defaultValue={""} />
                        <button onClick={() => this.addClick()} type="reset" value="Thêm mới">Thêm mới</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddCategory;
