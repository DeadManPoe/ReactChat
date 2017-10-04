import PropTypes from 'prop-types';
import MessageItemPropTypes from '../MessageItem/MessageItemPropTypes';

const MessagesListPropTypes = {
    messages : PropTypes.arrayOf(MessageItemPropTypes),
}
export default MessageItemPropTypes;