const array = [1,2,3,4,5];


function multiplicaPorDois(arr){
    return arr.map((item) => item * 2)
}

console.log(multiplicaPorDois(array))

// o array original permanece inalterado

console.log(array)