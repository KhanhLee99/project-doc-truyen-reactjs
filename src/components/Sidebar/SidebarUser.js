import React, { Component } from 'react'

export default class SidebarUser extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="treeview">
                            <a href="admin-info.html" className="treeview-active"> <i className="fa fa-info-circle" /> <span>Thông tin tài khoản</span> </a>
                        </li>
                        <li className="treeview">
                            <a href="admin-change-pw.html"><i className="fa fa-unlock-alt" /> <span>Đổi mật khẩu</span></a>
                        </li>
                        <li className="treeview">
                            <a href="login.html"><i className="fa fa-sign-out" /> <span>Đăng xuất</span></a>
                        </li>
                    </ul>
                </section>
            </aside>

        )
    }
}
