import React, { Component } from 'react'
import { Link } from 'react-router-dom';

var moment = require('moment')

export default class ChapterItem extends Component {
    render() {
        var { chapter } = this.props;
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td><Link to={`/chapter/${chapter.id}/detail`}>{chapter.name}</Link></td>
                <td>{chapter.pages}</td>
                <td>{moment(chapter.created_at).format("L")}</td>
                <td>{moment(chapter.updated_at).format("L")}</td>
                <td>
                    <Link to={`/chapter/edit/${chapter.id}`} title="Sửa" className="edit"><i className="fa fa-pencil icon" /></Link>
                    <a href title="Xóa" className="delete"><i className="fa fa-trash icon" /></a>
                </td>
            </tr>
        )
    }
}
