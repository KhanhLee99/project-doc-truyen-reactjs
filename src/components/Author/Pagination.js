import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
            <div className="paging">
                <ul id="list-paging" className="fl-right">
                    <li>
                        <a href='/'>&lt;</a>
                    </li>
                    <li className="paging-active">
                        <a href='/'>1</a>
                    </li>
                    <li>
                        <a href='/'>2</a>
                    </li>
                    <li>
                        <a href='/'>3</a>
                    </li>
                    <li>
                        <a href='/'>4</a>
                    </li>
                    <li>
                        <a href='/'>&gt;</a>
                    </li>
                </ul>
            </div>
        )
    }
}
