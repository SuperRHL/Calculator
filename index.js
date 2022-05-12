keys = document.querySelectorAll(".buttons");
keys.forEach((key) => key.addEventListener("click", click));
input = document.getElementById("input1");
output = document.getElementById("input2");
mainresult = 0;
buffer = 0;
num = 0;
sign = null;
function click() {
  input.textContent = input.textContent.concat("", this.textContent);
  console.log(this.textContent);
}
clearscr = document.getElementById("clear");
clearscr.addEventListener("click", clear);
addbtn = document.getElementById("add");
addbtn.addEventListener("click", add);
subbtn = document.getElementById("sub");
subbtn.addEventListener("click", sub);
resultbtn = document.getElementById("result");
resultbtn.addEventListener("click", result);
function add() {
  result();
  sign = "+";
  num = parseInt(input.textContent);
  buffer = num;
  input.textContent = 0;
  console.log(num, mainresult, sign);
}
function sub() {
  result();
  sign = "-";
  num = parseInt(input.textContent);
  buffer = num;
  input.textContent = 0;
  console.log(num, mainresult, sign);
}
function clear() {
  mainresult = 0;
  input.textContent = 0;
  output.textContent = 0;
  buffer = 0;
}
function result() {
  if (sign == "+") {
    mainresult += parseInt(input.textContent);
  }
  if (sign == "-") {
    mainresult -= parseInt(input.textContent);
  }

  output.textContent = mainresult + buffer;
  buffer = 0;
}
