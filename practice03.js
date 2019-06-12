/*Создайте объект calculator с тремя методами:

read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений*/
var calculator = {
  read: function() {
  	calculator.value1 = +prompt('введите значение1');
  	calculator.value2 = +prompt('введите значение2');
  },
  sum: function() {
  	return this.value1 + this.value2
  },
  mul: function() {
  	return this.value1 * this.value2
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

//Есть объект «лестница» ladder:

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};
//Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
//Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

ladder.up().up().down().up().down().showStep(); // 1

let human = {
  name: 'Harry',
  say: function() {
    console.log('Hello. My name is '+this.name);
  }
};
undefined
setTimeout(human.say(),1000);
VM782:4 Hello. My name is Harry

