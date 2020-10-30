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
    findIndex = (list, id) => {
        var result = -1;
        list.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        })
        return result;
    }
    getNameAuthor = (list, id) => {
        if (list.length > 0) {
            let name = (id === null) ? 'Đang cập nhật' : list[this.findIndex(list, id)].name;
            return name;
        }
        return 'Loading..';
    }
    render() {

        const listStory = this.props.stories.map((item, index) => {
            return <StoryItem stt={index + 1} story={item} key={index} author_name = {this.getNameAuthor(this.props.authors, item.author_id)} />
        })

        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH TRUYỆN</h2>
                    <div className="hr" />
                    <Search />
                    <div className="list">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên truyện</th>
                                    <th>Tác giả</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày đăng</th>
                                    <th>Cập nhật</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listStory}
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có {this.props.stories.length} bản ghi)</div>
                    <Pagination />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.stories,
        authors: state.authors,
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
