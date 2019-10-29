const result = window.prompt('Please, type in some numbers!')
const arrNum = result.split(' ')
operation = result[0]  
num1 = Number(arrNum[1])
num2 = Number(arrNum[2])

const resolution = calculate(operation, num1, num2);
 
console.log(resolution)
const printAnswer = document.querySelector('#result');
printAnswer.innerText = resolution
// printAnswer.appendChild(result);


