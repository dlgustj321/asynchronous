function sayHello() {
  console.log('Hello World!');
}

function sayGoodbye() {
  console.log('Goodbye World!');
}

function printMessage(func , name) {
  console.log('Printing message...');
  func(name);
}

printMessage((name) => console.log(`Goodbye ${name}!`), 'Bob');
printMessage((name) => console.log(`Hello ${name}`), 'Json');

// callback 함수
/** 
printMessage(sayGoodbye);
**/

// Arrow func
/*
printMessage(() => {
  console.log('Hello World');
});
*/

// printMessage(() => console.log('Hello World'));