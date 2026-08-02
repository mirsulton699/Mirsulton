function sendMessage(){

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    const text = input.value.trim();

    if(text === ""){
        return;
    }


    chat.innerHTML += `
    <div class="card">
        <p>👤 ${text}</p>
    </div>
    `;


    input.value = "";


    setTimeout(()=>{

        chat.innerHTML += `
        <div class="card">
            <p>
            🤖 Infinity AI:
            Hozircha test rejimida ishlayapman.
            </p>
        </div>
        `;

    },800);

}
