import Axios from 'axios';
import React, { Component } from 'react'
import './style.css';

export default class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgPassCurrent: "",
            msgPass: "",
            msgPassConfirm: "",
            msgErr: "",
            msgSuccess: "",
            password_current: "",
            password: "",
            password_confirm: "",
        }
        this.password_currentRef = React.createRef()
        this.passwordRef = React.createRef()
        this.password_confirmRef = React.createRef()
    }


    saveClick = () => {
        var { match } = this.props;
        var password_current = this.password_currentRef.current.value;
        var password = this.passwordRef.current.value;
        var password_confirm = this.password_confirmRef.current.value;
        var email = match.params.email;

        if (email !== null) {
            Axios
                .post("http://localhost:8000/api/change-password/" + email, {
                    password_current,
                    password,
                    password_confirm
                }).then((response) => {
                    // console.log(response);
                    if (response.data.status === 200) {
                        this.setState({
                            msgPassCurrent: "",
                            msgPass: "",
                            msgPassConfirm: "",
                            msgErr: "",
                            msgSuccess: response.data.message,

                        });
                        // showAlert('Đã đăng nhập thành công', 'success');
                    }
                    else {
                        if (response.data.status === "failed") {
                            if (response.data.success === undefined) {
                                this.setState({
                                    msgPassCurrent: response.data.errors.password_current,
                                    msgPass: response.data.errors.password,
                                    msgPassConfirm: response.data.errors.password_confirm,
                                    msgErr: "",
                                    msgSuccess: "",
                                });
                            }
                            else {
                                this.setState({
                                    msgPassCurrent: "",
                                    msgPass: "",
                                    msgPassConfirm: "",
                                    msgErr: response.data.message,
                                    msgSuccess: "",
                                });
                            }
                        }
                    }
                }).catch((error) => {
                    console.log(error);
                });
        }

    }


    render() {
        return (
            <div className="content-wrapper">
                <div className="info">
                    <div className="info-title">
                        <b>Đổi mật khẩu</b>
                    </div>
                    <div className="form-change-password">
                            <label htmlFor="current-password">Mật khẩu hiện tại</label>
                            <input type="password" ref={this.password_currentRef} name="current-password" id="current-password" defaultValue={this.state.password_current} />
                            <span className="text-danger">{this.state.msgPassCurrent}</span>

                            <label htmlFor="new-password">Mật khẩu mới</label>
                            <input type="password" ref={this.passwordRef} name="new-password" id="new-password" />
                            <span className="text-danger">{this.state.msgPass}</span>

                            <label htmlFor="re-new-password">Nhập lại mật khẩu mới</label>
                            <input type="password" ref={this.password_confirmRef} name="re-new-password" id="re-new-password" />
                            <span className="text-danger">{this.state.msgPassConfirm}</span>

                            <span className="text-danger">{this.state.msgErr}</span>
                            <span className="text-success">{this.state.msgSuccess}</span>

                            <button type="reset" className="save-change" onClick={() => this.saveClick()}>Lưu mật khẩu</button>
                    </div>
                </div>
            </div>
        )
    }
}
