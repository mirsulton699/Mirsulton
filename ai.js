// Infinity AI Chat


function sendMessage(){


    let input = document.getElementById("userInput");

    let chat = document.getElementById("chat");


    let question = input.value.trim();



    if(question === ""){

        return;

    }



    // User message

    let user = document.createElement("div");

    user.className = "card";

    user.innerHTML = `
    <p>👤 ${question}</p>
    `;


    chat.appendChild(user);



    // AI response

    setTimeout(()=>{


        let answer = document.createElement("div");


        answer.className = "card";


        answer.innerHTML = `

        <p>
        🤖 Infinity AI: Savolingiz qabul qilindi.
        Tez orada aqlli javob tizimi ulanadi.
        </p>

        `;


        chat.appendChild(answer);



    },700);



    input.value="";


}
