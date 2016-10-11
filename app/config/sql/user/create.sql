INSERT INTO users (name, email, password, letters) VALUES($1, $2, $3, $4) RETURNING *;
