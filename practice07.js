// Конструктор кофеварок будет называться CoffeeMachine.
// публичный метод run, запускающий кофеварку, а также вспомогательные внутренние методы getBoilTime и onReady
function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;
  
  var timerId;

  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }
  
  this.run = function() {
   return timerId = setTimeout(onReady, getBoilTime());
  };
  
 this.stop = function() {
   clearTimeout(timerId);
   alert('Кофе приготовлен не буд!'); 
  };

}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop();

//  CofeeMachin - как класс
class CofeeMachin{
  constructor(power, waterAmount){
    this._power = power;
    //this._waterAmount = waterAmount;  //можно написать и так, но тогда будет дублирование кода и в конструкторе и в методе setWaterAmount
    this.setWaterAmount(waterAmount);
    this._waterHeatCapacity = 4200;
  };

  //создаем метод и указываем количество воды
  setWaterAmount(waterAmount){  
    this._waterAmount = waterAmount;
  };

  //пишем формулу расчета
  getBoilTime(){
    return this._waterAmount * this._waterHeatCapacity * 80 / this._power;
  };

  //метод который будет срабатывать после пройденого времени
  onReady(){
    return alert('Кофе готов!');
  };

  //чтобы вызвать метод, к нему следует обратиться через this
  run(){
    setTimeout(this.onReady, this.getBoilTime());
  };
};

let cofeeMachin = new CofeeMachin(100000);
cofeeMachin.setWaterAmount(200);
cofeeMachin.run();
