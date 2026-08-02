// MirsultonAI Snow + Animation


const canvas = document.getElementById("snow");


if(canvas){

const ctx = canvas.getContext("2d");


let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;


let snow = [];


for(let i = 0; i < 120; i++){

    snow.push({

        x: Math.random() * w,

        y: Math.random() * h,

        size: Math.random() * 3 + 1,

        speed: Math.random() * 2 + 1

    });

}



function drawSnow(){


ctx.clearRect(0,0,w,h);


ctx.fillStyle = "white";


snow.forEach(s=>{


ctx.beginPath();

ctx.arc(
s.x,
s.y,
s.size,
0,
Math.PI * 2
);

ctx.fill();



s.y += s.speed;


if(s.y > h){

s.y = -5;

s.x = Math.random()*w;

}


});



requestAnimationFrame(drawSnow);


}



drawSnow();



window.addEventListener("resize",()=>{

w = canvas.width = window.innerWidth;

h = canvas.height = window.innerHeight;

});


}




// Cards animation


const cards = document.querySelectorAll(".card");


cards.forEach((card,index)=>{


card.style.opacity = "0";

card.style.transform = "translateY(40px)";


setTimeout(()=>{


card.style.transition = "0.7s ease";


card.style.opacity = "1";


card.style.transform = "translateY(0)";


}, index * 200);


});
