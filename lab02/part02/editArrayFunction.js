//filter
const numbers = [45, 4, 9, 16, 25];

Array.prototype.myfilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

let value1 = numbers.myfilter(function (element) {
    return element >10;
});

console.log(value1);

// map
Array.prototype.mymap = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};
let value2 = numbers.mymap((element) => element * 2);
console.log(value2);

// //some
Array.prototype.mysome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};
let value3 = numbers.mysome((element) => element > 20);
console.log(value3);

//every
Array.prototype.myevery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
};
let value4 = numbers.myevery((element) => element > 10);
console.log(value4)

// //find
Array.prototype.myfind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return undefined;
}
let value5 = numbers.myfind((element) => element > 10);
console.log(value5)

// //reduce
// const numbers = [45, 4, 9, 16, 25];
Array.prototype.myreduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Ví dụ: Tính tổng của các phần tử trong mảng
let sum = numbers.myreduce((acc, element) => acc + element, 0);
console.log(sum);
// Ví dụ: Tính tích của các phần tử trong mảng
let sum2 = numbers.myreduce((acc, element) => acc + element, 1);
console.log(sum2);

