import React, { Component } from 'react'

export default class Header extends Component {
    click = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <header className="main-header">
                <a href="dashboard.html" className="logo"> <span className="logo-lg">ADMIN</span> </a>
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="http://www.google.com" className="sidebar-toggle" data-toggle="offcanvas" role="button" />
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu"> <a onClick={(e) => this.click(e)} href="http://www.google.com" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="dist\img\ava.jpg" className="user-image" alt="User Image" /> <span className="hidden-xs">levietkhanh</span> </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown-menu">
                        <ul>
                            <li className="user-footer">
                                <a href="admin-info.html">Thông tin cá nhân</a>
                            </li>
                            <li className="user-footer">
                                <a href="login.html">Thoát</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
