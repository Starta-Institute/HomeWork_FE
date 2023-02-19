// Задача №1 
// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
let num = prompt("Введите число:");
console.log(num * 0.1);

// Задача №2
// Написать программу, которая получает два числа и выводит наименьшее
let num1 = prompt("Write your first number")
let num2 = prompt("Write your second number")
if (num1>num2) {
    console.log(num2);
} else {
    console.log(num1);   
}

// Задача №3
// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
const number = prompt("Write your number!")
if (number < 100) {
    console.log("Number is less than 100");
    }
    if (number > 100) {
        console.log("Number is greater than 100");
        
    } else {
        console.log("Number is equal to 100");
    }

    // Задача №4 
    // Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний.

    let name = prompt ("Write your name")
    const age = prompt ("Your age")
    if (age > 17) {
        console.log("Hello ," + name );
    } else {
        console.log("Hi ," + name);
    }


    // Дополнительные задания
// Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]

const Array = ["apple", 8, {name: "Pasha"}, "banana", 9, {name: "Anna"}, NaN]

// Задача 1
// Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).

const newArray = ["apple", 8, {name: "Pasha"}, "banana", 9, {name: "Anna"}, NaN]
for(let item of ["apple", 8, {name: "Pasha"}, "banana", 9, {name: "Anna"}, NaN]){
    if (isNaN(item)) {
        console.log(typeof item);
        
    } else {
       console.log("Number"); 
    }
}


// Задача 2
// Просуммируйте все числа в массиве и выведите результат в консоли. Игнорируйте нечисловые элементы.

let arr = ["apple", 8, {name: "Pasha"}, "banana", 9, {name: "Anna"}, NaN];
let result = 0;
 for (let i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'number' && !isNaN(arr[i])) {
    result += arr[i];
  }
}
console.log(result);

    

