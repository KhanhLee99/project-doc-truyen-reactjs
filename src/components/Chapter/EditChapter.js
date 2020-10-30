import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actAddChapterImageRequest, actGetChapterRequest } from '../../actions/chapter';
import { actEditImageRequest, actFetchImagesRequest } from '../../actions/image';
import { actGetStoryByChapterIdRequest } from '../../actions/story';

class EditChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            chapter: {},
            story: {},
            pages: 0,
            page: [],
            stt: [],
        }
        this.pagesRef = React.createRef();
        this.nameRef = React.createRef();
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getStoryByChapterId(id);
            this.props.getChapter(id);
            this.props.fetchImages(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.storyEditing && nextProps.chapterGetting && nextProps.images) {
            var { storyEditing, chapterGetting, images } = nextProps;
            this.setState({
                images: images,
                chapter: chapterGetting,
                story: storyEditing,
                pages: chapterGetting.pages
            })
        }
    }

    // isChange = () => {
    //     this.setState({
    //         pages: this.pagesRef.current.value,
    //     })
    // }
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
            if (this.state.images.length > 0) {
                this.state.images = this.state.images.sort(function(a, b) {
                    return a.stt - b.stt;
                })
                for (var image of this.state.images) {
                    this.state.stt.push(image.stt);
                }
                return inputs.map((item, index) => {
                    if (this.state.stt.indexOf(index) !== -1) {
                        return (
                            <>
                                <label htmlFor={item}>{`Đường dẫn trang ${item}`}</label>
                                <input key={index} type="text" name={item} id={item} placeholder={`Đường dẫn trang ${item}`} onChange={(e) => this.changePath(e)} defaultValue={this.state.images[index].path_image} />
                            </>
                        )
                    }
                    else {
                        return (
                            <>
                                <label htmlFor={item}>{`Đường dẫn trang ${item}`}</label>
                                <input key={index} type="text" name={item} id={item} placeholder={`Đường dẫn trang ${item}`} onChange={(e) => this.changePath(e)} />
                            </>
                        )
                    }
                })
            }
        }
        return;
    }

    saveClick = (e) => {
        e.preventDefault();
        if (this.state.page.length > 0) {
            for (var item of this.state.page) {
                let image = {
                    path_image: item.path_image,
                    stt: parseInt(item.stt),
                    chapter_id: this.state.chapter.id
                }
                if (this.state.stt.indexOf(parseInt(item.stt)) !== -1) {

                    this.props.editImage(image);
                }
                else {
                    this.props.addChapterImage(image);
                }
            }
            alert('ok');
        }
    }

    render() {
        return (
            <div className="content-wrapper" >
                <div className="main-content">
                    <h2>SỬA THÔNG TIN CHƯƠNG ({this.state.story.name})</h2>
                    <div className="hr1" />
                    <label htmlFor="name">Tên chương</label>
                    <input type="text" name="name" id="name" ref={this.nameRef} defaultValue={this.state.chapter.name} />

                    {this.renderInput()}

                    {/* <label htmlFor="file">Upload</label>
                        <input type="file" name="file" id="file" /> */}

                    <button onClick={(e) => this.saveClick(e)}>Lưu </button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        storyEditing: state.storyEditing,
        chapterGetting: state.chapterGetting,
        images: state.images,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStoryByChapterId: (id) => {
            dispatch(actGetStoryByChapterIdRequest(id))
        },
        getChapter: (id) => {
            dispatch(actGetChapterRequest(id))
        },
        fetchImages: (id) => {
            dispatch(actFetchImagesRequest(id))
        },
        editImage: (image) => {
            dispatch(actEditImageRequest(image))
        },
        addChapterImage: (image) => {
            dispatch(actAddChapterImageRequest(image))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditChapter)