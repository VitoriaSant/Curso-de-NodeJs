Esse arquivo é para registros de comandos que são possiveis no MySQL 
Ele não é executado

CMD 
Mysql -h localhost -u root -p

SHOW DATABASES;
CREATE DATABASE nome;
USE nomedobanco;
SHOW TABLES;
DESCRIBE nome da tabela; // Estrutura da tabela

CREATE TABLE nome(
	nome VARCHAR(50), 
	email VARCHAR(100),
	idade INT()
);

INSERT INTO nome da tabela(nome, email, idade) VALUES (
	"Vitoria",
	"svitoria9815@gmail.com",
	22
);

SELECT * FROM nome da tabela;
SELECT * FROM nome da tabela WHERE idade = 10;

DELETE FROM nome da tabela;
DELETE FROM nome da tabela WHERE nome = "Vitoria";

UPDATE nome da tabela SET campo que vai ser alterado  = "Novo valor nesse campo" WHERE campo = para quem vai ser alterado


