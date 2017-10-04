const primal_descriptions = {
    HOST : 'localhost',
    PORT : '8080'
}
const descriptions = {
    WEBSOCKET_ENDPOINT : `ws://${primal_descriptions.HOST}:${primal_descriptions.PORT}/message_stream`,
    MESSAGE_SEND_ENDPOINT : `http://${primal_descriptions.HOST}:${primal_descriptions.PORT}//message_send`,
    GET_ROOMS_ENDPOINT : `http://${primal_descriptions.HOST}:${primal_descriptions.PORT}/get_rooms`
}

export default descriptions;