// minha solução

function validaArray(arr,num){
    
    try {
        if (!arr && !num) throw 'ReferenceError'
    } catch (error) {
        console.log(error)
    }

    try {
       if (typeof arr !== 'object') throw 'TypeError'
    } catch (error) {
        console.log(error)
    }
   
    try {
        if (typeof num !== 'number') throw 'TypeError'
    } catch (error) {
        console.log(error)
    }

    try {
        if (arr.length !== num) throw 'RangeError'
    } catch (error) {
        console.log(error)
    }

}

validaArray([1,2,3,4],4) // não retorna nenhum erro

// solução da instrutora

function validaArray2(arr,num){
    
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros')

        if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object')

        if (typeof num !== 'number') throw new TypeError('O número precisa ser do tipo number')

        if (arr.length !== num) throw new RangeError('Tamanho da array incompativel com o número')

        return arr;

    } catch (error) {
        if(error instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!')
            console.log(error.message)
        } else if (error instanceof TypeError) {
            console.log('Este erro é um TypeError!')
            console.log(error.message)
        } else if (error instanceof RangeError) {
            console.log('Este erro é um RangeError!')
            console.log(error.message)
        } else {
            console.log('Ocorreu um tipo de erro não esperado' + error)
        }
    }
}

console.log(validaArray2([1,2,3,4,5],5))