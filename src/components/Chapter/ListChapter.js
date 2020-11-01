import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actGetAuthorByStoryIdRequest } from '../../actions/author'
import { actFetchChaptersRequest } from '../../actions/chapter'
import { actGetStoryRequest } from '../../actions/story'
import { actFetchStoryCategoriesRequest } from '../../actions/story_categories'
import Categories from './Categories'
import ChapterItem from './ChapterItem'
import Pagination from './Pagination'
import Search from './Search'

class ListChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            story: {},
            author: {},
            // categories: []
        }
    }
    componentDidMount() {
       
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.setState({
                id: id
            })
            this.props.getStory(id);
            // this.props.getAuthorByStoryId(id);
            this.props.fetchStoryCategories(id);
            this.props.fetchChapters(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.storyEditing) {
            var { storyEditing } = nextProps;
            // var { categories } = nextProps;
            // var { authorEditing } = nextProps;
            this.setState({
                story: storyEditing,
                // author: authorEditing,
                // categories: categories
            });
        }
    }

    render() {
        // console.log(this.state.categories)

        const listChapter = this.props.chapters.map((item, index) => {
            return (
                <ChapterItem key={index} chapter={item} stt={index + 1} />
            )
        })
        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <div className="detail-story fl-left">
                        <img src={this.state.story.path_image} className="story-img fl-left" />
                        <span><b className="story-name">{this.state.story.name}</b>
                        {/* ( <a href className="story-author">{this.state.author.name}</a>  ) */}
                        </span>
                        <Categories />
                    </div>
                    <Search id={this.state.id} />
                    <div className="list">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên chương</th>
                                    <th>Số trang</th>
                                    <th>Ngày đăng</th>
                                    <th>Cập nhật</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listChapter}
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có {this.props.chapters.length} bản ghi)</div>
                    <Pagination />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        storyEditing: state.storyEditing,
        authorEditing: state.authorEditing,
        chapters: state.chapters,
        // storyCategories: state.storyCategories,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStory: (id) => {
            dispatch(actGetStoryRequest(id))
        },
        getAuthorByStoryId: (id) => {
            dispatch(actGetAuthorByStoryIdRequest(id))
        },
        fetchChapters: (story_id) => {
            dispatch(actFetchChaptersRequest(story_id))
        },
        fetchStoryCategories: (id) => {
            dispatch(actFetchStoryCategoriesRequest(id))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListChapter)