CREATE TABLE IF NOT EXISTS messages (
    message_id SERIAL PRIMARY KEY,
    user_id FOREIGN KEY TEXT,
    sender_id TEXT,
    message_body TEXT
)