// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b ,c) 

//...rest, ...spread

//               0    1    2    3    4    5    6    7    8
// const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const [firstNumber, secondNumber, ...rest] = numbers;
// console.log(firstNumber, secondNumber);
// console.log(rest);

// const numbers = [
//     //  0          1          2
// //   0  1  2    0  1  2    0  1  2
//     [1, 2, 3], [4, 5, 6], [7, 8, 9]
// ]

// console.log (numbers[1][2]);

const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [list1, list2, list3] = numbers;
console.log(list3[2]);

