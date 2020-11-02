import './login.css';
import { isLoginTrue } from '../../actions/login';
import React, { Component } from 'react'
import Axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "",
            redirect: false,
            errMsgEmail: "",
            errMsgPwd: "",
            errMsg: "",
        };
        this.emailRef = React.createRef()
        this.passwordRef = React.createRef()
    }

    loginClick = () => {
        // alert(this.emailRef.current.value + " " + this.passwordRef.current.value)
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
                        msg: response.data.message,
                        errMsg: "",
                        errMsgEmail: "",
                        errMsgPwd: "",
                        redirect: true,
                    });
                }
                else {
                    if (response.data.status === "failed") {
                        if (response.data.success === undefined) {
                            this.setState({
                                errMsgEmail: response.data.validation_error.email,
                                errMsgPwd: response.data.validation_error.password,
                                msg: "",
                                errMsg: "",

                            });
                            // setTimeout(() => {
                            //     this.setState({ errMsgEmail: "", errMsgPwd: "" });
                            // }, 5000);
                        }
                        else {
                            this.setState({
                                errMsg: response.data.message,
                                errMsgEmail: "",
                                errMsgPwd: "",
                                msg: ""
                            });
                            // setTimeout(() => {
                            //     this.setState({ errMsg: "" });
                            // }, 2000);
                        }
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="block-login">
                <div className="welcome-login">
                    <h1 className="title-login">Welcome to logdy</h1>
                    <p className="content-login">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem
      Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type</p>
                </div>
                <div className="form-login">
                    <h3 className="logo-login">ADMIN LOGIN</h3>
                    <div className="form-group-login">
                        <input className="form-control-login" type="text" name="email" placeholder="Email" ref={this.emailRef} />
                        <i className="fa fa-user icon-login" />
                        <span className="text-danger">{this.state.errMsgEmail}</span>
                    </div>
                    <div className="form-group-login">
                        <input className="form-control-login" type="password" name="password" placeholder="Password" ref={this.passwordRef} />
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
    }
}
