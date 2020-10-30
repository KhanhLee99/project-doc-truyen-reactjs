import React, { Component } from 'react'

export default class ChapterItem extends Component {
    render() {
        return (
            <tr>
                <td scope="row">1</td>
                <td>Chương 1</td>
                <td>Tuổi 30</td>
                <td>Admin</td>
                <td>3/4/2020</td>
                <td>
                    <a href title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                    <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                </td>
            </tr>
        )
    }
}
