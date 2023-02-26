// Задача №1
// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

for (let index = 0; index < 10; index=index+2) {
    console.log(index);  
}

//Задача №2 
// Напишите цикл for, который выводит в консоль  все числа от 55 до 20


for (let index = 55; index>= 20; index--) {
    console.log(index);  
}

//Задача №3 
//Дан массив numbers. Вывести в консоль все числа из массива

const numbers = [3, 5, 11, 2, 8, 1, 6];
numbers.forEach(numbers => console.log(numbers));


//Задача №4
//Сформировать новый массив numberssquared и передать в него все элементы из массива numbers, возведенные в квадрат

let numbersSquared = numbers.map(numbers => numbers ** 2 );
console.log(numbersSquared);

//Задача №4
//Создать переменную lastelem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

let lastelem = numbersSquared[numbersSquared.length-1];
console.log(lastelem);

//Задача №5
//Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’


const userName = 'Pasha'
const userLastName = 'Hryhorash'
const userAge = 28
const userSalary = 5000

console.log("User`s name is " + userName + ". He is " + userAge + " years old.");
