function getAnswer() {
    var question = document.getElementById("question").value;

    var answers = [
        "Meron pero depende",
        "Wala syempre",
        "baka may pag asa",
        "Baka nga",
        "Wag muna subukan masisira buhay mo",
        "wala na yan wag muna pilit",
        "Looks good",
        "Better luck next life"
    ];

    if (question == "") {
        document.getElementById("answer").innerHTML = "!";
    } else {
        var random = Math.floor(Math.random() * answers.length);
        document.getElementById("answer").innerHTML = answers[random];
    }
 answer.classList.add("thinking");

    setTimeout(() => {
        const randomAnswer = answers[
            Math.floor(Math.random() * answers.length)
        ];

        answer.textContent = randomAnswer;
        answer.classList.remove("thinking");
    }, 400);
}
