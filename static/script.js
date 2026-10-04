const input = document.getElementById("user-input");
const button = document.getElementById("send-button");
const chatBox = document.querySelector(".chat-box");

button.addEventListener("click", function(){
    const question = input.value ;
    if (question.trim()===""){
        return 0;
    }
    const message =document.createElement("div");
    message.classList.add("user-message");
    message.textContent = question;
    chatBox.appendChild(message);
    
 let answer="";

 if(question.toLowerCase().includes("hello")){
    answer="Hello! How can I help you?";
 }
 else if(question.toLowerCase().includes("course")){
    answer="Our college offers various B.Tech courses.";
 }
 else if(question.toLowerCase().includes("library")){
    answer="Yes, Our college has a library.";
 }
 else if(question.toLowerCase().includes("fees")){
    answer="Contact the college office.";
 }
 else {
    answer="Sorry,I don't understand your question yet.";
 }

 const botMessage = document.createElement("div");
 botMessage.classList.add("bot-message");
 botMessage.textContent = answer;
 chatBox.appendChild(botMessage);
 input.value = "";
});