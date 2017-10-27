module.exports = {
    sendMessage: (req, res, next) => {
        const db = req.app.get('db');
        const { senderId, receiverId, messageBody } = req.body;

        db.send_message([senderId, receiverId, messageBody])
        .then( messages => {
            res.status(200).send(messages)
        })
    },

    getAllMessages: (req, res, next) => {
        const db = req.app.get('db');
        const id = req.params.id;

        console.log(req.params.id);

        db.get_all_messages([id])
          .then( messages => {
              res.status(200).send(messages)
          })
    },

    deleteMessage: (req, res, next) => {
        const db = req.app.get('db');
        const messageId = req.params.id;

        console.log(messageId);
        db.delete_message([messageId])
          .then( () => res.send() );
    }

}