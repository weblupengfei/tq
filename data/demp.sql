SET NAMES UTF8;
DROP DATABASE IF EXISTS tq;
CREAtE DATABASE tq CHARSET=UTF8;
USE tq;
#间表
CREATE TABLE dept(
	did INT,
	dname VARCHAR(32),
	empCount INT
);
INSERT INTO dept VALUES('10','研发部','3');
INSERT INTO dept VALUES('20','市场部','1');
INSERT INTO dept VALUES('30','运营部','2');

#员工表
CREATE TABLE emp(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	dname VARCHAR(32),
	uname VARCHAR(32),
	upwd VARCHAR(32),
	sex INT,
	user_name VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16)
);
INSERT INTO emp VALUES(NULL,'研发部','dingding','123456','1','丁丁','dingding@tq.cn','15221501410');
INSERT INTO emp VALUES(NULL,'研发部','doudou','123456','0','豆豆','doudou@tq.cn','15221501411');
INSERT INTO emp VALUES(NULL,'研发部','dangdang','123456','1','当当','dangdang@tq.cn','15221501412');
INSERT INTO emp VALUES(NULL,'市场部','yaya','123456','0','丫丫','yaya@tq.cn','15221501413');
INSERT INTO emp VALUES(NULL,'运营部','mingming','123456','1','明明','mingming@tq.cn','15221501414');
INSERT INTO emp VALUES(NULL,'运营部','baibai','123456','0','白白','baibai@tq.cn','15221501415');