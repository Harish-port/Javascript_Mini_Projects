var inputTxt = document.querySelector("#input-txt");
var btnTranslate = document.querySelector("#translate");
console.log(btnTranslate);
function clickHandler(){
    console.log( inputTxt.value,"testing fucntion");
}
btnTranslate.addEventListener('click',clickHandler);
