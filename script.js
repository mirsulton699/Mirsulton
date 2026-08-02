const canvas = document.getElementById("snow");

const ctx = canvas.getContext("2d");


canvas.width = innerWidth;
canvas.height = innerHeight;


let snow=[];


for(let i=0;i<200;i++){

snow.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*4+1,

speed:Math.random()*2+1

});

}



function drawSnow(){


ctx.clearRect(0,0,canvas.width,canvas.height);



ctx.fillStyle="white";


snow.forEach(s=>{


ctx.beginPath();

ctx.arc(
s.x,
s.y,
s.size,
0,
Math.PI*2
);

ctx.fill();



s.y += s.speed;



if(s.y>canvas.height){

s.y=0;

s.x=Math.random()*canvas.width;

}


});


requestAnimationFrame(drawSnow);


}


drawSnow();



window.onresize=()=>{

canvas.width=innerWidth;

canvas.height=innerHeight;

}
