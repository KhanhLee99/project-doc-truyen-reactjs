import React, { Component } from 'react'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.compat.css'

export default class Example extends Component {
    handleClickDefault = () => {
        store.addNotification({
            title: "Wonderful!",
            message: "teodosii@react-notifications-component",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true,
                showIcon: true,
            },
        })
    }
    render() {
        return (
            <div>
                <ReactNotification />
                <button onClick={this.handleClickDefault}>
                    default
            </button>
            </div>
        )
    }
}
