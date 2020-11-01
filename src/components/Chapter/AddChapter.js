import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actGetStoryRequest } from '../../actions/story'
import { actAddChapterRequest, actAddChapterImageRequest } from '../../actions/chapter'

class AddChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pages: 0,
            page: []
        }
        this.pagesRef = React.createRef();
        this.nameRef = React.createRef();
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            if (id) {
                this.setState({
                    id: id
                })
                this.props.getStory(id);
            }
        }
    }

    isChange = () => {
        this.setState({
            pages: this.pagesRef.current.value,
        })
    }

    changePath = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        var path = {
            stt: name,
            path_image: value
        }
        this.state.page = this.state.page.filter(x => (x.stt !== path.stt))
        this.state.page.push(path);
    }

    renderInput = () => {
        var inputs = [];
        if (this.state.pages > 0) {
            for (let i = 0; i < this.state.pages; i++) {
                inputs[i] = i;
            }
            return inputs.map((item, index) => {
                return (
                    <input key={index} type="text" name={item} id={item} placeholder={`Đường dẫn trang ${item}`} onChange={(e) => this.changePath(e)} />
                )
            })
        }
        return;
    }

    addClickChapter = (e) => {
        e.preventDefault();
        if (this.nameRef.current.value === '' || this.state.pages < 1 || this.state.page.length < 1) {
            alert('Error');
        }
        else {
            var chapter = {
                name: this.nameRef.current.value,
                pages: parseInt(this.pagesRef.current.value),
                story_id: this.props.storyEditing.id
            }
            if (window.confirm('Bạn có chắc muốn thêm ?')) {
                this.props.addChapter(chapter);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.chapterGetting) {
            var { chapterGetting } = nextProps;
            var { history } = this.props;
            for (let item of this.state.page) {
                var image = {
                    stt: parseInt(item.stt),
                    path_image: item.path_image,
                    chapter_id: chapterGetting.id
                }
                this.props.addChapterImage(image);
                history.push(`/story/${this.state.id}`);
            }
        }
    }

    render() {
        return (
            <div className="content-wrapper" >
                <div className="main-content">
                    <h2>THÊM MỚI CHƯƠNG ({this.props.storyEditing.name})</h2>
                    <div className="hr1" />
                    <label htmlFor="name">Tên chương</label>
                    <input type="text" name="name" id="name" ref={this.nameRef} />

                    <label htmlFor="pages">Số trang</label>
                    <input type="number" min="0" name="pages" id="pages" ref={this.pagesRef} onChange={() => this.isChange()} defaultValue={0} />

                    {this.renderInput()}

                    {/* <label htmlFor="file">Upload</label>
                        <input type="file" name="file" id="file" /> */}

                    <button onClick={(e) => this.addClickChapter(e)}>Thêm mới chương</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        storyEditing: state.storyEditing,
        chapterGetting: state.chapterGetting,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStory: (id) => {
            dispatch(actGetStoryRequest(id))
        },
        addChapter: (chapter) => {
            dispatch(actAddChapterRequest(chapter))
        },
        addChapterImage: (image) => {
            dispatch(actAddChapterImageRequest(image))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddChapter)