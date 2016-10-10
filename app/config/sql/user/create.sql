INSERT INTO user (email, password, name, letters) VALUES($1, $2, $3, $4) RETURNING *;
