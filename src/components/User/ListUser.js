import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { actFetchUsersRequest } from '../../actions/users';
import UserItem from './UserItem';
import Pagination from './Pagination';

class ListUser extends Component {
    
    componentDidMount() {
        this.props.fetchUsers();
    }
    
    render() {

        const listUser = this.props.users.map((item, index) => {
            return <UserItem stt={index+1} user={item} key={index}/>
        })

        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH THÀNH VIÊN</h2>
                    <div className="hr" />
                    <Search/>
                    <div className="list">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên thành viên</th>
                                    <th>Email</th>
                                    <th>Chức vụ</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUser}
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có {this.props.users.length} bản ghi)</div>
                    <Pagination/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUsers: (users) => {
            dispatch(actFetchUsersRequest(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListUser)







