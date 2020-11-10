import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { actFetchAuthorsRequest } from '../../actions/author';
import { actDeleteStoryRequest } from '../../actions/story';
var moment = require('moment')
class StoryItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         authors: []
    //     }
    // }

    deleteClick = (e, id) => {
        e.preventDefault();
        if (window.confirm('Ban co chac muon xoa?')) {
            this.props.deleteStory(id);
        }
    }
    // findIndex = (list, id) => {
    //     var result = -1;
    //     list.forEach((item, index) => {
    //         if (item.id === id) {
    //             result = index;
    //         }
    //     })
    //     return result;
    // }
    // getNameAuthor = (list, id) => {
    //     if (list.length > 0) {
    //         let name = (id === null) ? 'Đang cập nhật' : list[this.findIndex(list, id)].name;
    //         return name;
    //     }
    //     return 'Loading..';
    // }

    // componentDidMount() {
    //     this.props.fetchAllAuthors();
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps && nextProps.authors) {
    //         var { authors } = nextProps;
    //         this.setState({
    //             authors: authors
    //         });
    //     }
    // }

    render() {
        var array = [1, 4, 2, 3, 1, 4, 2, 5, 4, 5, 1, 3, 2, 4 , 1];
        // $posts = Post::find([2,3]) // truyen vao mang id
        var arrFilter = array.filter((item, index) => array.indexOf(item) === index);
        console.log(arrFilter);
        let { story } = this.props;
        var status = (story.status === 'updating') ? 'Đang cập nhật' : 'Hoàn thành'
        return (
            <tr>
                <td scope="row">{this.props.stt}</td>
                <td><Link to={`story/${story.id}`}>{story.name}</Link></td>
                <td>{this.props.author_name}</td>
                <td>{status}</td>
                <td>{moment(story.created_at).format("L")}</td>
                <td>{moment(story.updated_at).format("L")}</td>
                <td>
                    <Link to="list-chapter.html" title="Xem chi tiết" className="edit"><i className="fa fa-file icon" /></Link>
                    <Link to={`story/${story.id}/edit`} title="Sửa" className="edit"><i className="fa fa-pencil icon" /></Link>
                    <Link to='/' title="Xóa" className="delete" onClick={(e, id) => this.deleteClick(e, story.id)}><i className="fa fa-trash icon" /></Link>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        authors: state.authors
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteStory: (id) => {
            dispatch(actDeleteStoryRequest(id))
        },
        // fetchAllAuthors: () => {
        //     dispatch(actFetchAuthorsRequest())
        // },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StoryItem)