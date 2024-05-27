const mcq_questions = [
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: [
            "ul",
            "ol",
            "li",
            "dl"
        ],
        answer: "ul"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: [
            "Boolean",
            "String",
            "Number",
            "Float"
        ],
        answer: "Float"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "js",
            "scripting",
            "javascript",
            "script"
        ],
        answer: "script"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        options: [
            "// This is a comment",
            "' This is a comment",
            "#This is a comment",
            "/* This is a comment */"
        ],
        answer: "// This is a comment"
    },
    {
        question: "Which built-in method returns the calling string value converted to lower case?",
        options: [
            "toLowerCase()",
            "toLower()",
            "changeCase('lower')",
            "toLowerCaseCase()"
        ],
        answer: "toLowerCase()"
    },
    {
        question: "Which of the following is used to declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "string",
            "declare"
        ],
        answer: "var"
    },
    {
        question: "Which function is used to print a message to the console in JavaScript?",
        options: [
            "console.print()",
            "print()",
            "console.log()",
            "log()"
        ],
        answer: "console.log()"
    },
    {
        question: "What does JSON stand for?",
        options: [
            "JavaScript Object Notation",
            "JavaScript Oriented Notation",
            "JavaScript Object Naming",
            "JavaScript Order Notation"
        ],
        answer: "JavaScript Object Notation"
    }
];

const question = document.querySelector(".question");
const buttons = document.querySelectorAll(".btn");
const next = document.querySelector(".next");
const high_scores = document.querySelector(".high_scores");

var question_no;
var score;

function start_mcq() {
    question_no = 0;
    score = 0;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "block";
    }
    next.innerHTML = "Next"
    showQuestion()
}

function reset() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "black";
    }
    next.style.display = "none";
    high_scores.style.display = "none";
}

function showQuestion() {
    reset()
    addHover();

    que_data = mcq_questions[question_no];
    que = que_data.question;
    number = question_no + 1;
    realAns = que_data.answer;
    question.innerHTML = number + ". " + que;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = que_data.options[i];
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", checkAnswer);
    }
}

function checkAnswer(event) {
    removeHover()
    clickedAns = event.target.innerHTML;
    if (clickedAns == realAns) {
        event.target.style.backgroundColor = "green";
        score++;
    }
    else {  
        event.target.style.backgroundColor = "red";
        for (let i = 0; i < 4; i++) {
            if (buttons[i].innerHTML == realAns) {
                buttons[i].style.backgroundColor = "green";
            }
        }
    }
    for (let i = 0; i < 4; i++) {
        buttons[i].removeEventListener("click", checkAnswer)
    }
    next.style.display = "block";
}

next.addEventListener("click", next_que);

function next_que(){
    question_no += 1;
    if(question_no <= mcq_questions.length){
        nextQuestion();
    }
    else{
        start_mcq();
    }
}

function nextQuestion(){
    if(question_no < mcq_questions.length){
        showQuestion()
      }
      else{
        showScores()
      }
}

function showScores(){
    reset();
    question.innerHTML =  `You have scored ${score} out of 10.`
    next.style.display = "block"
    next.innerHTML = "Play Again"
    next.style.backgroundColor = "#f8f9fa";
    for(let i = 0; i < 4; i++){
      buttons[i].style.display = "none";
    }
    high_scores.style.display = "block";
  }

function addHover() {
    for (let i = 0; i < 4; i++) {
        buttons[i].addEventListener("mouseenter", mouseEnterHandler);
        buttons[i].addEventListener("mouseleave", mouseLeaveHandler);
    }
    next.addEventListener("mouseenter", mouseEnterHandler)
    next.addEventListener("mouseleave", mouseLeaveHandler)
    
    high_scores.addEventListener("mouseenter", mouseEnterHandler)
    high_scores.addEventListener("mouseleave", mouseLeaveHandler)
}

function removeHover() {
    for (let i = 0; i < 4; i++) {
        buttons[i].removeEventListener("mouseenter", mouseEnterHandler);
        buttons[i].removeEventListener("mouseleave", mouseLeaveHandler);
    }
}

function mouseEnterHandler() {
    this.style.backgroundColor = "gray";
}

function mouseLeaveHandler() {
    this.style.backgroundColor = "black";
}
start_mcq();