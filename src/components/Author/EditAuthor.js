import React, { Component } from 'react'
import Axios from 'axios';

import MyContext from '../../myContext';

class EditAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
        this.nameRef = React.createRef();
    }

    changeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    editClick = (e, id) => { 
        e.preventDefault(); 
        let authorEdit = {
            name: this.nameRef.current.value,
            description: this.state.description
        }
        Axios.put('http://127.0.0.1:8000/api/author/'+id, authorEdit).then((responsive) => {
            this.setState({
                    description: ""
            });
            alert('Da sua thanh cong')
        })
    }
    
    

    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>SỬA THÔNG TIN TÁC GIẢ</h2>
                    <div className="hr1" />
                    <form>
                        <label htmlFor="name">Tên tác giả</label>
                        <input ref={this.nameRef} type="text" name="name" id="name" defaultValue={this.context.authorEdit.name} />

                        <label htmlFor="description">Mô tả ngắn</label>
                        <textarea onChange={(e) => this.changeDescription(e)} name="description" id="description" defaultValue={this.context.authorEdit.description} />

                        <button onClick={(e, id) => this.editClick(e, this.context.authorEdit.id)} >Chỉnh sửa</button>
                    </form>
                </div>
            </div>
        )
    }
}
EditAuthor.contextType = MyContext;
export default EditAuthor;




