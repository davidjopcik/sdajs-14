/* 
const pole = [1, 2, 3, 4, 5, 6];
const novePole = [];
pole.forEach((x) => {
  if (x % 2 === 0) {
    novePole.push(x);
  }
});
console.log(novePole);
function filtrovanie(pole, filtrovanie) {
const novePole = [];
  pole.forEach((x) => {
    if (filtrovanie(x)) {
      novePole.push(x);
    }
  });
  console.log(novePole);
  return novePole
}
console.log(filtrovanie(pole, x => x > 3 && x < 5))
 */



//cyklus while - vypis do pola od 10 do 20
let pole = []
let cislo = 10

while (cislo <= 20) {
    cislo % 2 === 0
        pole.push(cislo)
        cislo++;
    }
console.log(pole);
console.log("--------");


//cyklus while + parne
let pole2 = []
let cislo2 = 10

    while (cislo2 <= 20) {
        if(cislo2 % 2 === 0){
            pole2.push(cislo2)
            }
            cislo2++;
        }
console.log(pole2);
console.log("--------");

//cyklus for
let pole3 = []
let cislo3 = 10
for (let i = 0; i < 20; i++) {
    pole3.push(cislo3)
    cislo3 +=1
    if (cislo3 === 20) {
        break
    }
}
console.log(pole3);
console.log("--------");





