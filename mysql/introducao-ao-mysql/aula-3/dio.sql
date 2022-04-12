/* COMMAND LINE*/

mysql -u root

show databases;

use dio_mysql

show tables;

CREATE TABLE cursos(id_curso INT NOT NULL PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(10));

INSERT INTO cursos (nome) VALUES ('MYSQL');
INSERT INTO cursos (nome) VALUES ('HTML');
INSERT INTO cursos (nome) VALUES ('CSS');

SELECT * FROM cursos;

UPDATE cursos SET nome='HTML 5' WHERE id_curso=2;

SELECT * FROM cursos;

INSERT INTO cursos (nome) VALUES ('Economia');

DELETE FROM cursos WHERE nome='Economia';

ALTER TABLE cursos ADD carga_horaria INT(2);

UPDATE cursos SET carga_horaria=20;

UPDATE cursos SET carga_horaria=40 WHERE id_curso=2;

DROP TABLE table1;

DROP database test;