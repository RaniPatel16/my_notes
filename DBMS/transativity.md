CREATE DATABASE bank_db;

USE bank_db;

CREATE TABLE accounts (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    balance DECIMAL(10,2)
);
INSERT INTO accounts VALUES
(1, 'Amit', 5000),
(2, 'Rahul', 3000);

SELECT * FROM accounts;
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;

SELECT * FROM accounts;



UPDATE accounts 
SET balance = 5000 
WHERE id = 1;

UPDATE accounts 
SET balance = 3000 
WHERE id = 2;

START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

ROLLBACK;

SELECT * FROM accounts;


START TRANSACTION;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

SAVEPOINT point1;

UPDATE accounts
SET balance = balance + 500
WHERE id = 2;

ROLLBACK TO point1;

COMMIT;

SELECT * FROM accounts;
