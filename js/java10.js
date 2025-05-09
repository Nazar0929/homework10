// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

const processArray = function(array, callback) {
    return callback(array);
}


const sumElement = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i]
    }
    return sum;
}


const minElement = function(arr) {
    let mins = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (mins > arr[i]) {
            mins = arr[i]
        }
        
    }
    return mins;
}



const maxElement = function(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

const array = [4, 9, 2, 81, 90, 43, 6, 7];
console.log(processArray(array, sumElement));
console.log(processArray(array, minElement));
console.log(processArray(array, maxElement));


// 2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:

// Додавання.
// Віднімання.
// Множення.
// Ділення.
// Перепишіть колбеки на стрілкові функції


function operate(a, b, callback) {
    return callback(a, b);
}


const add = function(a, b) {
    const result = a + b;
    return result;
}


const minus = function(a, b) {
    const result = a - b;
    return result;
}


const division = function(a, b) {
    const result = a / b;
    return result;
}


const multiple = function(a, b) {
    const result = a * b;
    return result;
}


console.log(operate( 8, 3, minus));
console.log(operate( 9, 8, multiple));
console.log(operate( 9, 8, division));
console.log(operate( 9, 8, add));






