var clearBtn = document.querySelector('clear');
var outputArea = document.querySelector('outputText')

var sevenBtn = document.querySelector('seven');
var eightBtn = document.querySelector('eight');
var nineBtn = document.querySelector('nine');
var divideBtn = document.querySelector('divide');

var sixBtn = document.querySelector('six');
var fiveBtn = document.querySelector('five');
var fourBtn = document.querySelector('four');
var multiplyBtn = document.querySelector('multiply');

var threeBtn = document.querySelector('three');
var twoBtn = document.querySelector('two');
var oneBtn = document.querySelector('one');
var minusBtn = document.querySelector('minus');

var zeroBtn = document.querySelector('zero');
var periodBtn = document.querySelector('period');
var equalsBtn = document.querySelector('equals');
var plusBtn = document.querySelector('plus');

var firstInput = function () {
  
}

var secondInput = function () {


}

equalsBtn.addEventListener('click', function () {
  var calculate = Number(firstInput.value) + Number(secondInput.value);
  outputArea.textContent = calculate;
});


