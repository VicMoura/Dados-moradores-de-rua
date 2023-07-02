
const express = require("express"); 
const app = express(); 
const querys = require("./controller/querys.js")
var bodyParser = require('body-parser')

//View Engine 
app.set('view engine', 'ejs'); 
app.set('views', 'views'); 


//Body parser
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); 

//Static 
app.use(express.static('views/public'));
app.use(express.static('views/img'));


const userRouter = require("./router/AboutRouter");
const dadosRouter = require("./router/VisualizarDados");
//const teste = require("./controller/Dados");

app.use('/', userRouter);
app.use('/', dadosRouter);


app.get("/", (req, res) => {
    

    res.render('index.ejs', {querys : querys});


});

app.listen(8080, ()=>{
    console.log('SERVIDOR FUNCIONANDO');
});