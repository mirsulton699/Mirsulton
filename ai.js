// Infinity AI Chat


function sendMessage(){


    let input = document.getElementById("userInput");

    let chat = document.getElementById("chat");


    let text = input.value.trim();



    if(text === ""){

        return;

    }



    chat.innerHTML += `

    <div class="card">

    <p>
    👤 ${text}
    </p>

    </div>

    `;



    input.value = "";



    setTimeout(()=>{


        chat.innerHTML += `

        <div class="card">

        <p>
        🤖 Infinity AI:
        Savolingiz qabul qilindi.
        Aqlli javob tizimi tez orada ulanadi.
        </p>

        </div>

        `;


    },700);



}
