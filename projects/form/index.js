function printGreeting() {
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let greetingDiv = document.getElementById("greeting");
    if (firstName != "" && lastName != "") {
        greetingDiv.innerText = `Ответ: Здравствуйте, ${firstName} ${lastName}`;
    } else {
        greetingDiv.innerText = "Ответ:";
    }
}

printGreeting();