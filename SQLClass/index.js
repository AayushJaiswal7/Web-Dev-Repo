const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: "mysql",
});

let getRandomUser = () => {
  return [

    faker.string.uuid(),
    faker.internet.username(), 
    faker.internet.email(),
    faker.internet.password(),
  ];
};
//Inserting new Data
let q = "INSERT INTO user(id,username, email,password)VALUES ?";
// let users = [["123", "123_newuser", "abc@gmail.com", "abc"],
//           ["123", "123_newuser", "abc@gmail.com", "abc"]];
let data=[];
for (let i = 0; i <=100; i++) {
  data.user(getRandomUser());
    
}
// try {

//   connection.query(q, user, (err, result) => {
//     if (err) throw err;
//     console.log(result);

//   })
// } catch (err) {
//   console.log(err);

// }

connection.end();


console.log(getRandomUser());
// /usr/local/mysql/bin/mysql -u root -p