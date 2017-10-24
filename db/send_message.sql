insert into messages (sender_id, receiver_id, message_body)
values($1, $2, $3)
returning *