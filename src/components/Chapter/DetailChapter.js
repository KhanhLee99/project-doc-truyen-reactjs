import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actGetStoryByChapterIdRequest } from '../../actions/story';
import { actGetChapterRequest } from '../../actions/chapter';
import { actFetchImagesRequest } from '../../actions/image';

class DetailChapter extends Component {
    
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getStoryByChapterId(id);
            this.props.getChapter(id);
            this.props.fetchImages(id);
        }
    }

    render() {
        const listImage = this.props.images.map((item, index) => {
            return (
                <img src={item.path_image} alt="" className="read" key={index} />
            )
        })
        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left uppercase">{this.props.storyEditing.name} ({this.props.chapterGetting.name})</h2>
                    <div className="hr" />
                    {listImage}
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailChapter)