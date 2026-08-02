// MirsultonAI Animation + Snow Effect

const canvas = document.getElementById("snow");

if(canvas){

const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;


let snowflakes = [];


for(let i = 0; i < 120; i++){

    snowflakes.push({

        x: Math.random()*width,

        y: Math.random()*height,

        radius: Math.random()*3+1,

        speed: Math.random()*2+1

    });

}



function snow(){

    ctx.clearRect(0,0,width,height);


    ctx.fillStyle="white";


    snowflakes.forEach(s=>{


        ctx.beginPath();

        ctx.arc(
            s.x,
            s.y,
            s.radius,
            0,
            Math.PI*2
        );

        ctx.fill();



        s.y += s.speed;


        if(s.y > height){

            s.y = -5;

            s.x = Math.random()*width;

        }


    });


    requestAnimationFrame(snow);

}


snow();



window.addEventListener("resize",()=>{

width = canvas.width = window.innerWidth;

height = canvas.height = window.innerHeight;

});


}



// Card animation

const cards = document.querySelectorAll(".card");


cards.forEach((card,index)=>{


card.style.opacity="0";

card.style.transform="translateY(30px)";


setTimeout(()=>{


card.style.transition="0.6s";


card.style.opacity="1";


card.style.transform="translateY(0)";


},index*200);



});
