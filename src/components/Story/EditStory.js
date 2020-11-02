import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actFetchAuthorsRequest } from '../../actions/author';
import { actFetchCategoriesRequest } from '../../actions/category';
import { actEditStoryRequest, actGetStoryRequest, actFetchStoriesRequest } from '../../actions/story';
import { actFetchStoryCategoriesRequest } from '../../actions/story_categories';

class EditStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            author_id: '',
            status: '',
            description: '',
            path_image: '',
            categories: [],
            storyCategories: [],
            tmpCategoriesChecked: []
        }
        this.nameRef = React.createRef();
        this.author_idRef = React.createRef();
        this.statusRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.path_imageRef = React.createRef();
    }

    componentDidMount() {
        this.props.fetchAllAuthors();
        this.props.fetchCategories();
        let { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getStory(id);
            this.props.fetchStoryCategories(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.storyEditing && nextProps.storyCategories) {
            var { storyEditing } = nextProps;
            var { storyCategories } = nextProps;
            this.setState({
                id: storyEditing.id,
                name: storyEditing.name,
                author_id: storyEditing.author_id,
                status: storyEditing.status,
                description: storyEditing.description,
                path_image: storyEditing.path_image,
                storyCategories: storyCategories
            });
        }
    }

    renderAuthors = () => {
        if (this.props.authors.length > 0) {
            return this.props.authors.map((item, index) => {
                if (item.id === this.state.author_id) {
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
        if (this.state.storyCategories.length > 0) {
            for (let item of this.state.storyCategories) {
                this.state.tmpCategoriesChecked.push(item.id);
            }
        }
        if (this.props.categories.length > 0) {
            return this.props.categories.map((item, index) => {
                if (this.state.tmpCategoriesChecked.indexOf(item.id) !== -1) {
                    return (
                        <label><input checked type="checkbox" onChange={(e, id) => this.changeCheckBox(e, item.id)} value={item.id} id={item.id} />{item.name}</label>
                    )
                }
                else {
                    return (
                        <label><input type="checkbox" onChange={(e, id) => this.changeCheckBox(e, item.id)} value={item.id} id={item.id} />{item.name}</label>
                    )
                }

            })
        }
        else{
            return (
                <label>Loading</label>
            )
        }
    }

    changeCheckBox = (e, id) => {
        if (e.target.checked) {
            this.state.categories.push(id);
        }
        else {
            let index = this.findIndex(this.state.categories, id);
            this.state.categories.splice(index, 1);

        }
        alert(JSON.stringify(this.state.categories));
    }

    renderStatus = () => {
        if (this.state.status === 'updating') {
            return (
                <select ref={this.statusRef} name="status" id="status">
                    <option value="updating" selected>Đang cập nhật</option>
                    <option value="completed">Hoàn thành</option>
                </select>
            )
        }
        else {
            return (
                <select ref={this.statusRef} name="status" id="status">
                    <option value="updating">Đang cập nhật</option>
                    <option value="completed" selected>Hoàn thành</option>
                </select>
            )
        }

    }

    editClick = (e) => {
        e.preventDefault();
        let { history } = this.props;
        let story = {
            id: this.state.id,
            name: this.nameRef.current.value,
            author_id: this.author_idRef.current.value,
            status: this.statusRef.current.value,
            description: this.descriptionRef.current.value,
            path_image: this.path_imageRef.current.value,
        }
        this.props.editStory(story);
        this.props.fetchStories();
        alert('Đã sửa thành công');
        history.goBack();
    }

    render() {
        console.log(this.state);
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>SỬA THÔNG TIN TRUYỆN</h2>
                    <div className="hr1" />

                    <label htmlFor="name">Tên truyện</label>
                    <input ref={this.nameRef} type="text" name="name" id="name" defaultValue={this.state.name} />

                    <label htmlFor="category">Chuyên mục</label>
                    <div className="multiselect">
                        <div className="selectBox">
                            <select>
                                <option>--- Chọn chuyên mục ---</option>
                            </select>
                            <div className="overSelect"></div>
                        </div>
                        <div id="checkboxes">
                            {this.renderCategories()}
                        </div>
                    </div>

                    <label htmlFor="author">Tác giả</label>
                    <select ref={this.author_idRef} name="author" id="author">
                        {this.renderAuthors()}
                    </select>

                    <label htmlFor="category">Tình trạng</label>
                    {this.renderStatus()}

                    <label htmlFor="description">Mô tả ngắn</label>
                    <textarea ref={this.descriptionRef} name="description" id="description" defaultValue={this.state.description} />

                    <label htmlFor="path_image">Đường dẫn ảnh đại diện</label>
                    <input ref={this.path_imageRef} type="text" name="path_image" id="path_image" defaultValue={this.state.path_image} />
                    <input type="file" name="file" id="file" />

                    <button onClick={(e) => this.editClick(e)} >Chỉnh sửa</button>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        storyEditing: state.storyEditing,
        categories: state.categories,
        authors: state.authors,
        storyCategories: state.storyCategories,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllAuthors: () => {
            dispatch(actFetchAuthorsRequest())
        },
        fetchCategories: () => {
            dispatch(actFetchCategoriesRequest())
        },
        getStory: (id) => {
            dispatch(actGetStoryRequest(id))
        },
        editStory: (story) => {
            dispatch(actEditStoryRequest(story))
        },
        fetchStories: () => {
            dispatch(actFetchStoriesRequest())
        },
        fetchStoryCategories: (id) => {
            dispatch(actFetchStoryCategoriesRequest(id))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditStory)

