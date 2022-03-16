// UTILIZANDO NODE PARA VERIFICAR OS OUTPUTS

//javascript é uma linguagem de tipagem dinâmica

let um = 'um';

console.log(typeof um) // string

um = 1;

console.log(typeof um) // number

// data types can be changed

// STRING

let nome = 'Jonathan'
let sobrenome = 'Sienkiewicz'

let concatenado = nome.concat(sobrenome) // retorna -> JonathanSienkiewicz

console.log(typeof concatenado) // -> string

// Strings como objetos

let exemplo = new String('blablabla')

console.log(typeof exemplo) // retorna -> object

// strings são iteráveis, mesmo a string em questão sendo de tipo primitivo

console.log(nome[0]) // -> J

// template strings

concatenadoComEspaço = `${nome} ${sobrenome}`

console.log(concatenadoComEspaço) // Jonathan Sienkiewicz

// NUMBER

let num = 100

console.log(typeof num) // -> number

// Math. -> possui varios métodos

console.log(Math.PI) // -> 3,14

// BOOLEAN

let validation = 3 === 0

console.log(validation) // -> false

validation = 3 === 3

console.log(validation) // -> true

// ARRAY

let array = [] // o array é um objeto

array.push(3) // adiciona um elemento no final da array

console.log(array) // -> [3]

array.push(2)

console.log(array) // -> [3, 2]

array.pop() // remove o ultimo elemento

array.push(2)

array.push(5)

array.shift() // remove o primeiro elemento

array.unshift(1) // adiciona 1 ao inicio do array

console.log(array) // -> [1,2,5]

array.reverse()

console.log(array) // [5,2,1]

// OBJETOS

let obj = {}

console.log(typeof obj) // -> object

obj.name = 'Jonathan'

obj.age = '31'

console.log(obj) // { name: 'Jonathan', age: '31' }

console.log(Object.values(obj)) // ['Jonathan', '30']

console.log(Object.keys(obj)) // ['name', 'age']

let person = {
    name: 'John',
    age: 21,
    adress: 'rua 7'
}

console.log(person['name']) // John
console.log(person.name) // John