currImage = document.querySelector('img')

currImage.onclick = function() {
if(currImage.getAttribute('src') === 'images/1.jpg'){
currImage.setAttribute('src', 'images/3.jpg');
} 
else{
currImage.setAttribute('src', 'images/1.jpg');
}
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {

var myName = prompt('Please Enter your name.');
localStorage.setItem('name', myName);
myHeading.textContent = 'Golf is fun, ' + myName;

}

if(!localStorage.getItem('name')) {
setUserName();
} else {
var storedName = localStorage.getItem('name');
myHeading.textContent = 'Golf is fun, ' + storedName;
}

myButton.onclick = function(){

setUserName();

}
