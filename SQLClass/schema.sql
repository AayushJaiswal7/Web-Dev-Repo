SHOW TABLES;
-- next sql cli->lusrllocallmysqllbinlmysql -u root -p
-- source schema.sql(in cli or terminal)
CREATE TABLE user{
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50)UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
}