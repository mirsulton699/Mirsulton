const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");


function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();


window.addEventListener("resize", resize);



let snowflakes = [];



for(let i = 0; i < 180; i++){

    snowflakes.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        radius: Math.random() * 3 + 1,

        speed: Math.random() * 2 + 0.5,

        wind: Math.random() * 1 - 0.5

    });

}




function drawSnow(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    ctx.fillStyle = "white";



    snowflakes.forEach((snow)=>{


        ctx.beginPath();


        ctx.arc(
            snow.x,
            snow.y,
            snow.radius,
            0,
            Math.PI * 2
        );


        ctx.fill();



        snow.y += snow.speed;

        snow.x += snow.wind;



        if(snow.y > canvas.height){

            snow.y = -5;

            snow.x = Math.random() * canvas.width;

        }


        if(snow.x > canvas.width){

            snow.x = 0;

        }


        if(snow.x < 0){

            snow.x = canvas.width;

        }



    });



    requestAnimationFrame(drawSnow);


}



drawSnow();
