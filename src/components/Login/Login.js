import './login.css';
import { isLoginTrue } from '../../actions/login';
import React, { Component } from 'react'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import showAlert from '../../utils/showAlert';
import Loading from '../Loading'

import imgLG from '../../imgLogin.jpg'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "",
            redirect: false,
            errMsgEmail: "",
            errMsgPwd: "",
            errMsg: "",
            loading: false,
        };
        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    loginClick = () => {
        this.setState({ loading: true })
        Axios
            .post("http://localhost:8000/api/login", {
                email: this.emailRef.current.value,
                password: this.passwordRef.current.value,
            }).then((response) => {
                console.log(response);
                if (response.data.status === 200) {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("userData", JSON.stringify(response.data.data));
                    this.setState({
                        redirect: true,
                        loading: true
                    });
                    showAlert('Đã đăng nhập thành công', 'success');
                    this.props.setLoginTrue();
                }
                else {
                    if (response.data.status === "failed") {
                        if (response.data.success === undefined) {
                            this.setState({
                                errMsgEmail: response.data.validation_error.email,
                                errMsgPwd: response.data.validation_error.password,
                                msg: "",
                                errMsg: "",
                                loading: false
                            });
                        }
                        else {
                            this.setState({
                                errMsg: response.data.message,
                                errMsgEmail: "",
                                errMsgPwd: "",
                                msg: "",
                                loading: false
                            });
                        }
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/dashboard" />;
        }
        if (this.props.isLogin) {
            return <Redirect to="/dashboard" />;
        }
        const { loading } = this.state;
        var html = (loading) ? <Loading /> : (
            <div className="block-login">
                <div className="welcome-login">
                    <h1 className="title-login">Welcome to TRUYENBOX</h1>
                    <img src={imgLG} alt='imgBG' />
                </div>
                <div className="form-login">
                    <h3 className="logo-login">ADMIN LOGIN</h3>
                    <div className="form-group-login">
                        <input onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                this.loginClick();
                            }
                        }} className="form-control-login" type="text" name="email" placeholder="Email" ref={this.emailRef} />
                        <i className="fa fa-user icon-login" />
                        <span className="text-danger">{this.state.errMsgEmail}</span>
                    </div>
                    <div className="form-group-login">
                        <input onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                this.loginClick();
                            }
                        }} className="form-control-login" type="password" name="password" placeholder="Password" ref={this.passwordRef} />
                        <i className="fa fa-unlock-alt icon-login" />
                        <span className="text-danger">{this.state.errMsgPwd}</span>
                    </div>
                    <div className="checkbox-login">
                        <div className="form-check-login">
                            <input className="remember-me-login" type="checkbox" name="remember_me" id="remember_me" />
                            <label htmlFor="remember_me" className="label-login">Ghi nhớ đăng nhập</label>
                        </div>
                    </div>
                    <div className="form-group-login">
                        <button className="form-submit-login" onClick={() => this.loginClick()} >Login</button>
                    </div>
                    <p className="text-danger">{this.state.errMsg}</p>
                    <span className="text-success">{this.state.msg}</span>
                </div>
            </div>
        )
        return (
            <>
                { html }
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoginTrue: () => {
            dispatch(isLoginTrue())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)