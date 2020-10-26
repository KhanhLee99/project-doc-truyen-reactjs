import React, { Component } from 'react'

export default class SidebarUser extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="treeview">
                            <Link to="admin-info.html" className="treeview-active"> <i className="fa fa-info-circle" /> <span>Thông tin tài khoản</span> </Link>
                        </li>
                        <li className="treeview">
                            <Link to="admin-change-pw.html"><i className="fa fa-unlock-alt" /> <span>Đổi mật khẩu</span></Link>
                        </li>
                        <li className="treeview">
                            <Link to="login.html"><i className="fa fa-sign-out" /> <span>Đăng xuất</span></Link>
                        </li>
                    </ul>
                </section>
            </aside>

        )
    }
}
