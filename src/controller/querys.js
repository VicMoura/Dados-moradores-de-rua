let querys = []; 
let id;
let nome; 
let query_chamada;

nome = "Quantidade de pessoas por doença "; 
query_chamada = "select * from QUANTIDADE_PESSOAS_POR_DOENCA"
id = 1
query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
}
querys.push(query); 



id = 2;
nome = "Quantidade de pessoas por deficiencia "; 
query_chamada = "select * from QUANTIDADE_PESSOAS_POR_DEFICIENCIA"

query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
}

querys.push(query); 

nome = "Número de pessoas por estado";
query_chamada = "select * from QUANTIDADE_PESSOAS_POR_ESTADO; ";
id = 3;

query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};

querys.push(query); 

nome = "TOP 10 Bairros com maiores números de moradores"; 
query_chamada = "SELECT * from TOP_10_BAIRROS_MORADORES";
id = 4; 
query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};

querys.push(query); 

nome = "Pessoas por classificação de Idade";
query_chamada = "SELECT * FROM QUANTIDADE_PESSOAS_CLASSIFICACAO_IDADE"; 
id = 5;
query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};

querys.push(query); 

nome = "Pessoas por cor e raca";
query_chamada = "SELECT * FROM QUANTIDADE_PESSOAS_COR_RACA;"; 
 id = 6;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};

querys.push(query); 

nome = "Pessoas por sexo";
query_chamada = "SELECT * FROM  QUANTIDADE_PESSOAS_POR_SEXO "; 
 id = 7;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


nome = "Pessoas por gênero";
query_chamada = "SELECT * FROM QUANTIDADE_PESSOAS_POR_GENERO;"; 
 id = 8;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


nome = "Tem contato com família";
query_chamada = "SELECT * FROM QUANTIDADE_PESSOAS_CONTATO_FAMLIA;"; 
id = 9;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "Maiores motivos de dormir na rua";
query_chamada = "select * FROM MOTIVO_DORMIR_NA_RUA LIMIT 4;"; 
id = 10;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


nome = "Maiores problemas encontrados em abrigo";
query_chamada = "SELECT * FROM PROBLEMAS_ABRIGOS LIMIT 3"; 
id = 11;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


nome = "Pessoas com atividade remunerada";
query_chamada = "select * FROM POSSUI_ATIVIDADE_REMUNERADA;"; 
id = 12;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "Atividades Realizadas";
query_chamada = "select * from ATIVIDADE_TRABALHO"; 
id = 13;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "Escolaridade";
query_chamada = "select * FROM NIVEL_ESCOLARIDADE;"; 
id = 14;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "Usuário de droga";
query_chamada = "select * FROM FAZ_USO_DROGAS"; 
id = 15;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "O que precisam para sairam dessa situação?";
query_chamada = "SELECT * FROM NECESSIDADE_SAIR_SITUACAO;"; 
id = 16;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


module.exports = querys; 