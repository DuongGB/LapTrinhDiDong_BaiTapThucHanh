const numbers = [45, 4, 9, 16, 25];
Array.prototype.myfilter = function (callback) {
    let result = [];
    this.forEach((element, index, array) => {
        if (callback(element, index, array)) {
            result.push(element);
        }
    })
    return result;
};
let value = numbers.myfilter((element, index, array) => element > 10);
console.log(value);