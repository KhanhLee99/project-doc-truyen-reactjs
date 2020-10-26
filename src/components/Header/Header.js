import React, { Component } from 'react'
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";

export default class Header extends Component {
    click = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <header className="main-header">
                <Link to="dashboard.html" className="logo"> <span className="logo-lg">ADMIN</span> </Link>
                <nav className="navbar navbar-static-top" role="navigation">
                    <Link to="http://www.google.com" className="sidebar-toggle" data-toggle="offcanvas" role="button" />
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu"> <Link onClick={(e) => this.click(e)} to="http://www.google.com" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="dist\img\ava.jpg" className="user-image" alt="User Image" /> <span className="hidden-xs">levietkhanh</span> </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="user-footer">
                                <Link to="admin-info.html">Thông tin cá nhân</Link>
                            </li>
                            <li className="user-footer">
                                <Link to="login.html">Thoát</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
