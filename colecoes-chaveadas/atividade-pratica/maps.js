// node pra output

function getAdmins(map){
    
    let admins = [];

    for([key,value] of map) {
        if (value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const myMap = new Map();

myMap.set('Luiz','Admin')
myMap.set('Jonathan','Admin')
myMap.set('Jorge','User')
myMap.set('Stephany','Admin')

console.log(getAdmins(myMap))