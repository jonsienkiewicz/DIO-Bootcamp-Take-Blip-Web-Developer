// UTILIZANDO NODE PARA VERIFICAR OS OUTPUTS
// var e let

var abluble = "Olá, mundo"

abluble = "Hello, World"

console.log(abluble) // Hello, world - variaveis do tipo var podem ser reatribuidas

var abluble = "Olá, recruiter! :)"

console.log(abluble) // Olá, recruiter! :) - variaveis do tipo var podem ser redeclaradas

let meh = "Oi, você! :)"

meh = "Tudo bem contigo?"

console.log(meh) // tudo bem contigo? - variaveis do tipo let podem ser reatribuidas

// let meh = "Hey!" - erro - mas, nao podem ser redeclaradas

// const

const SE_LIGA_HEIN = "Se liga, hein!" // por convensão, essas variaveis devem ser declaradas em SNAKE_CASE_UPPER_CASE

console.log(SE_LIGA_HEIN)

// const SE_LIGA_HEIN = "Oi!" // não podem ser redeclaradas

// SE_LIGA_HEIN = "hey!"; // não podem ser reatribuidas

// HOISTING

// apenas a variavel var pode ser declarada após ser atribuida 

me_declarando = "Te amo!";

var me_declarando;

console.log(me_declarando)
