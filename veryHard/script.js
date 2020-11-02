// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"


var num1 = parseInt('x');
var num2 = parseInt('y');

function add(x ,y ){
   var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    var z = (x + y);
    console.log(x +' + ' +y+ ' = '+ z);

   }

   function subtract(x ,y ){
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    var z = (x - y);
    console.log(x +' - ' +y+ ' = '+ z);
   }

   function multiply(x ,y ){
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    var z = (x * y);
    console.log(x +' * ' +y+ ' = '+ z);
   }

   function divide(x ,y ){
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    var z = (x / y);
    console.log(x +' / ' +y+ ' = '+ z);
   }

   add('');
   subtract('');
   multiply('');
   divide('');