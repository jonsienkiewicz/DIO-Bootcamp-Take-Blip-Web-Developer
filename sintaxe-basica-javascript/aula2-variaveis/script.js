// tipos primitivos

// boolean

var VouF = false;

console.log(typeof(VouF));

// number

var numeroQualquer = 1;

console.log(typeof(numeroQualquer));

// string

var nome = 'Jonathan';
console.log(typeof(nome));

// function

var funcao = function olaMundo(){
    console.log('Olá, Mundo');
}

console.log(typeof(funcao));

// declaração de variáveis

var meuNome = 'Jonathan'; // escopo global e local

console.log(meuNome);

let seuNome = 'Diana'; // por convenção, a variável let só é utilizada em escopo local (ex.: dentro de funções)

console.log(seuNome);

const SOMOS = 'humanos'; // POR CONVENÇAO A VARIÁVEL CONSTANTE É DECLARADA EM LETRA MAIÚSCULA E NAO PODE SER ALTERADA

console.log(SOMOS);

// ESCOPO

var escoloGlobal = 'global';

console.log(escoloGlobal)

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}

escopoLocal();
 
// atribuição, comparação e comparação idêntica

 var atribuicao = 'Jonathan'

 var comparacao = '0' == 0;
 console.log(comparacao) // retorno true

 var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica) // retorna false

// operadores aritmeticos
//adicao
var adicao = 1 + 1;
console.log(adicao) // retorna 2
//subtracao
var subtracao = 2-1;
console.log(subtracao) // retorna 1
// multiplicação
var multiplicacao = 2*4;
console.log(multiplicacao) // retorna 8
// divisao real
var divisaoReal = 8/2;
console.log(divisaoReal) // retorna 4
// resto de uma divisao inteira
var resto = 5%2;
console.log(resto) // ira retornar 1
// potenciacao

var potenciacao = 2**10;
console.log(potenciacao) // retorna 1024

// OPERADORES RELACIONAIS
// maior que

//menor que

// maior ou igual a

// menor ou igual a

// OPERADORES LOGICOS
// && - E
// || - OU
// ! - NAO

