select u.id, u.first_name, u.last_name, m.message_id, m.sender_id, m.receiver_id, m.message_body from users as u
join messages as m on u.id = m.sender_id or u.id = m.receiver_id
where u.id = $1 or u.id = $2

--this joins the messages table and users table, should be able to pull the first and last name of the message's sender 