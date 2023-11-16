var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

let individualText = document.querySelector('.individual-card-top__text')

let btn1 = document.querySelector('.select-btn1');
let btn2 = document.querySelector('.select-btn2');
let btn3 = document.querySelector('.select-btn3');
let btn4 = document.querySelector('.select-btn4');


btn1.addEventListener('click',()=>{
    individualText.innerText = 'lorem1'
});
btn2.addEventListener('click',()=>{
    individualText.innerText = 'lorem2'
});
btn3.addEventListener('click',()=>{
    individualText.innerText = 'lorem3'
});
btn4.addEventListener('click',()=>{
    individualText.innerText = 'lorem4'
});