import React, { Component } from 'react'
import Axios from 'axios';


export default class AddAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAuthor: {
                name: "",
                description: ""
            }
        }
    }

    changeName = (e) => {
        this.setState({
            newAuthor: {
                name: e.target.value,
                description: this.state.newAuthor.description
            }
        })
    }
    changeDescription = (e) => {
        this.setState({
            newAuthor: {
                name: this.state.newAuthor.name,
                description: e.target.value
            }
        })
    }

    addClick = () => {
        // if (this.state.newAuthor.name == "" || this.state.newAuthor.description == "") {
        //     alert('Vui long nhap day du thong tin !!!');
        // }
        // else {
            Axios.post('http://127.0.0.1:8000/api/author/add', this.state.newAuthor).then((responsive) => {
                this.setState({
                    newAuthor: {
                        name: "",
                        description: ""
                    }
                });
                alert('Da them thanh cong')
            })
        // }

    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI TÁC GIẢ</h2>
                    <div className="hr1" />
                    <form action="#" method="POST">
                        <label htmlFor="name">Tên tác giả</label>
                        <input onChange={(e) => this.changeName(e)} type="text" name="name" id="name" defaultValue={this.state.newAuthor.name} />

                        <label htmlFor="description">Mô tả ngắn</label>
                        <textarea onChange={(e) => this.changeDescription(e)} name="description" id="description" defaultValue={this.state.newAuthor.description} />

                        <input onClick={() => this.addClick()} type="reset" value="Thêm mới" />
                    </form>
                </div>
            </div>

        )
    }
}
