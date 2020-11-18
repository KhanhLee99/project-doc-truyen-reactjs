import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Route,
    Link,
    Redirect,
} from "react-router-dom";
import { isLoginFalse } from '../../actions/login';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isLogin: true
        // }
    }

    logoutClick = (e) => {
        localStorage.clear();
        this.props.setLoginFalse();
        // this.setState({
        //     isLogin: null
        // })
    }
    render() {
        var sidebar = (this.props.isLogin) ? (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="treeview">
                            <a href="/dashboard" className="treeview-name"> <i className="fa fa-home" /> <span>Dashboard</span> </a>
                        </li>
                        <li className="treeview">
                            <a href='' className="treeview-name"><i className="fa fa-th-large" /> <span>Chuyên mục</span> <i className="fa fa-angle-left pull-right" />
                            </a>
                            <ul className="treeview-menu">
                                <li><Link to="/category/add">Thêm mới</Link></li>
                                <li><Link to="/categories">Danh sách chuyên mục</Link></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href='/authors' className="treeview-name"><i className="fa fa-pencil-square-o" /> <span>Tác giả</span> <i className="fa fa-angle-left pull-right" />
                            </a>
                            <ul className="treeview-menu">
                                <li><Link to="/author/add">Thêm mới</Link></li>
                                <li><Link to="/authors">Danh sách tác giả</Link></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href='/stories' className="treeview-name"><i className="fa fa-book" /> <span>Truyện</span> <i className="fa fa-angle-left pull-right" /> </a>
                            <ul className="treeview-menu">
                                <li><Link to="/story/add">Thêm mới</Link></li>
                                <li><Link to="/stories">Danh sách truyện</Link></li>
                            </ul>
                        </li>
                        <li className="treeview"> <Link to="/users" className=" treeview-name"><i className="fa fa-users"> </i> <span>Thành viên</span></Link></li>
                        <li className="treeview">
                            <Link to="/admin/edit" className="treeview-name"> <i className="fa fa-info-circle" /> <span>Thông tin tài khoản</span> </Link>
                        </li>
                        <li className="treeview">
                            <Link to="/" className="treeview-name"><i className="fa fa-unlock-alt" /> <span>Đổi mật khẩu</span></Link>
                        </li>
                        <li className="treeview">
                            <Link to="/" onClick={(e) => this.logoutClick(e)}><i className="fa fa-sign-out" /> <span>Đăng xuất</span></Link>
                        </li>
                    </ul>
                </section>
            </aside>
        ) : (null)
        return (
            <>
                {sidebar}
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoginFalse: (isLogin) => {
            dispatch(isLoginFalse(isLogin))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)