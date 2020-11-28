import React, { Component } from 'react';
import './loading.css'

import logo from '../../assets/loading2.svg'

class index extends Component {
    render() {
        return (
            <div className="loading">
                <img src={logo} alt="logo"/>
                <h1>loading</h1>
            </div>
        );
    }
}

export default index;