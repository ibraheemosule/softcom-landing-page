let navbar = document.querySelector('nav');
var sticky = navbar.offsetTop;
let navDiv = document.querySelector('div');
let header = document.querySelector('h1');
let li = document.querySelectorAll('li');
let button = document.querySelector('button');

function myFunction() {
if(window.matchMedia('(max-width: 575px)').matches) {
navbar.style.position = "fixed";
navbar.style.top = "0";
navbar.style.color = "white";
header.style.fontSize = "190%";
for (let i = 0; i < 5; i++) {
li[i].style.backgroundColor = "rgb(6, 110, 180)";
li[i].style.padding = "3% 0% 0% 0%";
li[i].style.marginTop = '0';
li[i].style.marginRight = '4%';
li[0].style.borderRadius  = '15px 15px 0 0'
li[4].style.borderRadius  = '0 0 15px 15px'
button.style.paddingBottom = '2%';
}

return;
}else if (window.pageYOffset >= sticky) {
navbar.style.position = "fixed";
navbar.style.backgroundColor = "white";
navbar.style.color = "black";
navbar.style.paddingLeft = "40%"
navbar.style.borderBottom = "1px solid rgba(128, 128, 128, 0.433)"
header.style.position = 'absolute';
header.style.top = "0%";
header.style.left = '1%';
header.style.color = "black";
for (let i = 0; i < 5; i++) {
li[i].style.backgroundColor = "transparent";
li[i].style.padding = "0";
li[i].style.margin = ' 0.5% 2% 0% 2%'; 
li[0].style.borderRadius  = '0'
li[4].style.borderRadius  = '0'
button.style.paddingBottom = '0';   
}
} else {
navbar.style.position= "static";
header.style.position = 'static';
header.style.color = "white";
navbar.style.backgroundColor = "transparent";
navbar.style.color = "white";
navbar.style.paddingLeft = "0";
navbar.style.borderBottom = "none";
for (let i = 0; i < 5; i++) {
li[i].style.backgroundColor = "transparent";
li[i].style.padding = "0";
li[i].style.margin = ' 0.5% 2% 0% 2%';  
li[0].style.borderRadius  = '0'
li[4].style.borderRadius  = '0'
button.style.paddingBottom = '0';     
}
}
}
setInterval(() => {
return myFunction()
}, 10);