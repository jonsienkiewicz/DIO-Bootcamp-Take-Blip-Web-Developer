/*   Realizando consultas com JOIN e AS */

/* Relacionamento entre tabelas */
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_canal = videos.id_videos;

/* Simplificando e resumindo o nome das tabelas */
SELECT * FROM videos_canais AS vc JOIN videos AS v ON vc.fk_canal = v.id_video;

/* Implementando multiplos comandos JOIN*/

SELECT * 
FROM videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal;

/* Filtrando colunas desnecessárias no resultado*/

SELECT v.nome_video, v.autor_video, c.nome_canal
FROM videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal;

/* Conceito inicial sobre RIGHT e LEFT JOIN */

/* INNER JOIN - sempre retorna os valores que estão presentes na consulta, ou seja, nenhum campo que retorne null ou que não tenha nenhum relacionamento*/
/* OUTER JOIN - traz toda a consulta, inclusive as que não possuem relacionamento na base de dados */
/* ao utilizar a cláusula OUTER JOIN precisamos identificar o local dessa consulta que não terá relacionamento */

/* Praticando consultas com RIGHT e LEFT JOIN */

SELECT * FROM videos_canais AS vc RIGHT OUTER JOIN videos AS v ON vc.fk_video = v.id_video;

SELECT * FROM videos_canais AS vc RIGHT OUTER JOIN videos AS v ON vc.fk_video = v.id_video
RIGHT OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal;

/* UNION só funciona com numero de tabelas iguais */
/* une as consultas */

SELECT v.id_video, v.nome_video FROM videos AS v LEFT OUTER JOIN videos_canais AS vc ON v.id_video = vc.fk_video
UNION
SELECT c.id_canal, c.nome_canal FROM videos_canais AS vc RIGHT OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal;

/* Inserindo novos dados com tabelas relacionadas */
/* relacionando tabelas com ids diferentes*/
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal;

/* Realizando consultas com comando WHERE */

SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal
WHERE canais.id_canal=2;