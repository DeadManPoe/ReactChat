import PropTypes from 'prop-types';

const RoomItemPropTypes = {
    onRoomClick : PropTypes.func,
    item : PropTypes.objectOf(
        PropTypes.shape({
            id : PropTypes.number,
            name : PropTypes.string,
            thumbnail : PropTypes.string,
            thumbnail_height : PropTypes.number,
            thumbnail_width : PropTypes.number,
            messages_count : PropTypes.number
        })
    )
}


export default RoomItemPropTypes;