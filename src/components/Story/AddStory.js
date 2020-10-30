import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchAuthorsRequest } from '../../actions/author';
import { actFetchCategoriesRequest } from '../../actions/category';
import { actAddStoryRequest, actFetchStoriesRequest } from '../../actions/story';


class AddStory extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.author_idRef = React.createRef();
        this.statusRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.path_imageRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchAllAuthors();
        this.props.fetchCategories();
    }

    renderAuthors = () => {
        if (this.props.authors.length > 0) {
            return this.props.authors.map((item, index) => {
                if (item.name === "Đang cập nhật") {
                    return (
                        <option value={item.id} key={index} selected>{item.name}</option>
                    )
                }
                else {
                    return (
                        <option value={item.id} key={index}>{item.name}</option>
                    )
                }

            })
        }
    }

    renderCategories = () => {
        if (this.props.categories.length > 0) {
            return this.props.categories.map((item, index) => {
                return (
                    <option value={item.id} key={index}>{item.name}</option>
                )
            })
        }
    }

    
    addClick = (e) => {
        e.preventDefault();
        let { history } = this.props;
        let story = {
            name: this.nameRef.current.value,
            author_id: this.author_idRef.current.value,
            status: this.statusRef.current.value,
            description: this.descriptionRef.current.value,
            path_image: this.path_imageRef.current.value,
        }
        this.props.addStory(story);
        this.props.fetchStories();

        alert('Đã thêm thành công');
        history.push('/stories');
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI TRUYỆN</h2>
                    <div className="hr1" />

                    <label htmlFor="name">Tên truyện</label>
                    <input ref={this.nameRef} type="text" name="name" id="name" />

                    <label htmlFor="category">Chuyên mục</label>
                    <select name="category" id="category" multiple>
                        <option value>--- Chọn chuyên mục ---</option>
                        {this.renderCategories()}
                    </select>

                    <label htmlFor="author">Tác giả</label>
                    <select ref={this.author_idRef} name="author" id="author">
                        {this.renderAuthors()}
                    </select>

                    <label htmlFor="category">Tình trạng</label>
                    <select ref={this.statusRef} name="status" id="status">
                        <option value="updating" selected>Đang cập nhật</option>
                        <option value="completed">Hoàn thành</option>
                    </select>

                    <label htmlFor="description">Mô tả ngắn</label>
                    <textarea ref={this.descriptionRef} name="description" id="description" />

                    <label htmlFor="path_image">Đường dẫn ảnh đại diện</label>
                    <input ref={this.path_imageRef} type="text" name="path_image" id="path_image" />
                    {/* <input type="file" name="file" id="file" /> */}

                    <button onClick={(e) => this.addClick(e)} >Thêm mới</button>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        authors: state.authors,
        categories: state.categories,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchAllAuthors: () => {
            dispatch(actFetchAuthorsRequest())
        },
        fetchCategories: () => {
            dispatch(actFetchCategoriesRequest())
        },
        addStory: (story) => {
            dispatch(actAddStoryRequest(story))
        },
        fetchStories: () => {
            dispatch(actFetchStoriesRequest())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddStory)
