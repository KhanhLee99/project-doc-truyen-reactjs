import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddCategoryRequest } from '../../actions/category';

class AddCategory extends Component {

    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    addClick = () => {
        if (this.nameRef.current.value === '') {
            alert('ko dc de trong')
        }
        else {
            let category = {
                name: this.nameRef.current.value,
                description: this.descriptionRef.current.value
            }
            let { history } = this.props;
            this.props.addCategory(category);
            alert('Da them thanh cong!');
            history.push('/categories');
        }
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI CHUYÊN MỤC</h2>
                    <div className="hr1" />
                    <label htmlFor="name">Tên chuyên mục</label>
                    <input type="text" name="name" id="name" ref={this.nameRef} />

                    <label htmlFor="description">Mô tả ngắn</label>
                    <textarea name="description" id="description" ref={this.descriptionRef} />

                    <button onClick={() => this.addClick()}>Thêm mới</button>
                </div>
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (category) => {
            dispatch(actAddCategoryRequest(category))
        }
    }
}
export default connect(null, mapDispatchToProps)(AddCategory)
