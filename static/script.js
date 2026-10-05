const input = document.getElementById("user-input");
const button = document.getElementById("send-button");
const chatBox = document.querySelector(".chat-box");

button.addEventListener("click", function(){
    const question = input.value ;
    if (question.trim()===""){
        return;
    }
    const message =document.createElement("div");
    message.classList.add("user-message");
    message.textContent = question;
    chatBox.appendChild(message);

    fetch("/ask",{
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         question: question
      })
    })

    .then(response => response.json())
    .then(data => {
      const botMessage = document.createElement("div");
      botMessage.classList.add("bot-message");
      botMessage.textContent = data.answer;
      chatBox.appendChild(botMessage);
    });
    
 input.value = "";

   });