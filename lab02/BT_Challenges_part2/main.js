// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
console.log(
    "27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements"
);
let array = [1, 2, 3, 4, 10, 8, 9, 2, 1, 8];
function distinctArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let count = newArray.indexOf(array[i]);
        if (count == -1) newArray.push(array[i]);
    }
    return newArray;
}
console.log(distinctArray(array));

// 28. Calculate the sum of first 100 prime numbers and return them in an array
console.log(
    "28. Calculate the sum of first 100 prime numbers and return them in an array"
);
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}
function sumOfFirst100PrimeNumbers() {
    let sum = 0,
        count = 0,
        i = 2,
        array = [];
    while (count < 100) {
        if (isPrime(i)) {
            sum += i;
            array.push(i);
            count++;
        }
        i++;
    }
    return [sum, array];
}
console.log(sumOfFirst100PrimeNumbers());

// 29. Print the distance between the first 100 prime numbers
console.log("29. Print the distance between the first 100 prime numbers");
function distanceBetweenFirst100PrimeNumbers() {
    let array = sumOfFirst100PrimeNumbers()[1];
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++)
        newArray.push(array[i + 1] - array[i]);
    return newArray;
}
console.log(distanceBetweenFirst100PrimeNumbers());

// 30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
console.log(
    "30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string"
);
function addTwoPositiveNumber(str1, str2) {
    let array1 = str1.split("").reverse();
    let array2 = str2.split("").reverse();
    let result = [];
    let carry = 0;
    let i = 0;
    while (i < array1.length || i < array2.length) {
        let sum = (Number(array1[i]) || 0) + (Number(array2[i]) || 0) + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        i++;
    }
    if (carry) {
        result.push(carry);
    }
    return resul.reverse().join("");
}
console.log(addTwoPositiveNumber("1234343", "23423513"));

// 31. Create a function that will return the number of words in a text
console.log(
    "31. Create a function that will return the number of words in a text"
);
function numberOfWordsInText(txt) {
    let array = txt.split("");
    return array.length;
}
console.log(numberOfWordsInText("NguyenTanThaiDuong"));

// 32. Create a function that will capitalize the first letter of each word in a text
console.log(
    "32. Create a function that will capitalize the first letter of each word in a text"
);
function capitalizeFirstLetterOfEachWord(txt) {
    let array = txt.split(" ");
    let newArray = [];
    for (let i = 0; i < array.length; i++)
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    return newArray.join(" ");
}
console.log(capitalizeFirstLetterOfEachWord("NguyenTan Thai Duong"));

// 33. Calculate the sum of numbers received in a comma delimited string
console.log(
    "33. Calculate the sum of numbers received in c comma delimited string"
);
function sumOfNumbersInCommaDelimitedString(string) {
    let array = string.split(",");
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i]);
    }
    return sum;
}
console.log(sumOfNumbersInCommaDelimitedString("2,32,41,51,2"));

// 34. Create a function that returns an array with words inside a text.
console.log(
    "34. Create a function that returns an array with words inside a text"
);
function wordsInsideText(txt) {
    let array = txt.split(" ");
    return array;
}
console.log(wordsInsideText("Nguyen Tan Thai Duong"));

// 35. Create a function to convert a CSV text to a “bi-dimensional” array
console.log(
    "35. Create a function to convert a CSV text to a “bi-dimensional” array"
);
function convertCSVTxtToBiDimensional(txt) {
    let array = txt.split("\n");
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].split(","));
    }
    return newArray;
}
console.log(convertCSVTxtToBiDimensional("1,25\n,3,3,\n4,5,6"));

// 36. Create a function that converts a string to an array of characters
console.log(
    "36. Create a function that converts a string to an array of characters"
);
function convertStringToArray(str) {
    let array = str.split("");
    return array;
}
console.log(convertStringToArray("Nguyen Tan Thai Duong"));

// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
console.log(
    "37. Create a function that will convert a string in an array containing the ASCII codes of each character"
);
function covertStringToArrayContainingASCII(str) {
    let array = str.split("");
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].charCodeAt(0));
    }
    return newArray;
}
console.log(convertStringToArrayContainingASCII("Nguyen Tan Thai Duong"));

// 38. Create a function that will convert an array containing ASCII codes in a string
console.log(
    "38. Create a function that will convert an array containing ASCII codes in a string"
);
function convertASCIIToString(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(String.fromCharCode(array[i]));
    }
    return newArray.join("");
}
console.log(convertASCIIToString([72, 101, 108, 108, 111, 32]));

// 39. Implement the Caesar cypher
console.log("39. Implement the Caesar cypher");
function caesarCypher(str, shift) {
    let array = str.split("");
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let charCode = array[i].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            newArray.push(
                String.fromCharCode(((charCode - 65 + shift) % 26) + 65)
            );
        } else if (charCode >= 97 && charCode <= 122) {
            newArray.push(
                String.fromCharCode(((charCode - 97 + shift) % 26) + 97)
            );
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray.join("");
}
console.log(caesarCypher("Nguyen Tan Thai Duong", 1));

// 40. Implement the bubble sort algorithm for an array of numbers
console.log("40. Implement the bubble sort algorithm for an array of numbers");
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(bubbleSort([1, 4, 5, 1, 8, 9, 3]));

// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(
    "41. Create a function to calculate the distance between two points defined by their x,y coordinates"
);
function distanceTwoPoint(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1), 2);
}
console.log(distanceTwoPoint(2, 2, 5, 6));

// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
console.log(
    "42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting"
);
function areTwoCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    return distanceTwoPoint(x1, y1, x2, y2) <= r1 + r2;
}
console.log(areTwoCirclesIntersecting(0, 0, 5, 0, 6, 1));

// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
console.log(
    "43. Create a function that will receive a bi=dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number"
);
function extractColumnFromBiDimensionalArray(array, n) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i][n]);
    }
    return newArray;
}
console.log(
    extractColumnFromBiDimensionalArray(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        0
    )
);

// 44. Create a function that will convert a string containing a binary number into a number
console.log(
    " 44. Create a function that will convert a string containing a binary number into a number"
);
function covertStringContainingBinaryNumberIntoNumber(str) {
    return parseInt(str, 2);
}
console.log(covertStringContainingBinaryNumberIntoNumber("101"));

// 45. Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of (levels)
console.log(
    "45. Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of (levels)"
);
function sumOfAllNumbersInJaggedArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += sumOfAllNumbersInJaggedArray(array[i]);
        } else {
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumOfAllNumbersInJaggedArray([1, 2, [3, 4, [5, 6]]]));

// 46. Find the maximum number in a jagged array of numbers or array of numbers
console.log(
    "46. Find the maximum number in a jagged array of number of array of numbers"
);
function MaxNumberInJaggedArray(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]))
            max = Math.max(max, MaxNumberInJaggedArray(array[i]));
        else max = Math.max(max, array[i]);
    }
    return max;
}
console.log(MaxNumberInJaggedArray([1, 2, [3, 4, [5, 6]]]));

// 47. Deep copy a jagged array with numbers or other arrays in a new array
console.log(
    "47. Deep copy a jagged array with numbers or other arrays in a new array"
);
function copyJaggedArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) newArray.push(copyJaggedArray(array[i]));
        else newArray.push(array[i]);
    }
    return newArray;
}
console.log(copyJaggedArray([1, 2, [3, 4, [5, 6]]]));

// 48. Create a function to return the longest word in a string
console.log("48. Create a function to return the longest word in a string ");
function longestWordInString(str) {
    let array = str.split(" ");
    let longestWord = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) longestWord = array[i];
    }
    return longestWord;
}
console.log(longestWordInString("Nguyen Tan Thai Duong"));

// 49. Shuffle an array of strings
console.log("49. Shuffle an array of strings");
function shuffleArray(array) {
    let newArray = [];
    while (array.length) {
        let randomIndex = Math.floor(Math.random() * array.length);
        newArray.push(array[randomIndex]);
        array.split(randomIndex, 1);
    }
    return newArray;
}
console.log(shuffleArray(["Nguyen", "Tan", "Thai", "Duong"]));

// 50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
console.log(
    "50.Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array"
);
function randomNumber(n) {
    let array = [];
    for (leti = 1; i <= n; i++) {
        array.push(i);
    }
    let newArray = [];
    while (array.length) {
        let randomIndex = Math.floor(Math.random() * array.length);
        newArray.push(array[randomIndex]);
        array.splice(randomIndex, 1);
    }
    return newArray;
}
console.log(randomNumber(10));

// 51. Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.
console.log(
    " 51. Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences."
);
function frequencyOfLetterInsideString(str) {
    let array = str.split("");
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) obj[array[i]]++;
        else obj[array[i]] = 1;
    }
    let result = [];
    for (let key in obj) result.push([key, obj[key]]);
    return result;
}
console.log(frequencyOfLetterInsideString("Nguyen Tan Thai Duong"));

// 52. Calculate Fibonacci(500) with high precision (all digits)
console.log("52. Calculate Fibonacci with high precision");
function fibonacci(n) {
    let array = [0, 1];
    for (let i = 2; i <= n; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array[n];
}
console.log(fibonacci(500));

// 53. Calculate 70! with high precision (all digits)
console.log("53. Calculate 70! with high precision");
function factorial(n) {
    let array = [1];
    for (let i = 1; i <= n; i++) {
        let carry = 0;
        for (let j = 0; j < array.length; j++) {
            let product = array[j] * i + carry;
            array[j] = product % 10;
            carry = Math.floor(product / 10);
        }
        while (carry) {
            array.push(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }
    return array.reverse().join("");
}
console.log(factorial(70));
