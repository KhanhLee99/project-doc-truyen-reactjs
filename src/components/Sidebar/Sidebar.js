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
                            <Link to="/home" className="treeview-name treeview-active"> <i className="fa fa-home" /> <span>Dashboard</span> </Link>
                        </li>
                        <li className="treeview">
                            <Link to='/' className="treeview-name"><i className="fa fa-th-large" /> <span>Chuyên mục</span> <i className="fa fa-angle-left pull-right" />
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to="/category/add">Thêm mới</Link></li>
                                <li><Link to="/categories">Danh sách chuyên mục</Link></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <Link to='/' className="treeview-name"><i className="fa fa-pencil-square-o" /> <span>Tác giả</span> <i className="fa fa-angle-left pull-right" />
                            </Link>
                            <ul className="treeview-menu">
                                <li><Link to="/author/add">Thêm mới</Link></li>
                                <li><Link to="/authors">Danh sách tác giả</Link></li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <Link to='/' className="treeview-name"><i className="fa fa-book" /> <span>Truyện</span> <i className="fa fa-angle-left pull-right" /> </Link>
                            <ul className="treeview-menu">
                                <li><Link to="/story/add">Thêm mới</Link></li>
                                <li><Link to="/stories">Danh sách truyện</Link></li>
                            </ul>
                        </li>
                        <li className="treeview"> <Link to="/users" className=" treeview-name"><i className="fa fa-users"> </i> <span>Thành viên</span></Link></li>
                    </ul>
                </section>
            </aside>

        )
    }
}
