const mysql = require("mysql");

//Conectando o banco de dados
const connection = mysql.createConnection({
    host : 'localhost', 
    user : 'root', 
    password : '26575694', 
    database : 'proj_final_bd'
});

module.exports = connection; 