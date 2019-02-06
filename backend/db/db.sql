DROP DATABASE IF EXISTS test_users;
CREATE DATABASE test_users;

\c test_users

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    phone_number TEXT NOT NULL UNIQUE
);

INSERT INTO users (username, phone_number)
VALUES ('Xavier', '777957345');
