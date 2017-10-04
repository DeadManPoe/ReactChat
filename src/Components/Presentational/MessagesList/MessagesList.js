import React from 'react';
import MessageItemPropTypes from './MessagesListPropTypes';

const MessagesList = (props)=>{
    const MessageItems = props.messages.map(
        (item,index)=>{
            <MessageItem key={index} text={item.text} author={item.author} time={item.time}/>
        }
    );
    return (
        <div>
            <ul>{MessageItems}</ul>
        </div>
    )
}

MessagesList.propTypes = MessageItemPropTypes;

export default MessagesList;
