const querys = require('../controller/querys.js'); 
const connection = require("../controller/connectionBanco.js");

let dados; 

connection.query(req.body.query_selecionada, (err, result) => {   
        dados = result; 
});

module.exports = dados; 