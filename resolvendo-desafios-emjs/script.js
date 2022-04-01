var l = 6;
var c = 9;

function blackOrWhite(l, c) {
    if((l%2)===(c%2)){
        return 1;
    }    
    return 0;
}

console.log(blackOrWhite(l,c))