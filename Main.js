console.log('#5. JavaScript homework example file')

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */

// const counter = function() {}

// console.log(counter()) // 0
// console.log(counter()) // 1
// console.log(counter(100)) // 100
// console.log(counter()) // 101
// console.log(counter()) // 102
// console.log(counter(500)) // 500
// console.log(counter()) // 501
// console.log(counter()) // 502
// console.log(counter(0)) // 0
// console.log(counter()) // 0
// console.log(counter()) // 1

const counter = (function () {
    let count = 0; 
    return function (n) {
        if (n === undefined) {
            count++; 
        } else if (typeof n === 'number' && Number.isInteger(n)) {
            count = n; 
        } else {
            console.warn(`Invalid input: "${n}" is not a valid integer.`);
            return count; 
        }
        return count;
    };
})();

// Тестові випадки
console.log(counter());    // 1
console.log(counter());    // 2
console.log(counter(10));  // 10
console.log(counter());    // 11
console.log(counter("text")); // Попередження, виведе 11
console.log(counter(4.5)); // Попередження, виведе 11
console.log(counter(true)); // Попередження, виведе 11
console.log(counter(false)); // Попередження, виведе 11
console.log(counter(null)); // Попередження, виведе 11
console.log(counter(undefined)); // Збільшить значення, виведе 12
console.log(counter(50));  // 50
console.log(counter());    // 51
console.log(counter(-5));  // -5
console.log(counter());    // -4


/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */

// const counterFactory = function () {}

// console.log(counterFactory.value()) // 0
// counterFactory.increment()
// counterFactory.increment()
// counterFactory.increment()
// console.log(counterFactory.value()) // 3
// counterFactory.decrement()
// counterFactory.decrement()
// console.log(counterFactory.value()) // 1
// console.log(counterFactory.value(100)) // 100
// counterFactory.decrement()
// console.log(counterFactory.value()) // 99
// console.log(counterFactory.value(200)) // 200
// counterFactory.increment()
// console.log(counterFactory.value()) // 201

const counterFactory = (function () {
    let count = 0;
    return {
        value(n) {
            if (n !== undefined) {
                count = n;
            }
            return count;
        },
        increment() {
            count++;
        },
        decrement() {
            count--;
        }
    };
})();

/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */

// const myPrint = () => {}
// const myPow = () => {}

// console.log(myPow(3, 4, myPrint)) // 3^4=81
// console.log(myPow(2, 3, myPrint)) // 2^3=8
// console.log(myPow(2, 0, myPrint)) // 2^0=1
// console.log(myPow(2, -2, myPrint)) // 2^-2=0.25

const myPrint = (a, b, res) => `${a}^${b}=${res}`;

const myPow = (a, b, myPrint) => {
    const power = (x, n) => {
        if (n === 0) return 1;
        if (n < 0) return 1 / power(x, -n);
        return x * power(x, n - 1);
    };
    
    const result = power(a, b);
    return myPrint(a, b, result);
};


/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

// const list = [12, 23, 100, 34, 56, 9, 233]
// const myMax = () => {}

// console.log(myMax(list)); // 233

const list = [12, 23, 100, 34, 56, 9, 233];

const myMax = (arr) => Math.max.apply(null, arr);

console.log(myMax(list)); // 233


/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

// const myMul = () => {}

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

// const myDouble

// console.log(myDouble(3)) // = myMul(2, 3) = 6
// console.log(myDouble(4)) // = myMul(2, 4) = 8
// console.log(myDouble(5)) // = myMul(2, 5) = 10

// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

// const myTriple

// console.log(myTriple(3)) // = myMul(3, 3) = 9
// console.log(myTriple(4)) // = myMul(3, 4) = 12
// console.log(myTriple(5)) // = myMul(3, 5) = 15

export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple }

// Function to multiply two numbers
const myMul = (a, b) => {
  return a * b;
};

// Function to double a number using bind() and myMul()
const myDouble = myMul.bind(null, 2);

// Function to triple a number using bind() and myMul()
const myTriple = myMul.bind(null, 3);