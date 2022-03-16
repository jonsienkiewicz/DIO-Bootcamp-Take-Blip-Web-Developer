// A PALAVRA É PALINDROMO?

function verificaPalindromo(palavra) {
    if(palavra == (palavra.split('').reverse().toString().replaceAll(',',''))){
        console.log('A palavra é um palíndromo.')
    } else {
        console.log('A palavra não é um palíndromo')
    }
}

verificaPalindromo('osso')