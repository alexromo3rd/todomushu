CREATE TABLE todo (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);

INSERT INTO todo (description)
VALUES ('Walk dog'), ('Take out trash'), ('Complete project plan');