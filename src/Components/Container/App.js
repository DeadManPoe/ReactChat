import React from 'react';
import descriptions from '../../descriptions';
import RoomsList from '../Presentational/RoomList/RoomList';
import MessagesList from '../Presentational/MessagesList/MessagesList';
import MessageSend from '../Presentational/MessageSend/MessageSend';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      nickname : '',
      rooms : [], //Contains infos about each room
      current_messages : [], //Contains currently retrieved messages
      need_render_messages : false,
      current_room : ''
    }
    this.websocket = {}
  }
  componentDidMount(){
    this.websocket = new WebSocket(descriptions.WEBSOCKET_ENDPOINT);
    this.websocket.onmessage = this.onNewMessage.bind(this);
    this.getRooms();
  }
  onNewMessage(message){
    this.setState((prevState)=>{
      return {
        current_messages : prevState.current_messages.concat([JSON.parse(message.data)])
      }
    })
  }
  onMessageSend(message){
    const data = {
      message : message,
      room : this.state.current_room
    }
    window.fetch(descriptions.MESSAGE_SEND_ENDPOINT, {
      method: 'POST',
      body : JSON.stringify(data),
      headers : {
        'Content-Type': 'application/json'
      }
    })
  }
  getRooms(){
    window.fetch(descriptions.GET_ROOMS_ENDPOINT).then((response)=>{
      response.json().then((json)=>{
        this.setState({
          rooms : json.rooms
        })
      })
    })
  }
  onRoomClick(id){
    this.setState({
      current_room : id,
      need_render_messages : true
    })
  }
  
  render() {
    const filtered_messages = this.state.current_messages.filter((msg)=>{
      return msg.room === this.state.current_room;
    })
    const messages_list_cmp = 
    <div>
    <MessagesList messages={filtered_messages.map((i)=>{return i.message })}/><MessageSend onMessageSend={this.onMessageSend.bind(this)} /></div>;
    return (
      <div style={{display : 'flex'}}>
        <RoomsList rooms={this.state.rooms} onRoomClick={this.onRoomClick.bind(this)}/>
        {this.state.need_render_messages ? messages_list_cmp : null
        }
      </div>
    );
  }
}

export default App;
