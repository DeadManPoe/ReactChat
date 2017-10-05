import React from 'react';
import PropTypes from 'prop-types';
import RoomItemPropTypes from './RoomItemPropTypes';

const RoomItem = (props)=>{
    return (
        <div onClick={()=>{props.onRoomClick(props.item.id)}}>
            <img src={props.item.thumbnail} width={props.item.thumbnail_width} height={props.item.thumbnail_height}/>
            <h4>{props.item.name}</h4>
            <span>{props.item.messages_count}</span>
        </div>
    )
}
RoomItem.propTypes = RoomItemPropTypes;
export default RoomItem;