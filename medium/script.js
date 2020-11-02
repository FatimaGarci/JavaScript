// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

var name = prompt('Type your name here');
var upperCase = name.toUpperCase();
var loweCase = name.toLowerCase();
console.log("UPPER CASE", upperCase, "lower case", loweCase)

if(name === upperCase){
    console.log('SHOUTING');
}
else if (name === loweCase){
    console.log('whispering');
}
else{
    console.log('Talking Normally')
};
