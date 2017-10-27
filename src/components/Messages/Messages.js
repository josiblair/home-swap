import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../../ducks/reducer';
import './Messages.css';

class Messages extends Component {
    constructor() {
        super()

        this.state = {
            messageBody: '',
            senderId: null,
            receiverId: null,
            showInput: false
        }
    }


    reply(senderId, receiverId) {
        this.setState({
            senderId: senderId,
            receiverId: receiverId,
            showInput: true
        })
    }

    send(senderId, receiverId) {
        this.props.sendMessage(receiverId, senderId, this.state.messageBody)

        this.setState({
            showInput: false
        })
    }

    handleInput(val) {
        this.setState({
            messageBody: val
        })
    }

    render(){

        const messages = this.props.userInfo.messages.map( (message, i) => { 
           
            if(this.props.userInfo.userid !== message.sender_id) { 
                const link = `localhost:3000/#/displayhome/${message.sender_id}`
            
                return <div key={i} className='message'>
                <div className='message_body'>{message.message_body}</div>
                <a href={link} target='_blank' className='home_link'>See Home</a>
                {!this.state.showInput ?
                <div>
                <button onClick={ () => this.reply(message.sender_id, message.receiver_id) } className='message_buttons'>Reply</button>
                <button onClick={ () => this.props.denyInterest(message.message_id, this.props.userInfo.userid)} className='message_buttons'>Delete</button>
                </div> 
                :
                <div>
                <input onChange={ (e) => this.handleInput(e.target.value)} className='message_input' />
                <button onClick={ () => this.send(message.sender_id, message.receiver_id) } className='message_buttons'>Send</button>
                </div>
                }
            </div>
            }
        })

        return(
            <div className='messages_container'>
                {messages}
            </div>
        )
    } 
}

export default connect(null, {sendMessage})(Messages);