/* SELECT*/
SELECT * FROM pessoas;

SELECT nome FROM pessoas;

SELECT nome, nascimento FROM pessoas;

/* ATUALIZANDO/MODIFICANDO DADOS*/

UPDATE pessoas SET nome = 'Jonathan Sienkiewicz';

UPDATE pessoas SET nome = 'Jonathan Sienkiewicz' WHERE id=1;

/* DELETANDO DADOS*/

DELETE FROM pessoas WHERE id=1;

/* ORDER BY*/

SELECT * FROM pessoas ORDER BY nome;

/*  ORDER BY pessoas de forma decrescente */

SELECT * FROM pessoas ORDER BY nome DESC

/* AGRUPANDO DADOS*/

SELECT COUNT(id), GENERO FROM pessoas GROUP BY genero;  



