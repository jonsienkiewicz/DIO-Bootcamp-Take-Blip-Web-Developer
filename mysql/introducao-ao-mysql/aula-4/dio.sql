/* MODELO RELACIONAL*/

SELECT * FROM `videos` JOIN author ON videos.fk_author = author.id_author;

SELECT * FROM `videos` JOIN seo ON videos.fk_seo = seo.id_SEO;

/* REALIZANDO CONSULTA COM JOIN */

SELECT videos.title, author.name, seo.category FROM `videos` JOIN seo ON videos.fk_seo = seo.id_SEO
JOIN author ON videos.fk_author = author.id_author;

/* CRIANDO TABELA VIDEOS_PLAYLIST RELACIONANDO-A COM OUTRAS TABELAS*/

SELECT * FROM `playlist` JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist;

SELECT * FROM `playlist` JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist
JOIN videos ON videos.id_video = videos_playlist.fk_videos;

SELECT playlist.nome_pl, videos.title FROM `playlist` 
JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist
JOIN videos ON videos.id_video = videos_playlist.fk_videos;

SELECT playlist.nome_pl, videos.title, author.name FROM `playlist` 
JOIN videos_playlist ON playlist.id_playlist = videos_playlist.fk_playlist
JOIN videos ON videos.id_video = videos_playlist.fk_videos
JOIN author ON videos.fk_author = author.id_author;