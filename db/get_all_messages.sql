SELECT * FROM messages
WHERE sender_id = $1 AND user_id = $2
OR sender_id = $2 AND user_id = $1