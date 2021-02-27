INSERT INTO `usuarios` (username, password, enabled,name,last_name,email) VALUES('ADMIN','$2a$10$u/UJovvph2fdctS3U5UpkuOMtM92fB/VXePm97TeMTmKFsxMqw5yq',1 , 'Joe','bored','joesgreen@gmail.com');
INSERT INTO `usuarios` (username, password, enabled,name,last_name,email) VALUES('USER','$2a$10$.bQ4BYaJpqDnMVs/uyw0hetfjfs5YmaNT8eLi3WwyT7.snYmtm6cO',1 , 'Joe','bored','green@gmail.com');


INSERT INTO `roles`  (name) Values('ROLE_USER'); 
INSERT INTO `roles`  (name) Values('ROLE_ADMIN');

INSERT INTO `usuarios_roles`(usuario_id, role_id) VALUES(1,1);
INSERT INTO `usuarios_roles`(usuario_id, role_id) VALUES(2,2);
INSERT INTO `usuarios_roles`(usuario_id, role_id) VALUES(1,2);

