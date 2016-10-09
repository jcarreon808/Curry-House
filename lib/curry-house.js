var curry = require('./curry');

function calculate (firstNumber) {
  return function (ops){
    switch(ops){
      case '+':
      case 'add':
        return function (secondNumber){
          return firstNumber + secondNumber;
        };
        break;
      case '-':
      case 'subtract':
        return function (secondNumber){
          return firstNumber - secondNumber;
        };
        break;
      case '*':
      case 'multiply':
        return function(secondNumber){
          return firstNumber * secondNumber;
        };
        break;
      case '/':
      case 'divide':
        return function (secondNumber){
          return firstNumber / secondNumber;
        };
        break;
      case '%':
      case 'modulo':
        return function (secondNumber){
          return firstNumber % secondNumber;
        };
      case '^':
      case 'power of':
        return function (secondNumber){
          return Math.pow(firstNumber,secondNumber);
        };
    }
  };
}


function random () {

}

function concat(){

}

var prependGreeting = null;

function add () {

}

var add4and5 = null;

function calculator(){

}

var add5 = null;
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};