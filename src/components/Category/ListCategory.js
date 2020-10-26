import React, { Component } from 'react';
import Axios from 'axios';
import MyContext from '../../myContext';
import Search from './Search';
import { Link } from 'react-router-dom';
class ListCategory extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         listCategory: []
    //     }
    // }

    // componentDidMount() {
    //     Axios.get('http://127.0.0.1:8000/api/categories').then((responsive) => {
    //         this.setState({
    //             listCategory: responsive.data
    //         })
    //     })
    // }
    
    render() {

        const listCategory = this.context.listCategory.map((item, index) => {
            return(
                <CategoryItem stt={index+1} cate={item} key={index}/>
            ) 
        })

        return (
            <div className="content-wrapper">
                <div className="main-list">
                    <h2 className="fl-left">DANH SÁCH CHUYÊN MỤC</h2>
                    <div className="hr" />
                    <Search/>
                    <div className="list">
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên chuyên mục</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCategory}
                            </tbody>
                        </table>
                    </div>
                    <div className="num-record">(Có {this.context.listCategory.length} bản ghi)</div>
                    <div className="paging">
                        <ul id="list-paging" className="fl-right">
                            <li>
                                <Link to>&lt;</Link>
                            </li>
                            <li className="paging-active">
                                <Link to>1</Link>
                            </li>
                            <li>
                                <Link to>2</Link>
                            </li>
                            <li>
                                <Link to>3</Link>
                            </li>
                            <li>
                                <Link to>4</Link>
                            </li>
                            <li>
                                <Link to>&gt;</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

ListCategory.contextType = MyContext;


class CategoryItem extends Component {

    deleteClick = (e, id) =>{
        e.preventDefault();
        if(window.confirm('Ban co chac muon xoa?'))
        {
            Axios.delete('http://127.0.0.1:8000/api/category/' + id).then((response) =>{
                this.context.loadCategory();
            })
        }
    }

    editClick = (e, id) => {
        e.preventDefault();
        alert(id);
    }
        
    render() {
        let {cate} = this.props;
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{cate.name}</td>
                <td>
                    <Link to='/' title="Sửa" className="edit"><i className="fa fa-pencil icon" /></Link>
                    <Link to='/' title="Xóa" className="delete" onClick={(e, id) => this.deleteClick(e, cate.id)}><i className="fa fa-trash icon" /></Link>
                </td>
            </tr>
        );
    }
}

CategoryItem.contextType = MyContext;

export default ListCategory;
