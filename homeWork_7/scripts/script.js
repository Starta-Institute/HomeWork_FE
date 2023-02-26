//Задача №1
//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function minNum(num1, num2) {
    return Math.min(num1, num2);
  }


//Задача №2
//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.


function printEvenFromBigToSmall (x, y) {
    let big = Math.max(x, y);
    let small = Math.min(x, y);
     while (big >= small) {
      if (big % 2 === 0) console.log(big);
      big--;
    }
  } 
   printEvenFromBigToSmall(6, 11);




//Задача №3
//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(x, y = 2) {
    return Math.pow(x, y);
  }


//Задача №4
//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function sumToN(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
      res += i;
    }
    return res;
  }



//Задача №5
//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sumOddEven(n,m) { 
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = n; i <= m; i++) {
      if (i % 2)
        sumOdd += i;
      else
        sumEven += i;
    }
   console.log('Сумма четных чисел:', sumEven);
  console.log('Сумма нечетных чисел:', sumOdd);
  }
