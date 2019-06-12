/*Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.
Пример использования:

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );*/

function Calculator() {
  this.read = function() {
  	this.value1 = +prompt('введите значение1');
  	this.value2 = +prompt('введите значение2');
  };
  this.sum = function() {
  	return this.value1 + this.value2
  };
  this.mul = function() {
  	return this.value1 * this.value2
  };
}

function Calculator() {
  return {
    read (){this.value1 = +prompt('введите значение1');
  	        this.value2 = +prompt('введите значение2');
           },
    sum()
},  }
  this.read = function() {
  	this.value1 = +prompt('введите значение1');
  	this.value2 = +prompt('введите значение2');
  };
  this.sum = function() {
  	return this.value1 + this.value2
  };
  this.mul = function() {
  	return this.value1 * this.value2
  };
}
