function add(x) {
  return function f(y) {
    return (x+y);
  }
}

function makeCounter() {
  var currentCount = 1;

  return { 
    count: function() {
      return currentCount++;
    },
    set: function(value) {
      return currentCount = value;
    },
    reset: function() {
      return currentCount = 0;
    }
  }
}