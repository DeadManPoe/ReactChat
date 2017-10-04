const primal_descriptions = {
    HOST : 'localhost',
    WS_HOST_PORT : '8888',
    PORT : '8080'
}
const descriptions = {
    WEBSOCKET_ENDPOINT : `ws://${primal_descriptions.HOST}:${primal_descriptions.WS_HOST_PORT}`,
    MESSAGE_SEND_ENDPOINT : `http://${primal_descriptions.HOST}:${primal_descriptions.PORT}/send_message`,
    GET_ROOMS_ENDPOINT : `http://${primal_descriptions.HOST}:${primal_descriptions.PORT}/get_rooms`
}

export default descriptions;