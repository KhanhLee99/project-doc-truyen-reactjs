import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actEditCategoryRequest, actGetCategoryRequest } from '../../actions/category';
import showAlert from '../../utils/showAlert';

class EditCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            description: ""
        }
        this.nameRef = React.createRef();
        this.descriptionRef = React.createRef();
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getCategory(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.categoryEditing) {
            var { categoryEditing } = nextProps;
            this.setState({
                id: categoryEditing.id,
                name: categoryEditing.name,
                description: categoryEditing.description,
            });
        }
    }
    editClick = (e) => {
        e.preventDefault();
        if (this.nameRef.current.value === "") {
            showAlert("Không được để trống tên chuyên mục", "warning");
        }
        else {
            if (window.confirm('Bạn có chắc muốn sửa ?')) {
                let { history } = this.props;
                let categoryEdit = {
                    id: this.state.id,
                    name: this.nameRef.current.value,
                    description: this.descriptionRef.current.value
                }

                this.props.editCategory(categoryEdit);
                showAlert("Đã sửa thông tin chuyên mục thành công", "success");
                history.push('/category');
            }
        }

    }
    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI CHUYÊN MỤC</h2>
                    <div className="hr1" />
                    <label htmlFor="name">Tên chuyên mục</label>
                    <input type="text" name="name" id="name" ref={this.nameRef} defaultValue={this.state.name} />

                    <label htmlFor="description">Mô tả ngắn</label>
                    <textarea name="description" id="description" ref={this.descriptionRef} defaultValue={this.state.description} />

                    <button onClick={(e) => this.editClick(e)}>Chỉnh sửa</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        categoryEditing: state.categoryEditing
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCategory: (id) => {
            dispatch(actGetCategoryRequest(id))
        },
        editCategory: (category) => {
            dispatch(actEditCategoryRequest(category))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)