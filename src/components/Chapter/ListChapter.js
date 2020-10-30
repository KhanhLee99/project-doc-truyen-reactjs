import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actGetAuthorByStoryIdRequest } from '../../actions/author'
import { actGetStoryRequest } from '../../actions/story'
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
            this.props.getAuthorByStoryId(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.storyEditing && nextProps.authorEditing) {
            var { storyEditing } = nextProps;
            var { authorEditing } = nextProps;
            this.setState({
                story: storyEditing,
                author: authorEditing
            });
        }
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <div className="detail-story fl-left">
                        <img src={this.state.story.path_image} className="story-img fl-left" />
                        <span><b className="story-name">{this.state.story.name}</b>( <a href className="story-author">{this.state.author.name}</a>  )</span>
                        <Categories />
                    </div>
                    <Search id = {this.state.id}/>
                    <div className="list">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên mục</th>
                                    <th>Tên chương</th>
                                    <th>Người đăng</th>
                                    <th>Ngày đăng</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ChapterItem />
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có 10 bản ghi)</div>
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListChapter)