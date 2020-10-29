import React, { Component } from 'react';
import Search from './Search'
import { actFetchStoriesRequest } from '../../actions/story';
import { connect } from 'react-redux';
import StoryItem from './StoryItem';
import Pagination from './Pagination';
import { actFetchAuthorsRequest } from '../../actions/author';


class ListStory extends Component {

    componentDidMount() {
       this.props.fetchStories();
       this.props.fetchAllAuthors();
    }

    render() {

        const listStory = this.props.stories.map((item, index) =>{
            return <StoryItem stt={index+1} story={item} key={index}/>
        })

        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH TRUYỆN</h2>
                    <div className="hr" />
                    <Search/>
                    <div className="list">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên truyện</th>
                                    <th>Tác giả</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày đăng</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listStory}
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có {this.props.stories.length} bản ghi)</div>
                    <Pagination/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.stories
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchStories: () => {
            dispatch(actFetchStoriesRequest())
        },
        fetchAllAuthors: () => {
            dispatch(actFetchAuthorsRequest())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListStory)
