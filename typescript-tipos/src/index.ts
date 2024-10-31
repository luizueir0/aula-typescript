"use strict";

// STRING -----------------------------------------------------------------------------------------------------------------

var primeiraVariavel = "Sou uma variavel";
console.log("O valor da variavel é:",primeiraVariavel);

var variavelPorAnotacao: string;
variavelPorAnotacao = 'antonio';
console.log("O valor da segunda variavel é:",variavelPorAnotacao); 

// NUMERICO ---------------------------------------------------------------------------------------------------------------

var tipoNumerico = 1
console.log("O valor de tipoNumerico é:",tipoNumerico)

var tipoNumericoAnotacao: number;
tipoNumericoAnotacao = 2;
console.log("O valor de tipoNumericoAnotacao é:",tipoNumericoAnotacao)

// TRUE ou FALSE ----------------------------------------------------------------------------------------------------------

var tipoBoolean = true;
console.log("O valor de tipoBoolean é:",tipoBoolean)

var tipoBooleanAnotacao: boolean;
tipoBooleanAnotacao = true;
console.log("O valor de tipoBooleanAnotacao é:",tipoBooleanAnotacao)

// VALIDADE ---------------------------------------------------------------------------------------------------------------

var isValid: boolean = true
var studentName: string = "";
var amount: number = 0; 

if (isValid === true){ // comparar se é verdadeiro E tipo boolean

    studentName = "Luis Rigoni";
    amount = 100;

}

console.log(`O aluno ${studentName}, vai receber um cheque de ${amount} do professor (real)`);

// ARRAY -----------------------------------------------------------------------------------------------------------------

var cidades = ['São Paulo', 'Jundiaí', 'Itatiba', 'Várzea Paulista']
console.log("A quantidade de cidades é:",cidades.length)

cidades.push('Cajamar') // Força adição
console.log("A quantidade de cidades é:",cidades.length)

for (let i = 0; i < cidades.length; i++) {

    console.log(`A cidade da
        posição ${i+1} é: ${cidades[i]}`)
    
}

cidades.pop(); // Força remoção
console.log("A quantidade de cidades é:",cidades.length)

// OBJETO ---------------------------------------------------------------------------------------------------------------

var meuObjeto = {

    codigo: 1,
    nome: "Teclado",
    preco: 65.35,
    ativo: true,
    estoque: {

        armazem: "AB-1",
        quantidade: 10

    }

}

console.log(`Produto:
 ID: ${meuObjeto.codigo}
 Nome: ${meuObjeto.nome}
 Preço: R$${meuObjeto.preco}
 Ativo: ${meuObjeto.ativo}
            
 Estoque:
 Armazem: ${meuObjeto.estoque.armazem}
 Quantidade: ${meuObjeto.estoque.quantidade}`);

// VERDADE -------------------------------------------------------------------------------------------------------------

var suspeito;

suspeito = "Eu sou uma variável string"; // string
console.log(typeof suspeito);

console.log("O valor de suspeito é:",suspeito);

suspeito = 1; // numerico
console.log("O valor de suspeito é:",suspeito);

suspeito = false; // boorean
console.log("O valor de suspeito é:",suspeito);

suspeito = { // objeto

    estado: "SP"

}
console.log("O valor de suspeito é:",suspeito);

suspeito = () => { // função
 
    console.log("Agora é uma função");

}

suspeito();

// UNDEFINED ---------------------------------------------------------------------------------------------------------

var nome;
console.log("O valor de nome é:",nome);

if(nome == null){

    console.log("É null")

}

if(nome == undefined){

    console.log("É undefined")

}

// Outra alternativa de IF: var ultimaVariavel : number | undefined = null