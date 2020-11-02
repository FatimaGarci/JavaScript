// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.


function add(x ,y ){
    var x= Number(prompt("select first number to be added"));
    var y= Number(prompt("selct second number to be added"));
    var z = x + y;
    console.log(z);
    
   }

   function subtract(x ,y ){
    var x = Number(prompt("select first number to be subtract"));
    var y = Number(prompt("selct second number to be subtract"));
    var z = x - y;
    console.log(z);
   }

   function multiply(x ,y ){
    var x= Number(prompt("select first number to be multiply"));
    var y= Number(prompt("selct second number to be multiply"));
    var z = x * y;
    console.log(z);
   }

   function divide(x ,y ){
    var x= Number(prompt("select first number to be dividend"));
    var y= Number(prompt("selct second dividor"));
    var z = x / y;
    console.log(z);
   }

   add();
   subtract();
   multiply();
   divide();