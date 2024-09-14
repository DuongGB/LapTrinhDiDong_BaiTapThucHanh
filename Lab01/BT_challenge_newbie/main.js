// 1. Print numbers from 1 to 10
console.log("1. From 1 to 10:");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 2. Print the odd numbers less than 100
console.log("2. Odd numbers less than 100: ");
for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) console.log(i);
}

// 3. Print the multiplication table with 7
console.log("3. Multiplication table with 7");
for (let i = 1; i <= 10; i++) {
    console.log(`7x ${i} = ${7 * i}`);
}

// 4. Print all the multiplication tables with numbers from 1 to 10
console.log("4. All the multiplication tables with numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += `${i} x ${j} = ${i * j}\t`;
    }
    console.log(row);
}

// 5. Calculate the sum of numbers from 1 to 10
console.log("5. Calculate the sum of numbers from 1 to 10: ");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum of numbers from 1 to 10: ${sum}`);

// 6. Calculate 10!
console.log("6. Calculate 10!: ");
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
}
console.log(`t10! = ${factorial}`);

// 7. Calculate the sum of even numbers greater than 10 and less than 30
console.log("7. Sum of even numbers greater than 10 and less than 30: ");
let total_eve = 0;
for (let i = 12; i < 30; i++) {
    if (i % 2 == 0) total_eve += i;
}
console.log(
    `Sum of even numbers greater than 10 and less than 30: ${total_eve}`
);

// 8. Create a function that will convert from Celsius to Fahrenheit
console.log(
    "8. Create a function that will convert from Celsius to Fahrenheit"
);
function convert(c) {
    let f = (c * 9) / 5 + 32;
    console.log(`${c} oC = ${f} oF`);
}
convert(1);

// 9. Create a function that will convert from Fahrenheit to Celsius
console.log(
    "9. Create a function that will convert from Fahrenheit to Celsius"
);
function convert_FC(f) {
    let c = Math.round(((f - 32) * 5) / 9);
    console.log(`${f} oF = ${c} oC`);
}
convert_FC(36);

// 10. Calculate the sum of numbers in an array of numbers
console.log("Calculate the sum of numbers in an array of numbers");
let array1 = [2, -2, 5, 6, 9, 10, 8, 2];
let sum_array = array1.reduce((sum, current) => sum + current, 0);
console.log(`Sum of array: ${sum_array}`);

// 11. Calculate the average of the numbers in an array of numbers
console.log("11. Calculate the average of the numbers in an array of numbers");
let average = sum_array / array1.length;
console.log(`Average of array: ${average}`);

// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
console.log(
    "12. Create a function that receives an array of numbers as argument and return an array containing only the positive numbers"
);
function positiveNumbers(numbers) {
    return numbers.filter((number) => number > 0);
}
let array2 = [-10, 4, 5, 32, 5, -4, 6];
console.log(positiveNumbers(array2));

// 13. Find the maximum number in an array of numbers
console.log("13. Find the maximum number in an array of numbers");
let array3 = [5, 3, 2, 52, 1];
let maxArr = Math.max(...array3);
console.log(`Max array: ${maxArr}`);

// 14. Print the first 10 Fibonacci numbers without recursion
console.log("14. Print the first 10 Fibonacci numbers without recursion");
function printFib(n) {
    let a = 0,
        b = 1;
    let fib = [];
    for (let i = 0; i < n; i++) {
        fib.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    console.log(fib.join());
}
printFib(10);

// 15. Create a function that will find the nth Fibonacci number using recursion
console.log(
    "Create a function that will find the nth Fibonacci number using recursion"
);
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
let nthFib = fib(10);
console.log(`10th Fibonacci number: ${nthFib}`);

// 16. Create a function that will return a Boolean specifying if a number is prime
// 17. Calculate the sum of digits of a positive integer number
// 18. Print the first 100 prime numbers
// 19. Create a function that will return in an array the first “p” prime numbers greater than “n” 20. Rotate an array to the left 1 position
// 21. Rotate an array to the right 1 position
// 22. Reverse an array
// 23. Reverse a string
// 24. Create a function that will merge two arrays and return the result as a new array
// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
