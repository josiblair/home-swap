module.exports = {
    sendMessage: (req, res, next) => {
        const db = req.app.get('db');
        const { senderId, receiverId, messageBody } = req.body;
        console.log(senderId, receiverId, messageBody)

        db.add_message([senderId, receiverId, messageBody])
        .then( messages => {
            res.status(200).send(messages)
        })
    },

    sentMessages: (req, res, next) => {
        const db = req.app.get('db');
        const id = req.params.id;

        db.sent_messages([id])
        .then( messages => {
            res.status(200).send(messages)
        })
    },

    receivedMessages: (req, res, next) => {
        const db = req.app.get('db')
        const id = req.params.userid;

        db.recieved_messages([id])
        .then( messages => {
            res.status(200).send(messages)
        })
    }
}