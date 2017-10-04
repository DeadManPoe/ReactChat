import React from 'react';
import descriptions from '../../descriptions';
import RoomList from '../Presentational/RoomList/RoomList'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      nickname : '',
      rooms : [], //Contains infos about each room
      current_messages : [] //Contains currently retrieved messages
    }
    this.websocket = {}
  }
  onComponentDidMount(){
    this.websocket = new WebSocket(descriptions);
    this.websocket.onmessages = this.onNewMessage;
    this.getRooms();
  }
  onNewMessage(message){
    this.setState((prevState)=>{
      prevState.current_messages.append(message)
    })
  }
  onMessageSend(message){
    const data = new FormData();
    data.append('message',message)
    window.fetch(descriptions.MESSAGE_SEND_ENDPOINT, {
      method: 'POST',
      body : message
    })
  }
  getRooms(){
    window.fetch(descriptions.GET_ROOMS_ENDPOINT).then((response)=>{
      response.json((json)=>{
        this.setState({
          rooms : json.rooms
        })
      })
    })
  }
  
  render() {
    return (
      <div>
        <RoomsList/>
      </div>
    );
  }
}

export default App;
