import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h1>WELCOME TRUYENBOX ADMIN</h1>
                    <ul className="home-control">
                        <Link to="/categories">
                            <li className="home-item">
                                <span className="fa fa-th-large"></span>
                            </li>
                        </Link>
                        <Link to="/authors">
                            <li className="home-item">
                                <span className="fa fa-pencil-square-o"></span>
                            </li>
                        </Link>
                        <Link to="/stories">
                            <li className="home-item">
                                <span className="fa fa-book"></span>
                            </li>
                        </Link>
                        <Link to="/users">
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
