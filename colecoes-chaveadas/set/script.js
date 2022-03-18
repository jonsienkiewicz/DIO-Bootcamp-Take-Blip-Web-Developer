const myArray = [1,1,2,2,3,4,5,6,7,8,2,1]
const mySet = new Set(myArray);

console.log(mySet)
// Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

mySet.add(1); // não adiciona, pois já tem o valor 1 armazenado
mySet.add(9);

console.log(mySet)
// Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

console.log(mySet.has(1))
// true
console.log(mySet.has(10))
// false

mySet.delete(9)
console.log(mySet)
// Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }
