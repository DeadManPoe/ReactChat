import React from 'react';
import MessageListPropTypes from './MessagesListPropTypes';
import MessageItem from '../MessageItem/MessageItem';

const MessagesList = (props)=>{
    const MessageItems = props.messages.map(
        (item,index)=>{
            console.log(item);
            return <MessageItem key={index} text={item.text} author={item.author} time={item.time}/>
        }
    );
    return (
        <div>
            <ul>{MessageItems}</ul>
        </div>
    )
}

MessagesList.propTypes = MessageListPropTypes;

export default MessagesList;
