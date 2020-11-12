import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    BrowserRouter as Route,
    Link,
} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCurrent: {}
        }
    }

    click = (e) => {
        e.preventDefault();
    }
    componentDidMount() {
        this.setState({
            userCurrent: this.props.userCurrent
        })
    }

    render() {
        console.log(this.props.userCurrent);
        // var email = (this.props.userCurrent.email) ? this.props.userCurrent.email.split('@')[0] : 'Admin';
        var header = (this.props.isLogin) ? (
            <header className="main-header">
                <Link to="dashboard.html" className="logo"> <span className="logo-lg">ADMIN</span> </Link>
                <nav className="navbar navbar-static-top" role="navigation">
                    <Link to="http://www.google.com" className="sidebar-toggle" data-toggle="offcanvas" role="button" />
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu"> <Link onClick={(e) => this.click(e)} to="http://www.google.com" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="dist\img\ava.jpg" className="user-image" /> <span className="hidden-xs">levietkhanh99</span> </Link>
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
        ) : (null)
        return (
            <>
                {header}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userCurrent: state.userCurrent,
        isLogin: state.isLogin,
    }
}
export default connect(mapStateToProps, null)(Header)