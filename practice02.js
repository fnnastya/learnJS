;(function() {

  // trash - основная функция
  function lodash(items) {
    // ...
  }

    // код функции addItem, пока что доступен только внутри
  function addItem(value) {
    return ;
  };

  function getItem(i) {  
  };

  function clear() {  
  };

  // присвоим в trsh addItem, getItem и clear, их нужно вынести из модуля
  trash.addItem = addItem 
  trash.addItem = addItem
  trash.addItem = clear

  // "экспортировать" trash наружу из модуля
  window._ = trash; 

}());