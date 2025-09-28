const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const counter = document.getElementById("counter");

let count = 0;

increase.onclick = function(){

     counter.textContent ++   
}

reset.onclick = function(){

    counter.textContent = count;
}

decrease.onclick = function(){

    counter.textContent --
}