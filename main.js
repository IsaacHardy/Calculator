// Variable Declaration for buttons
var clearBtn = document.querySelector('#clear');
var outputArea = document.querySelector('#outputText');

var sevenBtn = document.querySelector('#seven');
var eightBtn = document.querySelector('#eight');
var nineBtn = document.querySelector('#nine');
var divideBtn = document.querySelector('#divide');

var sixBtn = document.querySelector('#six');
var fiveBtn = document.querySelector('#five');
var fourBtn = document.querySelector('#four');
var multiplyBtn = document.querySelector('#multiply');

var threeBtn = document.querySelector('#three');
var twoBtn = document.querySelector('#two');
var oneBtn = document.querySelector('#one');
var minusBtn = document.querySelector('#minus');

var zeroBtn = document.querySelector('#zero');
var periodBtn = document.querySelector('#period');
var equalsBtn = document.querySelector('#equals');
var plusBtn = document.querySelector('#plus');

// Input Functions
var firstInput;
var operatorSelector;
var secondInput;


// Operators Listener
plusBtn.addEventListener('click', function () {
  firstInput = outputArea.textContent;
  outputArea.textContent = null;
  operatorSelector = '+';
  console.log(firstInput);
  console.log(operatorSelector);
});
minusBtn.addEventListener('click', function () {
  firstInput = outputArea.textContent;
  outputArea.textContent = null;
  operatorSelector = '-';
  console.log(firstInput);
  console.log(operatorSelector);
});
divideBtn.addEventListener('click', function () {
  firstInput = outputArea.textContent;
  outputArea.textContent = null;
  operatorSelector = '/';
  console.log(firstInput);
  console.log(operatorSelector);
});
multiplyBtn.addEventListener('click', function () {
  firstInput = outputArea.textContent;
  outputArea.textContent = null;
  operatorSelector = '*';
  console.log(firstInput);
  console.log(operatorSelector);
});

// Button Event Listeners
oneBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '1';
});
twoBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '2';
});
threeBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '3';
});
fourBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '4';
});
fiveBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '5';
});
sixBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '6';
});
sevenBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '7';
});
eightBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '8';
});
nineBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '9';
});
zeroBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '0';
});

// Clear Button
clearBtn.addEventListener('click', function () {
  outputArea.textContent = null;
  firstInput = null;
  secondInput = null;
  console.log(firstInput);
  console.log(secondInput);
  console.log(operatorSelector);
});

// Period Button
periodBtn.addEventListener('click', function () {
  outputArea.textContent = outputArea.textContent + '.';
});


// Equals Listener
equalsBtn.addEventListener('click', function () {
  secondInput = outputArea.textContent;
  outputArea.textContent = null;
  if (operatorSelector === '+') {
  var calc = Number(firstInput) + Number(secondInput);
  outputArea.textContent = calc;
  }
  else if (operatorSelector === '-') { 
  var calc = Number(firstInput) - Number(secondInput);
  outputArea.textContent = calc;
  }
  else if (operatorSelector === '/') { 
  var calc = Number(firstInput) / Number(secondInput);
  outputArea.textContent = calc;
  }
  else  { 
  var calc = Number(firstInput) * Number(secondInput);
  outputArea.textContent = calc;
  }
});







