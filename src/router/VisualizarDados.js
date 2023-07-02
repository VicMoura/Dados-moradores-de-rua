const express = require("express"); 
const router  = express.Router(); 
const connection = require("../controller/connectionBanco.js");
const querys = require("../controller/querys.js");



router.post('/visualizarDados', (req, res) => {


        if(req.body.query_selecionada === '0'){
        
                res.render('index.ejs', {querys : querys});
        }else{
                let query_utilizada =  querys.filter(query => query.id.toString() === req.body.query_selecionada)[0]; 
                console.log(req.body.query_selecionada);
                console.log(query_utilizada);
                connection.query(query_utilizada.query, (err, result) => {
                        console.log(result);
                        res.render('templates/dados.ejs', {result : JSON.parse(JSON.stringify(result)), query_utilizada : query_utilizada.nome})
                });
        }
        

        


});



module.exports = router; 