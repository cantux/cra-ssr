import React, { Component } from 'react';

export default class Message extends Component {
    componentDidMount() {
        if(!this.props.message) {
            this.props.updateMessage("Hi, I'm from client!");
        }
    }
    render() {
        return (
            <div>
                Redux: { this.props.message }
            </div>
        );
    }
}