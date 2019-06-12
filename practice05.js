/*Есть функция sum, которая суммирует все элементы массива:

 function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

function sumArgs() {
   ваш код 
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.

P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce для похожей задачи.*/


function sumArgs() {
  arguments.reduce = [].reduce;
  var sum = arguments.reduce(function(a, b) {
  return a + b;
  }, 0);
  return sum;
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

function sum() {
  return [].reduce.call(arguments,function(a, b) {
    return a + b;
  });
}

alert( sum(1, 2, 3) ); // 6 (=1+2+3)

//Что вернет выражение? 
Math.min.apply(Math,[1,-5,4])
Math.min.apply(window,[1,-5,4]);

Вернет -5, в первом случае this сылается на объект Math - это встроенный объект с методами для реализации
математических констант и функций. Он являється функцией,т.е не использует this. В качестве контекста можно передавать что угодно.
Аналогично, window - глобальный объек, который содержит ряд свойств и методов для работы с окном браузера.
func.apply(context,[arg1, arg2,...]):
func = Math.min(1, -5, 4);
this = context;