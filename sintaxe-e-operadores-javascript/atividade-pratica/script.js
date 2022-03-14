var exSintaxeEOperadores = function(n1,n2){
    let soma = n1+n2;
    let string1;
    let string2;
    let string3;

    if(n1==n2){
        string1 = 'são';
    } else {
        string1 = 'não são';
    }

    if(soma > 10){
        string2 = 'maior'
    } else {
        string2 = 'menor'
    }

    if(soma < 20) {
        string3 = 'menor';
    } else {
        string3 = 'maior'
    }

    console.log(`Os números ${n1} e ${n2} ${string1} iguais. Sua soma é ${soma}, que é ${string2} que 10 e ${string3} que 20.`)
    
}

exSintaxeEOperadores(1,2);