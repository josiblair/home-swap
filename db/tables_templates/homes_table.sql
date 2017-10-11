CREATE TABLE IF NOT EXISTS homes (
    id SERIAL PRIMARY KEY,
    user_id TEXT FOREIGN KEY,
    country VARCHAR(40),
    address TEXT,
    state VARCHAR(50),
    city VARCHAR(50),
    zip VARCHAR(20),
    bathrooms INTEGER,
    bedrooms INTEGER,
    guests INTEGER,
    beds INTEGER,
    title VARCHAR(100),
    about_body TEXT,
    img TEXT
)