import React from 'react';
import MessageItemPropTypes from './MessageItemPropTypes';

const MessageItem = (props)=>{
    return (
        <div>
            <p>{props.text}</p>
            <p>{props.author}</p>
            <p>{props.time}</p>
        </div>
    )
}

MessageItem.propTypes = MessageItemPropTypes;

export default MessageItem;