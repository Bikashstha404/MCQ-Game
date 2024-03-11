const questions = [
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

const next = document.querySelector('.next');
const buttons = document.querySelectorAll('.btn');
const Question = document.querySelector('.question');
const highScores = document.querySelector('.high_scores');

let questionNumber = 0;
let score = 0;

function start_mcq(){
  questionNumber = 0;
  score = 0;
  for(let i = 0; i < 4; i++){
    buttons[i].style.display = "block";
  }
  next.innerHTML = "Next";
  next.style.backgroundColor = "coral"
  showQuestion()
}

function remodel(){
  for(let i = 0; i < 4; i++){
    buttons[i].style.backgroundColor = "#f8f9fa"
  }
  next.style.display = "None";
  highScores.style.display = "None";
}

function showQuestion(){
  remodel()
  addHover()
  q = questions[questionNumber];
  number = questionNumber + 1;
  realAns = q.answer;
  Question.innerHTML = number + ". " + q.question;
  for(let i = 0; i < 4; i++){
    buttons[i].innerHTML = q.options[i];
  }
  for(let i=0; i < 4; i++){
    buttons[i].addEventListener("click", checkAnswer)
  }
}

function checkAnswer(event){
  removeHover()
  clickedAns = event.target.innerHTML;
  if(clickedAns == realAns){
    event.target.style.backgroundColor = "lightgreen";
    score++;
  }
  else{
    
    event.target.style.backgroundColor = "red";
    for(let i = 0; i < 4; i++){
      buttons[i].removeEventListener("mouseenter",()=>{
        buttons[i].style.backgroundColor = "";
      })
      if(buttons[i].innerHTML == realAns){
        buttons[i].style.backgroundColor = "lightgreen";
      }
    }
  }
  for(let i=0; i < 4; i++){
    buttons[i].removeEventListener("click", checkAnswer)
  }
  next.style.display = "block";
}

next.addEventListener("click",nextButton);

function nextButton(){
  questionNumber = questionNumber + 1;
  if(questionNumber < questions.length + 1){
    nextQuestion()
  }
  else{
    start_mcq()
  }
}

function nextQuestion(){
  if(questionNumber < questions.length){
    showQuestion()
  }
  else{
    showScores()
  }
}

function showScores(){
  remodel();
  Question.innerHTML =  `You have scored ${score} out of 10.`
  next.style.display = "block"
  next.innerHTML = "Play Again"
  next.style.backgroundColor = "#f8f9fa";
  for(let i = 0; i < 4; i++){
    buttons[i].style.display = "none";
  }
  highScores.style.display = "block";
}

start_mcq()

function addHover(){
  for(let i = 0; i < 4; i++){
    buttons[i].addEventListener("mouseenter", mouseEnterHandler);
    buttons[i].addEventListener("mouseleave", mouseLeaveHandler);
  }
  next.addEventListener("mouseenter",()=>{
    next.style.backgroundColor = "yellowgreen";
  })
  next.addEventListener("mouseleave",()=>{
    next.style.backgroundColor = "coral";
  })
}

function removeHover(){
  for(let i = 0; i < 4; i++){
    buttons[i].removeEventListener("mouseenter", mouseEnterHandler);
    buttons[i].removeEventListener("mouseleave", mouseLeaveHandler);
  }
}

function mouseEnterHandler() {
  this.style.backgroundColor = "orange";
}

function mouseLeaveHandler() {
  this.style.backgroundColor = "#f8f9fa";
}