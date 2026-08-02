// ===============================
// MirsultonAI Final Script
// Snow Effect + Animations
// ===============================


// ❄️ SNOW EFFECT

const canvas = document.getElementById("snow");


if(canvas){

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let snowflakes = [];


for(let i = 0; i < 120; i++){

snowflakes.push({

x: Math.random() * canvas.width,

y: Math.random() * canvas.height,

size: Math.random() * 4 + 1,

speed: Math.random() * 2 + 1

});

}



function snow(){

ctx.clearRect(0,0,canvas.width,canvas.height);


ctx.fillStyle="white";

ctx.beginPath();



snowflakes.forEach(flake=>{


ctx.moveTo(flake.x,flake.y);

ctx.arc(
flake.x,
flake.y,
flake.size,
0,
Math.PI*2
);



flake.y += flake.speed;



if(flake.y > canvas.height){

flake.y = -5;

flake.x = Math.random()*canvas.width;

}


});


ctx.fill();


requestAnimationFrame(snow);


}


snow();



window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

});


}



// ===============================
// CARD ANIMATION
// ===============================


const cards = document.querySelectorAll(".card");


cards.forEach((card,index)=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";



setTimeout(()=>{


card.style.transition="0.6s";

card.style.opacity="1";

card.style.transform="translateY(0)";



},index*150);



});




// ===============================
// GLASS BOX ANIMATION
// ===============================


const boxes = document.querySelectorAll(".glass-box");


boxes.forEach(box=>{


box.addEventListener("mouseenter",()=>{


box.style.transform="scale(1.03)";


});



box.addEventListener("mouseleave",()=>{


box.style.transform="scale(1)";


});


});




// ===============================
// BUTTON EFFECT
// ===============================


const buttons = document.querySelectorAll("button");


buttons.forEach(btn=>{


btn.addEventListener("click",()=>{


btn.style.transform="scale(0.9)";


setTimeout(()=>{


btn.style.transform="scale(1)";


},150);



});


});




// ===============================
// PAGE LOAD EFFECT
// ===============================


window.addEventListener("load",()=>{


document.body.style.opacity="0";


setTimeout(()=>{


document.body.style.transition="1s";


document.body.style.opacity="1";


},100);



});
