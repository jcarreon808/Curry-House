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


function random (start) {
  return {
    to:function (end){
      return Math.floor(Math.random()*(end-start))+start;
    },
    toInclude:function (end){
      return Math.floor(Math.random ()*(end-start+1))+start;
    }

  };

}

function concat(string1,string2){
return string1 + ' ' + string2;

}

var prependGreeting = curry(concat, 'Hello');
prependGreeting('Jason');

function add (num1, num2, num3) {
  return num1 + num2 + num3;
}

var add4and5 = curry(add,4,5);
add4and5(6);


function calculator(operation){
    switch (operation){
      case '+':
      case 'add':
        return function (op1, op2){
          return op1 + op2;
        };
        break;
      case '-':
      case 'subtract':
        return function (op1, op2){
          return op2-op1;
        };
        break;
      case '*':
      case 'multiply':
        return function (op1,op2){
          return op1*op2;
        };
        break;
      case '/':
      case 'divide':
        return function (op1,op2){
          return op2/op1;
        };
        break;
      case '%':
      case 'modulo':
        return function (op1,op2){
          return op2%op1;
        };
        break;
      case '^':
      case 'power of':
        return function (op1, op2){
          return Math.pow(op2,op1);
        };
        break;
    }

}

var add5 = curry(calculator('+').bind(null,5));
add5(4);

var sub5 = curry(calculator('-').bind(null,5));
sub5(4);

var multiply5 = curry(calculator('*').bind(null,5));
multiply5(4);

var divide5 = curry(calculator('/').bind(null,5));
divide5(20);

var mod5 = curry(calculator('%').bind(null,5));
mod5(99);

var pow3 = curry(calculator('^').bind(null,3));
pow3(4);

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