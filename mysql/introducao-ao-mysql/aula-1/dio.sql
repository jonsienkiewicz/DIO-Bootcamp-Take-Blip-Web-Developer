/* CREATE*/

CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

/* INSERT */

INSERT INTO pessoas (nome, nascimento) VALUES ('Jonathan', '1991-03-05')
INSERT INTO pessoas (nome, nascimento) VALUES ('Nathaly', '1990-05-22')
INSERT INTO pessoas (nome, nascimento) VALUES ('Pedro', '1995-07-17')

