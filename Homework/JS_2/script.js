// Task 1

let a = 7;
let b = 9;

let taskOne = a * b;

console.log("Result of multiplication:", taskOne);



// Task 2

let c = 7;
let d = 9;

let taskTwo = document.querySelector('.task-2');

let result = c / d;

taskTwo.textContent = result;


// Task 3

let e = 3;
let f = 5;

let mult = e * f;

let taskThree = document.querySelector('.task-3')

taskThree.textContent = mult;

// Task 4

let e1 = '3';
let f1 = 5;

let addition = e1 + f1;

let taskFour = document.querySelector('.task-4');

taskFour.textContent = addition + '. ' + 'Разница в том, что число "3" является строкой (из-за кавычек), поэтому 3 и 5 просто склеиваются.';

// Task 5

let e2 = 3;
let f2 = 0;

let division = e2 / f2;

let taskFive = document.querySelector('.task-5');

taskFive.textContent = division;

// Task 6

let e3 = 3;
let f3 = 'Hello';

let tskSix = e3 + f3;

let taskSix = document.querySelector('.task-6');

taskSix.textContent = tskSix;

// Task 7

let e4 = 3;
let f4 = 'Hello';

let tskSeven = e4 * f4;

let taskSeven = document.querySelector('.task-7');

taskSeven.textContent = tskSeven;

// Task 8

function showInput() {
    var inputValue = document.getElementById("inputValue").value;
    document.getElementById("outputResult").innerHTML = "Result: " + inputValue;
}

// Task 9

function showInput() {
    var inputValue = document.getElementById("inputValue").value;
    document.getElementById("outputResult").innerHTML = "Result: " + inputValue;
}

// Task 10

// const btn = document.querySelector('.btn');
// const inp = document.querySelector('.inp');
// const multRes = document.querySelector('.multRes');

// btn.addEventListener('click', multFunc);

// function multFunc() {
// 	multRes.textContent = multRes.textContent + inp.value * 20;
// } 

// Task 11

// const btn = document.querySelector('.btn-11');
// const inp = document.querySelector('.inp-11');
// const concatResult = document.querySelector('.concat-result');

// btn.addEventListener('click', concFunc);

// function concFunc() {
//     concatResult.textContent = inp.value + 55;
// }

// Task 12

// const btn = document.querySelector('.btn-12');
// const inp = document.querySelector('.inp-12');
// const input = document.querySelector('.input-12');
// const fullName = document.querySelector('.fullName');


// btn.addEventListener('click', nameFunc);

// function nameFunc() {
//    fullName.textContent = 'Hello ' + inp.value + (' ') + input.value;
// }

// Task 13

// const btn = document.querySelector('.b-13');
// const inp1 = document.querySelector('.i-13-1');
// const inp2 = document.querySelector('.i-13-2');
// const sum = document.querySelector('.out-13');

// btn.addEventListener('click', t13);

// function t13() {
//     const a = inp1.value;
//     const b = inp2.value;

//     sum.textContent = Number(a) + Number(b);
// }

// Task 14 

// const btn = document.querySelector('.b-14');
// const inp = document.querySelector('.i-14');

// btn.addEventListener('click', t14);

// function t14() {
//     inp.value = 'Go';
// }

// Task 15 

// const btn = document.querySelector('.b-15');
// const inp = document.querySelector('.i-15');

// btn.addEventListener('click', t15);

// function t15() {
//     inp.style.border = "4px solid red";
// }

// Task 16

// const btn = document.querySelector('.b-16');
// const inp1 = document.querySelector('.i-16-1');
// const inp2 = document.querySelector('.i-16-2');
// const sum = document.querySelector('.out-16');

// btn.addEventListener('click', t16);

// function t16() {
//     const a = Number(inp1.value);
//     const b = Number(inp2.value);

//     sum.textContent = a + b;
// }

// Task 17

// const btn = document.querySelector('.b18');
// const inp = document.querySelector('.i-17');

// btn.addEventListener('click', t17);

// function t17() {
//     const a = Number(inp.value);
// }

// Task 18

// const btn = document.querySelector(".b-18");
// const inp = document.querySelector('.i-18');
// const res = document.querySelector('.out-18');

// btn.addEventListener('click', t18);

// function t18() {
//     const a = inp.value;

//     res.textContent = parseFloat(a);
// }

// Task 19

// const btn = document.querySelector(".b-19");
// const inp1 = document.querySelector('.i-19-1');
// const inp2 = document.querySelector('.i-19-2');
// const sum = document.querySelector('.out-19');

// btn.addEventListener('click', t19);

// function t19() {
//     const a = inp1.value;
//     const b = inp2.value;

//     sum.textContent = Number(a) + Number(b);
// }

// Task 20

const btn = document.querySelector('.b-20');
const click = document.querySelector('.out-20');
let clickCounter = 0;

btn.addEventListener('click', t20);

function t20() {
    clickCounter++;

    click.textContent = 'Количество нажатий: ' + clickCounter;
}



















