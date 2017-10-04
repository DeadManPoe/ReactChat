import React from 'react';
import PropTypes from 'prop-types';
import MessageSendPropTypes from './MessageSendPropTypes';

class MessageSend extends React.Component {
    constructor(){
        super();
        this.state = {
            message : ''
        }
    }
    render(){
        return (
            <div>
                <input type='text' onChange={this.setMessage.bind(this)}/>
                <button onClick={this.sendMessage.bind(this)}>Send</button>
            </div>
        )
    }
    setMessage(event){
        this.setState({
            message : event.target.value
        })
    }
    sendMessage(){
        this.props.onMessageSend(this.state.message)
    }
}
MessageSend.propTypes = MessageSendPropTypes;

export default MessageSend;