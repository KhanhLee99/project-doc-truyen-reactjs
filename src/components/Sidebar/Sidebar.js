import React, { Component } from 'react'
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="treeview">
                            <a href="/home" className="treeview-name"> <i className="fa fa-home" /> <span>Dashboard</span> </a>
                        </li>
                        <li className="treeview">
                            <a href='/' className="treeview-name"><i className="fa fa-th-large" /> <span>Chuyên mục</span> <i className="fa fa-angle-left pull-right" />
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="/category/add">Thêm mới</a></li>
                                <li><a href="/categories">Danh sách chuyên mục</a></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href='/' className="treeview-name"><i className="fa fa-pencil-square-o" /> <span>Tác giả</span> <i className="fa fa-angle-left pull-right" />
                            </a>
                            <ul className="treeview-menu">
                                <li><Link to="/author/add">Thêm mới</Link></li>
                                <li><Link to="/authors">Danh sách tác giả</Link></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href='/' className="treeview-name"><i className="fa fa-book" /> <span>Truyện</span> <i className="fa fa-angle-left pull-right" /> </a>
                            <ul className="treeview-menu">
                                <li><a href="/story/add">Thêm mới</a></li>
                                <li><a href="/stories">Danh sách truyện</a></li>
                            </ul>
                        </li>
                        <li className="treeview"> <a href="/users" className="treeview-active treeview-name"><i className="fa fa-users"> </i> <span>Thành viên</span></a></li>
                    </ul>
                </section>
            </aside>

        )
    }
}
