CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(180),
    last_name VARCHAR(180)
    email VARCHAR(180),
    img TEXT,
    phone TEXT,
    auth_id TEXT
)