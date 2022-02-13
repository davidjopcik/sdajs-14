let pole = [1, 2, 3, 4, 5, 6]

console.log(pole.filter(x => {
    return x%2 === 0
}));

let novePole = []
for (let i = 0; i < pole.length; i++) {
    if(pole[i]%2 ===0 ){
        novePole.push(pole[i])
    }
}

pole.forEach(x => {
   if(x%2 ===0) {
    novePole.push(x)
   } 
})

console.log(novePole);


