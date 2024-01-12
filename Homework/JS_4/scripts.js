// Task 1

const arr1 = [1, 'hello', true];
const btn = document.querySelector('.b-1');
const result = document.querySelector('.out-1');

btn.addEventListener('click', out);

function out() {
    result.textContent = arr1;
}

// Task 2

const arr2 = [2, 'world', false];
const btn2 = document.querySelector('.b-2');
const out2 = document.querySelector('.out-2');

btn2.addEventListener('click', showOut);

function showOut() {
    out2.textContent = arr2;
}

// Task 3

const arr3 = [1, 2, 3, 4, 5];
const out3 = document.querySelector('.out-3');

out3.textContent = arr3.length;

// Task 4

const ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const out4 = document.querySelector('.out-4');

out4.textContent = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];

//Task 5

const ar5 = [1, 2, 3, 4, 5, 6, 7, 8];
const out5 = document.querySelector('.out-5');

const sum = ar5[0] + ar5[2] + ar5[3];

out5.textContent = sum;

//Task 6

const ar6 = ['Tonya', ' Virgo', ' September'];
const out6 = document.querySelector('.out-6');

out6.textContent = ar6; 

//Task 7

const ar7 = ['china', ' india', ' brazil', ' japan', ' egypt'];
const out7 = document.querySelector('.out-7');

function showOut7() {
    ar7[5] = ' Italy';
    ar7[6] = ' turkey';
    ar7[7] = ' Vietnam';
}

showOut7();

out7.textContent = ar7;

//Task 8

const ar8 = [1, 2, 3, 4, 5, 6, 7];
const out8 = document.querySelector('.out-8');
const len = document.querySelector('.out-8-1');

function showOut8() {
    ar8[3] = '- 3.14';
    ar8[4] = '- 14';
    ar8[6] = '- 5';
}

showOut8();

out8.textContent = ar8;
len.textContent = ar8.length;

//Task 9

const ar9 = [100, 200, 300, 400, 700, 121];
const lastIndex = ar9.length - 1;
const out9 = document.querySelector('.out-9');

out9.textContent = ar9[lastIndex];

//Task 10

const arr10 = [100, 200, 300, 400, 700, 121];
const lastIndex10 = arr10.length - 1;
const sum10 = arr10[0] + arr10[lastIndex10];
const out10 = document.querySelector('.out-10');

out10.textContent = sum10;

//Task 11

// const ar11 = [2, 3, 4, 5, 6, 7];
// const out11 = document.querySelector('.out-11');

// buf = ar11[2];
// ar11[2] = ar11[4];
// ar11[4] = buf;

// out11.textContent = ar11;

// let resultString = ar11.join(' ');

// document.querySelector('.out-11').innerHTML = resultString;

//Task 12

const ar12 = ['test', 'west', 'list', 'class', 'best'];
const out12 = document.querySelector('.out-12');

function swapTwoElements(arr) {
    let lastIndex = arr.length - 1;

    let temp = arr[0];
    arr[0] = arr[lastIndex];
    arr[lastIndex] = temp;

    return arr.join(' ');
}

out12.textContent = swapTwoElements(ar12);

//Task 13

// const ar13 = ['test', 'west', 'list', 'class', 'best'];
// const out13 = document.querySelector('.out-13');

// let resultString = " ";
// for (let i = 0; i < ar13.length; i++) {
//     resultString += i + ' ' + ar13[i] + ' ';
// }

// out13.textContent = resultString;

//Task 14

// const ar14 = [1, 2, 3, 'hello', 66];
// const out14 = document.querySelector('.out-14');

// let resultString = '';
// for (let i = ar14.length - 1; i >= 0; i--) {
//     resultString += ar14[i] + ' ';
// }

// out14.textContent = resultString;

//Task 15

const ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const out15 = document.querySelector('.out-15');

let resultString = '';
for (let i = 0; i < ar15.length; i++) {
    if (ar15[i] > 0) {
        resultString += ar15[i] + ' ';
    }
}

out15.textContent = resultString;

//Task 16

const ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
const ar16_odd = [];
const ar16_even = [];
const out16Odd = document.querySelector('.out-16-odd');
const out16Even = document.querySelector('.out-16-even');

function separateOddEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            ar16_even[i / 2] = arr[i];
        } else {
            ar16_odd[(i - 1) / 2] = arr[i];
        }
    }
}

separateOddEven(ar16);

out16Odd.textContent = ar16_odd.join(' ');
out16Even.textContent = ar16_even.join(' ');

//Task 17

const ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
const out17 = document.querySelector('.out-17');

let countMoreThan3 = 0;

for (let i = 0; i < ar17.length; i++) {
    if (ar17[i] > 3) {
        countMoreThan3++;
    }
}

out17.textContent = `Количество элементов больше 3: ${countMoreThan3}`;

//Task 18

const ar18 = [15,24,13,78,21,4,45,67];
const out18 = document.querySelector('.out-18');

let maxElement = ar18[0];

for (let i = 1; i < ar18.length; i++) {
    if (ar18[i] > maxElement) {
        maxElement = ar18[i]; 
    }
}

out18.textContent = maxElement;


//Task 19

const ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
const out19 = document.querySelector('.out-19');

let minIndex = 0;

for (let i = 1; i < ar19.length; i++) {
    if (ar19[i] < ar19[minIndex]) {
        minIndex = i; 
    }
}

out19.textContent = `Индекс минимального элемента: ${minIndex}`;

//Task 20

const ar20 = [4,5,6,7,8,9,10];
const out20 = document.querySelector('.out-20');

let sum20 = 0;

for (let i = 0; i < ar20.length; i++) {
    sum20 += ar20[i];
}

out20.textContent = sum20;































