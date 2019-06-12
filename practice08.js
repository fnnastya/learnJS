var animal = {
  jumps: null
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

alert( rabbit.jumps ); // true

delete rabbit.jumps;

alert( rabbit.jumps ); // null

delete animal.jumps;

alert( rabbit.jumps ); // undefiend


// работает ли вызов rabbit.eat() ?

// Если да, то в какой именно объект он запишет свойство full: в rabbit или animal?

var animal = {
  eat: function() {
    this.full = true;
  }
};

var rabbit = {
  __proto__: animal
};

rabbit.eat();

//Сработает, но св-во full запишет только в объект rabbit, в animal будет undefined. Но если вызвать animal.eat();
// св-во full запишется и в rabbit и в animal

alert( rabbit.full ); // true

alert( animal.full ); // undefined

animal.eat();

alert( rabbit.full ); // true

alert( animal.full ); // true


// Есть объекты:

var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

/*Задание состоит из двух частей:

Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.

То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.*/

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

function My() {
alert( pockets.glasses );
}

console.time('1');
My();
console.timeEnd('1');
VM2718:3 1: 1339.194091796875ms

function My() {
alert( head.glasses );
}

console.time('1');
My();
console.timeEnd('1');
VM2739:3 1: 1189.93798828125ms

function My() {
alert( pockets.glasses );
}
console.time('1');
My();
console.timeEnd('1');
VM2747:3 1: 1269.193115234375ms