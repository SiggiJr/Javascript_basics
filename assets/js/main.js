"use strict";

console.clear();

//# ===== Console-Log 1_1 =====

console.log("Seite 1:");

let a = 12;
let b = a*3;
console.log(b);

document.write(b);

console.log("Seite 2:");

console.log("Hello World");
console.log("Anton");

let firstName = "Anton";
console.log(firstName);

let age = 28;

console.log(age);

console.log("Seite 3:");

let job = "Trainer";
console.log(job);
let married = true;

console.log("Married:", married);

console.log(`${firstName} ist ${age} Jahre alt, von Beruf ${job} und ist verheiratet: ${married}`);

console.log("%c ===================================================================", "background: red; color: white");

//# ====== document.write() 1_1 ======

document.write("<h1>Hello World!</h1>");
document.write("<p>Have a nice day!</p>");

let myText = "Hello again";
document.write(myText);

let vorname = "Felix";
let nachname = "Siegert";

document.write(`<p>Vorname: ${vorname}</p>`);
document.write(`<p>Nachname: ${nachname}</p>`);

//# ====== window-object 1_4 ======

// window.alert("Hallo Welt");
// window.prompt("Bitte geben Sie Ihren Namen ein.");
// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
// window.confirm("Stimmen Sie meiner Meinung zu?");

// Seite 2

// const alter = prompt("Gib mir bitte dein Alter:");
// console.log(alter);

// const c = 5;
// const d = c * 5 - 3;

// window.alert(d);

// const mann = "Robert Wadlow ist der größte Mann der Welt:";

// const grosse = "2,72m";

// confirm(mann + grosse);

//# ====== Variablen 1_5 ======

const carName = "BMW";
console.log(carName);

const x = 150;
console.log(x);

const y = 50;
console.log(y);

const z = x + y;
console.log(z);

let firstName2;
let lastName2;
let age2;

firstName2 = "John";
lastName2 = "Doe";
age2 = 28;
console.log(`${firstName2} ${lastName2} ist ${age2} Jahre alt.`);

console.log("%c ===================================================================", "background: red; color: white");

//# ====== Variablen 1_6 ======

let xx = 34;
console.log(xx);

xx = 67;
console.log(xx);

const yy = 34;
console.log(yy);

// yy = 67;
console.log(`const ist eine Konstante und kann nicht überschrieben werden!`);

console.log("%c ===================================================================", "background: red; color: white");

//# ====== String Methods 1_11 ======

let hello = "Hello";
const world = "World<br>";

const helloWorld = hello + world;

document.write(helloWorld);

const n = hello + " " + world;
document.write(n);

hello += "World";

document.write(hello);

let meinString = "Ich bin Erster";
meinString += " Ich komme auf Platz zwei";
console.log(meinString);

console.log("%c ===================================================================", "background: red; color: white");

//# ====== arithmetics 1_12 ======

const score = 5 + 5 * 10;
console.log("Ergebnis: " + score);

let score2 = 0;

score2 =score2 + 10;
console.log("Ergebnis: ", + score2);

score2 += 10;
console.log("Ergebnis: ", + score2);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;
zahl++;
console.log("increment: ",zahl);

zahl--;
console.log("dekrement: ", zahl);

//# ====== arithmetics 1_13 ======

const addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

const subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

const multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

const division_operator = 4 / 2;
console.log("division: " + division_operator);

const modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);