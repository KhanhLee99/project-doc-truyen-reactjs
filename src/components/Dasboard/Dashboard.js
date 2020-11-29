import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h1 style={{textAlign: 'center', fontSize: '38px', color: '#388FCB' ,padding: '15px 25px', backgroundColor: '#F5F5F5'}}>Welcome to TRUYENBOX's Admin</h1>
                    <ul className="home-control">
                        <Link to="/categories" title="Chuyên mục">
                            <li className="home-item">
                                <span className="fa fa-th-large"></span>
                            </li>
                        </Link>
                        <Link to="/authors" title="Tác giả">
                            <li className="home-item">
                                <span className="fa fa-pencil-square-o"></span>
                            </li>
                        </Link>
                        <Link to="/stories" title="Truyện">
                            <li className="home-item">
                                <span className="fa fa-book"></span>
                            </li>
                        </Link>
                        <Link to="/users" title="Thành viên">
                            <li className="home-item">
                                <span className="fa fa-users"> </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}
