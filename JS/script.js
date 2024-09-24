let header = document.getElementById("header");
let btn = document.querySelector(".toggle_btn");
let mask = document.querySelector(".mask");

btn.addEventListener("click",()=>{
    header.classList.toggle("open");
});

mask.addEventListener("click",()=>{
    header.classList.remove("open");
});


