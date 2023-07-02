let querys = []; 
let id;
let nome; 
let query_chamada;

nome = "Quantidade de pessoas por doença "; 
query_chamada = "select categoria as label, count(pessoa.id) as data from pessoa inner join pessoa_problema_saude  on pessoa.id = pessoa_problema_saude.id_pessoa inner join problema_saude "
+ 
"on pessoa_problema_saude.id_problema_saude = problema_saude.id "
+
"where pessoa_problema_saude.ns_nr = 'false' "
+
"group by categoria order by count(pessoa.id) desc;"
id = 1

query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
}

querys.push(query); 

id = 2;
nome = "Quantidade de pessoas por deficiencia "; 
query_chamada = "select categoria as label, count(pessoa.id) as data from pessoa inner join pessoa_deficiencia  on pessoa.id = pessoa_deficiencia.id_pessoa inner join deficiencia "
+ 
"on pessoa_deficiencia.id_deficiencia = deficiencia.id "
+
"where deficiencia.categoria != 'nao possui' "
+
"group by categoria  order by count(pessoa.id) desc;";

query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
}

querys.push(query); 

nome = "Número de pessoas por estado";
query_chamada = "select categoria as label, count(pessoa.id) as data from pessoa  inner join estado on pessoa.id_origem_estado = estado.id where categoria != 'Sem Informação' group by categoria order by count(id) desc; ";
id = 3;

query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};

nome = "Quantidade de pessoa atendidas por Bairro"; 
query_chamada = "SELECT Bairro_7_dias as label, count(pessoa.id) as data from pessoa " +
"inner join pessoa_atendimento	on pessoa.id = pessoa_atendimento.id_pessoa " +
" inner join atendimento on atendimento.id = pessoa_atendimento.id_atendimento where Bairro_7_dias != 'NÃO SE APLICA' " + 
" group by Bairro_7_dias order by count(pessoa.id)  desc ;" ;
id = 4; 

query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};

querys.push(query); 

nome = "Pessoas por classificação de Idade";
query_chamada = "SELECT classificacao_idade.categoria as label, count(pessoa.id) as data from pessoa inner join classificacao_idade " + 
 " on classificacao_idade.id = pessoa.id_classificacao_idade where classificacao_idade.categoria != 'Sem informação' group by classificacao_idade.categoria  " +
 "order by count(pessoa.id) desc; "; 
 id = 5;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};

querys.push(query); 

nome = "Pessoas por cor e raca";
query_chamada = "SELECT cor_raca.categoria as label, count(pessoa.id) as data from pessoa inner join cor_raca " + 
 " on cor_raca.id = pessoa.id_cor_raca where cor_raca.categoria != 'Sem informação'  group by cor_raca.categoria " +
 "order by count(pessoa.id) desc; "; 
 id = 6;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};

querys.push(query); 

nome = "Pessoas por sexo";
query_chamada = "SELECT sexo.categoria as label, count(pessoa.id) as data from pessoa inner join sexo " + 
 " on sexo.id = pessoa.id_sexo where sexo.categoria != 'Sem informação'  group by sexo.categoria " +
 "order by count(pessoa.id) desc; "; 
 id = 7;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


nome = "Pessoas por gênero";
query_chamada = "SELECT genero.categoria as label, count(pessoa.id) as data from pessoa inner join genero " + 
 " on genero.id = pessoa.id_genero where genero.categoria != 'Sem informação'  group by genero.categoria " +
 "order by count(pessoa.id) desc; "; 
 id = 8;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


nome = "Tem contato com família";
query_chamada = "select Contato_familia as label, count(id) as data from pessoa where Contato_familia != '' group by Contato_familia order by count(id) desc;"; 
id = 9;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "Motivo dormir na rua";
query_chamada = "select Motivo_dormir_rua as label, count(id) as data from pessoa where Motivo_dormir_rua != ''  group by  Motivo_dormir_rua order by count(id) desc;"; 
id = 10;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


nome = "Problema encontrados em abrigo";
query_chamada = "select Principal_problema_abrigo as label, count(id) as data from pessoa where Principal_problema_abrigo != ''  group by  Principal_problema_abrigo order by count(id) desc;"; 
id = 11;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


nome = "Pessoas com atividade remunerada";
query_chamada = "select Atividade_remunerada as label, count(id) as data from pessoa where Atividade_remunerada != ''  group by  Atividade_remunerada order by count(id) desc;"; 
id = 12;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "Atividades Realizadas (Remunerada)";
query_chamada = "select Atividade_realizada as label, count(id) as data from pessoa where Atividade_realizada != ''  group by  Atividade_realizada order by count(id) desc;"; 
id = 13;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "Escolaridade";
query_chamada = "select Escolaridade_corrigida as label, count(id) as data from pessoa where Escolaridade_corrigida != '' and Escolaridade_corrigida != 'NÃO SE APLICA'  group by  Escolaridade_corrigida order by count(id) desc;"; 
id = 14;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "Usuário de droga";
query_chamada = "select Faz_uso_drogas as label, count(id) as data from pessoa where Faz_uso_drogas != ''  group by  Faz_uso_drogas order by count(id) desc;"; 
id = 15;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 

nome = "Necessidade de sair da situacao";
query_chamada = "select necessidade_sair_situacao as label, count(id) as data from pessoa where necessidade_sair_situacao != ''  group by  necessidade_sair_situacao order by count(id) desc;"; 
id = 16;

 query = {
    'nome' : nome,
    'query' : query_chamada,
    'id' : id 
};


querys.push(query); 


module.exports = querys; 