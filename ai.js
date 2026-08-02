async function sendMessage(){

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    const message = input.value.trim();

    if(!message) return;


    chat.innerHTML += `
    <div class="card">
        <p>👤 ${message}</p>
    </div>
    `;


    input.value = "";


    chat.innerHTML += `
    <div class="card" id="aiLoading">
        <p>🤖 AI javob yozmoqda...</p>
    </div>
    `;


    try {

        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {

            method:"POST",

            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + AI_CONFIG.apiKey
            },


            body:JSON.stringify({

                model:"gpt-4o-mini",

                messages:[
                    {
                        role:"user",
                        content:message
                    }
                ]

            })

        });


        const data = await response.json();


        document.getElementById("aiLoading").remove();


        chat.innerHTML += `
        <div class="card">
            <p>🤖 ${data.choices[0].message.content}</p>
        </div>
        `;


    } catch(error){

        document.getElementById("aiLoading").remove();


        chat.innerHTML += `
        <div class="card">
            <p>❌ AI ulanish xatosi</p>
        </div>
        `;

    }

}
