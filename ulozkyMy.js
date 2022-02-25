// 1. Prohodit hodnoty dvou proměnných
// 1.1. Dvě proměnné a=5, b=10
let a = 5;
let b = 10;
// 1.2. Prohodit jejich hodnoty
let tmp = a; // 5, tmp = temporary, dočasná
a = b; // 10
b = tmp; // 5
// 1.3. Vypsat obě proměnné
// console.log(a, b);

// 2. Součet
// 2.1. Dvě proměnné a, b
a = 5;
b = 10;
// 2.2. Proměnná c = součet "a" a "b"
let c = a + b;
// 2.3. Nová funkce secist(a, b) vrací součet
function secist(a, b) {
    return a + b;
}
// 2.4. Vypsat secist(5, 10)  (v terminálu 15)
// console.log(secist(5, 10))

// 3. Konkatenace polí
// 3.1. Dvě pole a, b
a = [1, 2];
b = [5, 6];
// 3.2. Do proměnné c nové pole a, za něj b
//      (a=[1, 2], b=[5, 6], c=[1, 2, 5, 6])
//      a.concat(b)
c = a.concat(b);
// 3.3. Nová funkce spojitPole(a, b) vrací konkatenované pole
const spojitPole = (a, b) => {
    return a.concat(b);
};
// 3.4. Vypsat spojitPole([1, 2], [5, 6])
// console.log(spojitPole(a, b));


// 4. N-krát vypiš M
// 4.1. Dvě čísla m, n
let m = 5;
let n = 3;
// 4.2. n-krát vypsat "m"
// for (let i = 0; i < n; i++) {
//     console.log(m);
// }
// 4.3. funkce nkratVypisM(m, n)
function nkratVypisM(m, n) {
    for (let i = 0; i < n; i++) {
        console.log(m);
    }
}
// 4.4. Ověřit, že nkratVypisM(5, 3)
//     5
//     5
//     5
// nkratVypisM(5, 3);


// 5. Vytvoř pole, kde je N-krát M
// 5.1. Dvě proměnné m, n
m = 5;
n = 3;
// 5.2. Vytvoř pole "pole", kde je N-krát M
//   m=5, n=3,  pole=[5, 5, 5]
let pole = [];
for (let i = 0; i < n; i++) {
    pole.push(m);
}
// console.log(pole);
// 5.3. Vytvoř funkci poleNkratM(m, n), která bude vracet toto pole
function poleNkratM(m, n) {
    let pole = [];
    for (let i = 0; i < n; i++) {
        pole.push(m);
    }
    return pole;
}
// 5.4. Ověř funkčnost výpisem na konzoli
console.log(poleNkratM(3, 5));


// 6. Doplnit funkce odecist(a, b), nasobit(a, b), delit(a, b)
function odecist(a, b) {
    return a - b;
}

function nasobit(a, b) {
    return a * b;
}

function delit(a, b) {
    return a / b;
}

// 7. Mini-kalkulačka
// 7.1. Proměnná a, b, operace
a = 5
b = 10
const operace = "+"; // "-", "*", "/"

// 7.2.1. Pokud operace == "+", zavole secist()
// 7.2.2. Pokud operace == "-", zavole odecist()
// 7.2.3. Pokud operace == "/", zavole nasobit()
// 7.2.4. Pokud operace == "*", zavole delit()

// 7.3. Vytvořit funkci kalkulacka(operace, a, b)
/* kalkulacka("+", 5, 10) === 15
kalkulacka("-", 5, 10) === -5
kalkulacka("*", 5, 10) === 50
kalkulacka("/", 5, 10) === .5 */


// 8.1. Máme-li seznam objektů, jak z nich vytáhnout hodnoty z klíče key
// a vytvořit seznam hodnot?
const objs = [{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }];
pole = objs.map(x => x.key);
console.log(pole);

pole = [];
objs.forEach(x => {
    pole.push(x.key);
})
console.log(pole);

const numberObjs = [
    { left: 5, right: 10 },
    { left: 0, right: 0 },
    { left: 8, right: 3 },
];
// 8.1.1.1. Vytáhnout všechny hodnoty pod klíčem `left` => do pole [5, 0, 8]
// 8.1.1.2. Vytáhnout všechny hodnoty pod klíčem `right` => [10, 0, 3]
// 8.1.1.3. Sečíst `left` a `right` => [15, 0, 11]

let poleLeft = []
let poleRight = []
/* numberObjs.forEach(x => {
    poleLeft.push(x.left)
    poleRight.push(x.right)
}) */

/* function rozbiPole(pole, key){
pole = numberObjs.map(x => x.key)
}

let novePole1 = []
rozbiPole(novePole1, left)
console.log(novePole1); */

poleLeft = numberObjs.map(x => x.left)
poleRight = numberObjs.map(x => x.right)

console.log(poleLeft);
console.log(poleRight);
let scitanie = []
numberObjs.forEach(x => {
    scitanie.push(x.left + x.right)
});
console.log(scitanie);

// 8.2. Máme-li seznam uživatelů, jak z něj vytvořit seznam měst?
const uziv = [
    { name: "Adam", address: { city: "Brno" } },
    { name: "Eva", address: { city: "Olomouc" } },
    { name: "Peter", address: { city: "Praha" } },
];

let mesta = []
mesta = uziv.map(x => x.address.city)
console.log(mesta);


// 8.3. Máme-li objekt uživatelů, kde každý uživatel je označený svým ID,
const uzivObj = {
    1: { name: "Adam", surname: "Ondra" },
    2: { name: "Eva", surname: "Brzobohatá" },
};
let names = []
// 8.3.1 Jak z objektu vytvořit seznam křestních jmen? => ["Adam", "Eva"]
    //names = Object.values(uzivObj).map(x => x.name)
    Object.values(uzivObj).forEach(x => 
        names.push(x.name)
    )
console.log(names);

// 8.3.2 Jak z objektu vytvořit seznam přijmení? => ["Ondra", "Brzobohatá"]

let surnames = Object.values(uzivObj).map(x => x.surname)
console.log(surnames);

// 8.3.3 Jak z objektu vytvořit seznam celých jmen?
//        => ["Adam Ondra", "Eva Brzobohatá"]
let allNames = Object.values(uzivObj).map(x => x.name + " " + x.surname)
console.log(allNames);

// 9. Funkce, listy, objekty
//   {name: "A", surname: "B"} => "A B"
// 9.1 Vytvořte funkci, která z objektu uživatele vrátí jeho celé jméno
// 9.2 Vytvořte funkci, která ze seznamu uživatelů vrátí jejich celá jména
let uzivatel = {name: "A", surname: "B"} 
let poleUzivatelu = [
    {name: "A", surname: "B"},
    {name: "C", surname: "D"}
] 

function vratMeno(objekt){
    return objekt.name + " " + objekt.surname
}
console.log(vratMeno(uzivatel));

function vratMenoZPola(pole){
    return pole.map(x => x.name + " " + x.surname)
}
console.log(vratMenoZPola(poleUzivatelu));

// 9.3 Vytvořte funkci, která z objektu id:uživatel vrátí celá jména
function celeMenaUzivatelov(objekt){
    return Object.values(objekt).map(x => x.name + " " + x.surname)
}
console.log(celeMenaUzivatelov(uzivObj));

// 9.4 Bonus: Vytvořte funkci, která z objektu id:uživatel vrátí objekt id:"celé jméno"

// 10. OOP
// 10.1. Vytvořte funkci hello(name), která dostane jméno a vrátí řetězec "Hello, [name]!"
function hello(name){
    console.log("HELLO" + " " + name);
}
hello("Dávid")

// 10.2. Vytvořte třídu Person, která v konstruktoru dostane `name` a tu si uloží do this.name
// 10.3. Do třídy Person přidejte metodu "greet()", která vrátí řetězec "Hello, [name]!",
//       přičemž `name` bude jméno osoby, které dostala v konstruktoru
class Person{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(this);
        return "Hello" + " " + this.name
    }
}
let person = new Person("David")
console.log(person);
console.log(person.greet());
// 10.3. Do třídy Person přidejte metodu "greet()", která vrátí řetězec "Hello, [name]!",
//       přičemž `name` bude jméno osoby, které dostala v konstruktoru




