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
        "<ul>",
        "<ol>",
        "<li>",
        "<dl>"
      ],
      answer: "<ul>"
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
        "<js>",
        "<scripting>",
        "<javascript>",
        "<script>"
      ],
      answer: "<script>"
    },
    {
      question: "How can you add a comment in a JavaScript?",
      options: [
        "// This is a comment",
        "' This is a comment",
        "<!-- This is a comment -->",
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

  let questionNo = 0;
  let score = 0;
  
  function showQuestion(qNo){
    qn = questions[qNo];
    number = qNo + 1;
    console.log(qn)

    document.querySelector('.question').innerHTML = number + ". " + qn.question;
    document.querySelector('#ans1').innerHTML = qn.options[0];
    document.querySelector('#ans2').innerHTML = qn.options[1];
    document.querySelector('#ans3').innerHTML = qn.options[2];
    document.querySelector('#ans4').innerHTML = qn.options[3];
  }

  showQuestion(0);