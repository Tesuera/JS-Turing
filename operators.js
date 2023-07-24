// Operator

// NOTES
let num1 = "5";
let num2 = 3;
console.log("d ka sa tl");
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(Number("5") + 3); // = "5" + "3"

//arithmetic operators
 
console.log("addition", 1 + 2);
console.log("Subtraction", 4 - 1);
console.log("Mutiplication", 2 * 4);

console.log("Division", 4/2);
console.log("modulus", 5%2);

console.log("Exponentiation", 2**3);

let increment = 0;
increment++;
console.log("increment", increment);

let decrement = 3;
decrement--;
console.log("decrement", decrement);









// assignment operators
let a = 3; // equal

let b = 4;
b += 2; // b = b + 2;
console.log(b);

let c = 5;
c -= 2 //c = c - 2;
console.log(c);


// comparison operators


console.log("Comparison");
let a1 = 4;
let a2 = "4";
console.log(a1 == a2); // data type m kyi // true

console.log(a1 === a2); // data type kyi

console.log(a1 != a2); // not equal // false

console.log(a1 !== a2); // true

let t1 = "mg mg";
let t2 = 4;


console.log(t1 == t2); // false
console.log(t1 === t2); // false

console.log(t1 != t2); // true
console.log(t1 !== t2); // true


let t3 = 43 + 34; // 77
let t4 = "77";

console.log(t3 == t4); // true
console.log(t3 === t4); // false

console.log(t3 != t4); // false
console.log(t3 !== t4); // true

let t5 = 7;
let t6 = "7";

console.log(t5 > t6); // false
console.log(t5 < t6); // true
console.log(t5 >= t6); // true
console.log(t5 <= t6); // true


// Conditional statement
// if
// else


let t7 = 6;

if (t7 == 6) {
    console.log('t7 is 6');
} else if (t7 == 10) {
    console.log("t7 is 10");
} else {
    console.log('none of them');
}



// 0 => false
// 1 => true

let englishMark = 12;


let result = (englishMark < 40) ? "kya tl" : ((englishMark < 75) ? "pone mhan" : ((englishMark >= 75)? "ouou" : "br lrr ha"));
console.log(result)

if(englishMark < 40) {// true
    console.log("kya tl lee pl");
} else if(englishMark < 75) { // true
    console.log("tor p lrrr");
} else if (englishMark >= 75) {
    console.log("ou ou ou");
} else {
    console.log("br lrr ha");
}



// ternary operator
// short form of conditional statement

let children = 3;
let brfikfik = (children == 2) ? "ayy 2 youk" : "lee ko 2 youk";

let aaaa = (3 < 4) ? "ngl tl" : "ngl buu" ;
console.log(aaaa);




let human2 = {
    name : "mg mya",
    age: 14
}
let human3 = {
    name : "ma hla",
    age: 18
}

console.log("LOGICAL");
console.log("Logical AND (&&)" ,human2.name == "mg mya" && human3.name == "mg hla");
console.log("Logical OR (||)" ,human2.name == "mg mya" || human3.name == "mg hla");

if(human2.name == "mg mya" || human3.name == "mg hla") {
    console.log("mhan tl");
} else {
    console.log("mharr");
}


let bool1 = false;
if(!bool1) {
    console.log("mhr tl");
} else {
    console.log("mhn tl");
}


let ggg = 45;
if(!(ggg == 45)) {
    console.log("hok tl ha");
} else {
    console.log("nononon");
}
