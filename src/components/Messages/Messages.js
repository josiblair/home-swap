import React from 'react';


//PROPS
// userInfo:
//     editEmail:false
//     editPhone:false
//     email:"josib.moore@gmail.com"
//     firstName:"Josi"
//     lastName:"Moore"
//     messages:Array(3)
//         0:{message_id: 9, sender_id: 2, receiver_id: 3, message_body: "Hi there! I am interested in swapping homes with y… you think! http://localhost:3000/#/displayhome/2"}
//         1:{message_id: 10, sender_id: 3, receiver_id: 5, message_body: "Hi there! I am interested in swapping homes with y… you think! http://localhost:3000/#/displayhome/3"}
//         2:{message_id: 12, sender_id: 1, receiver_id: 3, message_body: "Hi there! I am interested in swapping homes with y… you think! http://localhost:3000/#/displayhome/1"}
//     phone:""
//     userImg:"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
//     userid:3

export default (props) => {
    
    const messages = props.userInfo.messages.map( (message, i) => {
        
        if(props.userInfo.userid !== message.sender_id) { 
            const link = `localhost:3000/#/displayhome/${message.sender_id}`
        
            return <div key={i} className='message'>
            <div>{message.message_body}</div>
            <a href={link} target='_blank'>My Home</a>
            <button>Reply</button>
        </div>
        }
    })

    return(
        <div className='messages_container'>
            {messages}
        </div>
    )
} 