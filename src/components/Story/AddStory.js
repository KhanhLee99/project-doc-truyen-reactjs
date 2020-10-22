import React, { Component } from 'react';

class AddStory extends Component {
    render() {
        return (
                <div className="content-wrapper">
                    <div className="main-content">
                        <h2>THÊM MỚI TRUYỆN</h2>
                        <div className="hr1" />
                        <form action>
                        <label htmlFor="name">Tên truyện</label>
                        <input type="text" name="name" id="name" />
                        <label htmlFor="category">Chuyên mục</label>
                        <select name="category" id="category">
                            <option value>--- Chọn chuyên mục ---</option>
                            <option value>Chuyên mục 1</option>
                            <option value>Chuyên mục 2</option>
                        </select>
                        <label htmlFor="author">Tác giả</label>
                        <select name="author" id="author">
                            <option value>--- Chọn tác giả ---</option>
                            <option value>Tác giả 1</option>
                            <option value>Tác giả 2</option>
                        </select>
                        <label htmlFor="key">Từ khóa tìm kiếm</label>
                        <input type="text" name="key" id="key" />
                        <label htmlFor="category">Tình trạng</label>
                        <select name="status" id="status">
                            <option value>--- Chọn tình trạng truyện ---</option>
                            <option value selected>Đang cập nhật</option>
                            <option value>Hoàn thành</option>
                        </select>
                        <label htmlFor="description">Mô tả ngắn</label>
                        <textarea name="description" id="description"  />
                        <label htmlFor="file">Ảnh đại diện</label>
                        <input type="file" name="file" id="file" />
                        <button>Thêm mới</button>
                        </form>
                    </div>
                </div>
        );
    }
}

export default AddStory;