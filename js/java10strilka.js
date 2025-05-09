// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

const processArray = (array, callback) => callback(array)



const sumElement = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i]
    }
    return sum;
}


const minElement = (arr) => {
    let mins = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (mins > arr[i]) {
            mins = arr[i]
        }
        
    }
    return mins;
}



const maxElement = (arr) => {
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


const operate = (a, b, callback) => callback(a, b);

const add = (a, b) => a + b;

const minus = (a, b) => a - b;


const division = (a, b) => a / b;


const multiple = (a, b) => a * b;


console.log(operate( 8, 3, minus));
console.log(operate( 9, 8, multiple));
console.log(operate( 9, 8, division));
console.log(operate( 9, 8, add));


