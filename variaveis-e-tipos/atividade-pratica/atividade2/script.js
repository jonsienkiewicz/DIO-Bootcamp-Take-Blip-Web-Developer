// SUBSTITUIR NUMEROS PARES DE UMA ARRAY POR 0
// SE ARRAY FOR VAZIO, NULA, UNDEFINED: RETORNA -1

function parPorZero(array){
    if((array.length === 0) || !array){
        return -1
    }
    
    for(let i = 0; i < array.length; i++){
        if((array[i])%2 == 0) {
            array[i] = 0
        }
    }
    return array;
}

let vetor = [1,3,4,6,80,33,23,90]

console.log(parPorZero(vetor))