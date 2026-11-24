function getAnswer() {
    var question = document.getElementById("question").value;

    var answers = [
"Yes, definitely!",
"It is certain",
"Without a doubt",
"Absolutely!",
"Signs point to yes.",
"Most likely.",
"You can count on it.",
"Good things are coming!",
"No, not likely.",
"Definitely not.",
"Don't count on it.",
"My answer is no.",
"Very doubtful.",
"Not this time.",
"Ask again later.",
"Maybe, who knows?",
"Time will tell.",
"Cannot predict now.",
"The future is uncertain.",
"Focus and try again.",
"The answer is unclear.",
"Wait for the right moment.",
"Your luck is loading...",
"Ask Google instead!",
"Even I don't know!",
"404: Fortune not found.",
"Trust your instincts!",
"Maybe yes, maybe no!",
"The universe is busy right now."
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
