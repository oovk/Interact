import React, { Component } from "react"; 
import './ChatHistory.scss'
import Message from '../Message/Message';

class ChatHistory extends Component{
    render() {
        console.log(this.props.ChatHistory);
        //loop over the msg history and add'em to map keeping key as a timestamp and msg as value and return it
        this.props.ChatHistory.map(msg => <Message key={msg.timeStamp} message={msg.data} />);

        return (
            <div className="ChatHistory">
                <h2>Chat History</h2>
                {this.props.message}
            </div>
        );
    }
}

export default ChatHistory;