const myScreen = document.querySelector(".calculator-screen");
const myKeys = document.getElementsByClassName("key-number");
var isAdd = false;
var theFirst = 0;
var isMinus = false;
var isTimes = false;
var isDivide = false;
for (var i = 0; i < myKeys.length; i++) {
  myKeys[i].addEventListener("click", addNumbers);
}
function addNumbers() {
  myScreen.innerHTML += this.innerHTML;
}
function add() {
  theFirst = parseInt(myScreen.innerHTML);
  isAdd = true;
  myScreen.innerHTML = "";
}
function minus() {
  theFirst = parseInt(myScreen.innerHTML);
  isMinus = true;
  myScreen.innerHTML = "";
}
function times() {
  theFirst = parseInt(myScreen.innerHTML);
  isTimes = true;
  myScreen.innerHTML = "";
}
function divide() {
  theFirst = parseInt(myScreen.innerHTML);
  isDivide = true;
  myScreen.innerHTML = "";
}
function resetStatus() {
  isAdd = false;
  theFirst = 0;
  isMinus = false;
  isTimes = false;
  isDivide = false;
}
function result() {

  console.log(isAdd);
  if (isAdd) {
    myScreen.innerHTML = theFirst + parseInt(myScreen.innerHTML);
    isAdd = false;
  } else if (isMinus) {
    myScreen.innerHTML = theFirst - parseInt(myScreen.innerHTML);
    isMinus = false;
  } else if (isTimes) {
    myScreen.innerHTML = theFirst * parseInt(myScreen.innerHTML);
    isTimes = false;
  } else if (isDivide) {
    myScreen.innerHTML = theFirst / parseInt(myScreen.innerHTML);
    isDivide = false;
  };
}
function clearMyScreen() {
  resetStatus();
  console.log("cleared");
  myScreen.innerHTML = "";
  theFirst = 0;
}
