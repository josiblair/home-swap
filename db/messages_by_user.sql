select u.first_name, u.last_name, m.message_body from messages as m
join users as u on u.id = m.receiver_id
where u.id = $1