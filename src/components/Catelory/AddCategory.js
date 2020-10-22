import React, { Component } from 'react';

class AddCategory extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="main-content">
                    <h2>THÊM MỚI CHUYÊN MỤC</h2>
                    <div className="hr1" />
                    <form action>
                        <label htmlFor="name">Tên chuyên mục</label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="key">Từ khóa tìm kiếm</label>
                        <input type="text" name="key" id="key" />
                        <label htmlFor="description">Mô tả ngắn</label>
                        <textarea name="description" id="description" defaultValue={""} />
                        <button>Thêm mới</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddCategory;