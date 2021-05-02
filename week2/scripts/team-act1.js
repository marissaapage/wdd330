function printInput() {
  let userInput = document.querySelector("#aNumber").value * 1;
  document.querySelector("#output").innerHTML += `<p>${userInput}</p>`;
}
function sumNumber() {
  let userInput = document.querySelector("#aNumber").value * 1;
  totalNum = 0;
  for (let num = 0; num <= userInput; num++) {
    totalNum = totalNum + num;
  }
  let sumOutput = (document.querySelector("#output").innerHTML += `<p>${totalNum}</p>`);
}
function addNumbers() {
  let userInput = document.querySelector("#aNumber").value * 1;
  let secondInput = document.querySelector("#anotherNumber").value * 1;
  document.querySelector("#output").innerHTML += `<p>${userInput + secondInput}</p>`;
}

//different function types

function subtractNumbers() {
    let userInput = document.querySelector("#aNumber").value * 1;
    let secondInput = document.querySelector("#anotherNumber").value * 1;
    document.querySelector("#output").innerHTML += `<p>${userInput - secondInput}</p>`;
  }

  divideNumbers = () => {
    let userInput = document.querySelector("#aNumber").value * 1;
    let secondInput = document.querySelector("#anotherNumber").value * 1;
    document.querySelector("#output").innerHTML += `<p>${userInput / secondInput}</p>`;
  }

  const multiplyNumbers = function() {
    let userInput = document.querySelector("#aNumber").value * 1;
    let secondInput = document.querySelector("#anotherNumber").value * 1;
    document.querySelector("#output").innerHTML += `<p>${userInput * secondInput}</p>`;
  }

let button = document.querySelector("#range");
button.addEventListener("click", sumNumber);

let buttonPrint = document.querySelector("#print");
buttonPrint.addEventListener("click", printInput);

let buttonAdd = document.querySelector("#add");
buttonAdd.addEventListener("click", addNumbers);

let buttonS = document.querySelector("#subtract");
buttonS.addEventListener("click", subtractNumbers);

let buttonD = document.querySelector("#divide");
buttonD.addEventListener("click", divideNumbers);

let buttonM = document.querySelector("#multiply");
buttonM.addEventListener("click", multiplyNumbers);