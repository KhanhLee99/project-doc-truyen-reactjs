import React, { Component } from 'react';
import Axios from 'axios';
import MyContext from '../../myContext';

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
                    <div className="form-search fl-right">
                        <a href="/category/add" id="add-category" className="fl-left">Thêm mới</a>
                        <input type="submit" value="Tìm kiếm" />
                        <input type="text" />
                    </div>
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
                                <a href>&lt;</a>
                            </li>
                            <li className="paging-active">
                                <a href>1</a>
                            </li>
                            <li>
                                <a href>2</a>
                            </li>
                            <li>
                                <a href>3</a>
                            </li>
                            <li>
                                <a href>4</a>
                            </li>
                            <li>
                                <a href>&gt;</a>
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
                    <a href='/' title="Sửa" className="edit"><i className="fa fa-pencil icon" /></a>
                    <a href='/' title="Xóa" className="delete" onClick={(e, id) => this.deleteClick(e, cate.id)}><i className="fa fa-trash icon" /></a>
                </td>
            </tr>
        );
    }
}

CategoryItem.contextType = MyContext;

export default ListCategory;
