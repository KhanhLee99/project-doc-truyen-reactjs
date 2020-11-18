import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actFetchUsersRequest, actSearchhUsersRequest } from '../../actions/users';

class Search extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
    }

    searchClick = () => {
        let name = this.nameRef.current.value;
        (name === "") ? this.props.fetchUsers() : this.props.searchUsers(name);
    }

    isChage = () => {
        let name = this.nameRef.current.value;
        (name === "") ? this.props.fetchUsers() : this.props.searchUsers(name);
    }

    render() {
        return (
            <div className="form-search fl-right">
                {/* <Link to id="add-category" className="fl-left">Thêm mới</Link> */}
                <input type="submit" onClick={() => this.searchClick()} value="Tìm kiếm" />
                <input type="text" ref={this.nameRef} onChange={() => this.isChage()} placeholder={'Nhập tên...'} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (users) => {
            dispatch(actFetchUsersRequest(users))
        },
        searchUsers: (users) => {
            dispatch(actSearchhUsersRequest(users))
        }
    }
}
export default connect(null, mapDispatchToProps)(Search)