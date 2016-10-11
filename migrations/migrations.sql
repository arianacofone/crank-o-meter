-- migrations for users & letters tables are to be peformed in psql console
-- migrations for sentence table will be completed with seed file

DROP DATABASE IF EXISTS crank_o_meter;
CREATE DATABASE crank_o_meter;

\c crank_o_meter

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE sentences (
  sentence TEXT,
  position VARCHAR NOT NULL
);

CREATE TABLE letters (
  content TEXT,
  user_id INTEGER REFERENCES users(id)
);
