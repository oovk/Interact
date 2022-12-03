import React, { Component } from "react";
import Header from './components/Header/Header';//get the jsx files
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.css';
import { connect, sendMsg } from './api';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ChatHistory: []//array of chat history
            }
        }

        componentDidMount(){
            connect((msg) => {
                console.log("New Message")
                this.setState(prevState => ({
                        ChatHistory : [...prevState.ChatHistory,msg]//new state of chat history, new messages plus the old ones
                }))
                console.log(this.state);
            })
        }
    
    render() {
        return (
            <div className="App">
                <Header />
                <ChatHistory ChatHistory={this.state.ChatHistory} />
                <ChatInput send={this.send} />
            </div>
        );
    }
}

export default App;