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
    input.value = "";
});