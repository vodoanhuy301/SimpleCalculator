const myScreen = $(".calculator-screen");
const myKeys = $(".key-number");
var isAdd = false;
var theFirst = 0;
var isMinus = false;
var isTimes = false;
var isDivide = false;
for (var i = 0; i < myKeys.length; i++) {
  myKeys[i].addEventListener("click", addNumbers);
}
// console.log(myKeys);
// myKeys.click(addNumbers);
function addNumbers() {
  myScreen.html(myScreen.html()+ this.innerHTML);
}
function add() {
  theFirst = parseInt(myScreen.html());
  isAdd = true;
  myScreen.html("");
}
function minus() {
  theFirst = parseInt(myScreen.html());
  isMinus = true;
  myScreen.html("");
}
function times() {
  theFirst = parseInt(  myScreen.html());
  isTimes = true;
  myScreen.html("");
}
function divide() {
  theFirst = parseInt(  myScreen.html());
  isDivide = true;
  myScreen.html("");
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
    myScreen.html(theFirst + parseInt(myScreen.html()));
    isAdd = false;
  } else if (isMinus) {
    myScreen.html(theFirst - parseInt(myScreen.html()));
    isMinus = false;
  } else if (isTimes) {
    myScreen.html(theFirst * parseInt(myScreen.html()));
    isTimes = false;
  } else if (isDivide) {
    myScreen.html(theFirst / parseInt(myScreen.html()));
    isDivide = false;
  };
}
function clearMyScreen() {
  resetStatus();
  console.log("cleared");
  myScreen.html("");
  theFirst = 0;
}
