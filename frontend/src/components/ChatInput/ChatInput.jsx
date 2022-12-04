import React from "react";
import { Component } from "react";
import './Header.scss'

class ChatInput extends Component{
    render() {
        return (
            <div className="ChatInput">
                <input onKeyDown={this.props.send} placeholder="Type a message...Hit enter to send!"/>
            </div>
        )
    }
} 

export default ChatInput;