async function sendMessage(){

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    const question = input.value.trim();

    if(question === ""){
        return;
    }


    chat.innerHTML += `
    <div class="card">
        <p>👤 ${question}</p>
    </div>
    `;


    input.value = "";


    chat.innerHTML += `
    <div class="card" id="loading">
        <p>🤖 AI o'ylayapti...</p>
    </div>
    `;


    try{


        const response = await fetch("https://api.openai.com/v1/chat/completions",{

            method:"POST",

            headers:{
                "Content-Type":"application/json",

                "Authorization":"Bearer API_KEY_BU_YERGA"
            },


            body:JSON.stringify({

                model:"gpt-4o-mini",

                messages:[
                    {
                        role:"user",
                        content:question
                    }
                ]

            })

        });



        const data = await response.json();


        document.getElementById("loading").remove();


        chat.innerHTML += `
        <div class="card">
            <p>🤖 ${data.choices[0].message.content}</p>
        </div>
        `;



    }catch(error){


        document.getElementById("loading").remove();


        chat.innerHTML += `
        <div class="card">
            <p>❌ AI ulanishida xato</p>
        </div>
        `;


    }


}
