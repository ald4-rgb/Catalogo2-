INSERT INTO regiones (id,name) values ('1','Aguascalientes: Aguascalientes')
INSERT INTO regiones (id,name) values ('2','Baja California: Mexicali')
INSERT INTO regiones (id,name) values ('3','Baja California Sur: La Paz')
INSERT INTO regiones (id,name) values ('4','Campeche: San Francisco de Campeche')
INSERT INTO regiones (id,name) values ('5','Chihuahua: Chihuahua')
INSERT INTO regiones (id,name) values ('6','Chiapas: Tuxtla Gutiérrez')
INSERT INTO regiones (id,name) values ('7','Coahuila de Zaragoza: Saltillo')
INSERT INTO regiones (id,name) values ('8','Colima: Colima')
INSERT INTO regiones (id,name) values ('9','Durango: CD Victoria ')
INSERT INTO regiones (id,name) values ('10','Guanajuato: Guanajuato')
INSERT INTO regiones (id,name) values ('11','Guerrero: Chilpancingo de los Bravo')
INSERT INTO regiones (id,name) values ('12','Hidalgo: Pachuca de Soto')
INSERT INTO regiones (id,name) values ('13','Jalisco: Guadalajara')
INSERT INTO regiones (id,name) values ('14','México: Toluca de Lerdo')
INSERT INTO regiones (id,name) values ('15','Michoacán de Ocampo: Morelia')
INSERT INTO regiones (id,name) values ('16','Morelos: Cuernavaca')
INSERT INTO regiones (id,name) values ('17','Nayarit: Tepic')
INSERT INTO regiones (id,name) values ('18','Nuevo León: Monterrey')
INSERT INTO regiones (id,name) values ('19','Oaxaca: Oaxaca de Juárez')
INSERT INTO regiones (id,name) values ('20','Puebla: Puebla de Zaragoza')
INSERT INTO regiones (id,name) values ('21','Querétaro: Santiago de Querétaro')
INSERT INTO regiones (id,name) values ('22','Quintana Roo: Chetumal')
INSERT INTO regiones (id,name) values ('23','San Luis Potosí: San Luis Potosí')
INSERT INTO regiones (id,name) values ('24','Sinaloa: Culiacán Rosales')
INSERT INTO regiones (id,name) values ('25','Sonora: Hermosillo')
INSERT INTO regiones (id,name) values ('26','Tabasco: Villahermosa')
INSERT INTO regiones (id,name) values ('27','Tamaulipas: Ciudad Victoria')
INSERT INTO regiones (id,name) values ('28','Tlaxcala: Tlaxcala de Xicohténcatl')
INSERT INTO regiones (id,name) values ('29','Veracruz: Xalapa-Enríquez')
INSERT INTO regiones (id,name) values ('30','Yucatán: Mérida')
INSERT INTO regiones (id,name) values ('31','Zacatecas: Zacatecas')
INSERT INTO regiones (id,name) values ('32','CD MX')


INSERT INTO `usuarios` (region_id,username, password, enabled,name,last_name,last_name_sec,date_born,email) VALUES(32,'ADMIN','$2a$10$DPQT4opFy9vQtOzE42WUu.aarJLoe793m9DHsP3pZCLVExJGuBkaG',1 ,'Joe','bored','Castro','1995/7/1','joesgreen@gmail.com');


INSERT INTO `usuarios` (region_id,username, password, enabled,name,last_name,last_name_sec,date_born,email) VALUES(25,'USER','$2a$10$IbQhv6PXKeOv56/0n3fCce9yjb2ccJwx9KX6NagUgfGAhYqaCU5qq',1 ,'Erik','bored','Castillo','1998/9/11','green@gmail.com');


INSERT INTO `roles`  (name) Values('ROLE_USER'); 
INSERT INTO `roles`  (name) Values('ROLE_ADMIN');

INSERT INTO `usuarios_roles`(usuario_id, role_id) VALUES(1,2);
INSERT INTO `usuarios_roles`(usuario_id, role_id) VALUES(1,1);
INSERT INTO `usuarios_roles`(usuario_id, role_id) VALUES(2,1);



INSERT INTO pedidos(descrip,coment,usuario_id,create_at) VALUES('Equipo personal de computo',null,2,NOW());

INSERT INTO productos(name,create_at,price) VALUES('Hp pavilion core i7',NOW(),25000);
INSERT INTO productos(name,create_at,price) VALUES('teniss adidas',NOW(),1200);
INSERT INTO productos(name,create_at,price) VALUES('teniss nike',NOW(),1550);
INSERT INTO productos(name,create_at,price) VALUES('Macbook',NOW(),16000);
INSERT INTO productos(name,create_at,price) VALUES('Dell xps',NOW(),25000);
INSERT INTO productos(name,create_at,price) VALUES('Fc Barcelona Playera',NOW(),12000);
INSERT INTO productos(name,create_at,price) VALUES('Real Madrid  Playera',NOW(),12000);
INSERT INTO productos(name,create_at,price) VALUES('Balon de futbol de la marca Adida',NOW(),1000);



INSERT INTO pedidos_item(cash,pedido_id,producto_id) VALUES(1,1,1);










