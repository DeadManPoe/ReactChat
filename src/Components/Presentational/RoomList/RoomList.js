import React from 'react';
import RoomListPropTypes from './RoomListPropTypes';
import RoomItem from '../RoomItem/RoomItem';

const RoomList = (props)=>{
    const onRoomClick = (id)=>{
        props.onRoomClick(id);
    };
    const roomItems = props.rooms.map(
        (item)=>(
            <RoomItem key={item.id} onRoomClick={onRoomClick.bind(this)} item={item}/>
        )
    );
    return (
        <div>
            <h3>Rooms</h3>
            <ul>{roomItems}</ul>
        </div>
    )
}

RoomList.propTypes = RoomListPropTypes;

export default RoomList;