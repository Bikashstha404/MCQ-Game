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

    let questionNumber = 9;
    let score = 0;
    function reset(){
      document.querySelectorAll('.btn').forEach((btn) =>{
        btn.style.backgroundColor = "burlywood";
      });
      document.querySelector('.next').style.display = "none";
    }

    function showQuestion(){
      reset()
      q = questions[questionNumber];
      number = questionNumber + 1;
      realAns = q.answer;

      document.querySelector('.question').innerHTML = number + ". " + q.question
      // document.querySelector('#ans1').innerHTML = q.options[0];
      // document.querySelector('#ans2').innerHTML = q.options[1];
      // document.querySelector('#ans3').innerHTML = q.options[2];
      // document.querySelector('#ans4').innerHTML = q.options[3];

      document.querySelectorAll('.btn').forEach((option, index) => {
        option.innerHTML = q.options[index];
      });

      document.querySelectorAll('.btn').forEach((button)=>{
          button.addEventListener("click", checkAnswer)
      })
    }

    function checkAnswer(event){
      clickedAns = event.target.innerHTML;
      let buttons = document.querySelectorAll('.btn');
      // console.log(clickedAns)
      if(clickedAns == realAns){
        event.target.style.backgroundColor = "green";
        score++;
      }
      else{
        event.target.style.backgroundColor = "red";
        for(let i = 0; i < buttons.length; i++){
          if(buttons[i].innerHTML == realAns){
            buttons[i].style.backgroundColor = "green";
          }
        }
      }
      document.querySelectorAll('.btn').forEach((button)=>{
        button.removeEventListener("click", checkAnswer);
        document.querySelector('.next').style.display="block";
      });
    }

    document.querySelector('.next').addEventListener("click",(event)=>{
      if(questionNumber < (questions.length -1)){
        questionNumber = questionNumber + 1;
        showQuestion()
      }
      else{
        showscores()
      }
    })

    function showscores(){
      reset()
      document.querySelector('.question').innerHTML = `You have scored ${score} out of 10.`
      document.querySelector('#ans1').innerHTML = "Play Again";
      document.querySelector('.next').style.display="block";
      document.querySelector('#ans2').innerHTML = "None";
      document.querySelector('#ans3').style.display = "None";
      document.querySelector('#ans4').style.display = "None";


    }

    showQuestion()