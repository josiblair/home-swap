CREATE TABLE IF NOT EXISTS messages (
message_id serial primary key, 
sender_id int not null references users(id), 
receiver_id int not null references users(id),
message_body text not null )

-- CREATE TABLE IF NOT EXISTS messages (
--     message_id SERIAL PRIMARY KEY,
--     user_id FOREIGN KEY TEXT,
--     sender_id TEXT,
--     message_body TEXT
-- )