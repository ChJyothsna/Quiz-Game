// Variables required
let start = document.getElementsByClassName("start-btn");
let next = document.getElementsByClassName("next-btn");
let question = document.getElementsByClassName("question");
let question_no = document.getElementsByClassName("number");
let option = document.getElementsByClassName("label");
let radio = document.getElementsByName("options");
let indices = [0];
let randomindex = 0;
let currentquestion = 1;
let score = 0;
let temp = 0;
let index = 0;


// Questions for the Quiz
let questions = [
  {
    "question": "Which type of JavaScript language is ___",
    "options": ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
    "correct": ["Object-Based"]
  },
  {
    "question": "Also known as Conditional Expression:",
    "options": ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
    "correct": ["immediate if"]
  },
  {
    "question": "The 'function' and 'var' are known as:",
    "options": ["Keywords", "Data types", "Declaration statements", "Prototypes"],
    "correct": ["Declaration statements"]
  },
  {
    "question": "When interpreter encounters an empty statements, what it will do:",
    "options": ["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"],
    "correct": ["Ignores the statements"]
  },
  {
    "question": "Which of the following type of a variable is volatile?",
    "options": ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
    "correct": ["Mutable variable"]
  },
  {
    "question": "Which of the following are table tags?",
    "options": ["table, thead, tr, td", "colspan, table, td", "table, tt, tr, td", "none of the mentioned"],
    "correct": ["table, thead, tr, td"]
  },
  {
    "question": "Firefox uses _______ rendering machine",
    "options": ["WebKit", "Gecko", "Trident", "Presto"],
    "correct": ["Gecko"]
  },
  {
    "question": "In css what does h1 called as",
    "options": ["Selector", "Attribute", "Value", "Tag"],
    "correct": ["Selector"]
  },
  {
    "question": "What is the CSS Property Equivalent for the attribute",
    "options": ["text-decoration:reappear", "text-decoration:blink", "text-decoration:no-text", "none"],
    "correct": ["text-decoration:no-text"]
  },
  {
    "question": "Rate the Quiz?",
    "options": ["Excellent", "Good", "Average", "Too Bad"],
    "correct": ["Excellent", "Good", "Average", "Too Bad"]
  },
];


// Start button clicked
start[0].addEventListener("click", () => {
  document.getElementById("main").style.visibility = "visible";
})


// Checking the radio button is checked or not
function radiobtnchecked() {
  let flag = 0;
  for (var i = 0; i < radio.length; i++) {
    if(radio[i].checked) {
      flag = 1;
      temp = i;
    }
  }
  return flag;
}


// Next button Clicked
next[0].addEventListener("click", () => {

  // Check if any radio button is clicked onr not
  if(radiobtnchecked() == 1)
  {
    calculateScore();

    // Generating random questions
    if(currentquestion < (questions.length-1))
    {
      randomindex = Math.floor(Math.random() * (questions.length - 2)) + 1;
      while(indices.includes(randomindex))
      {
        randomindex = Math.floor(Math.random() * (questions.length - 2)) + 1;
      }
      indices.push(randomindex);
      question_no[0].innerHTML = "Question  " + (currentquestion + 1);
      question[0].innerHTML = questions[randomindex].question;
      for (var i = 0; i < option.length; i++) {
        option[i].textContent = questions[randomindex].options[i];
        radio[i].value = questions[randomindex].options[i];
      }
      currentquestion += 1;
    } else if(currentquestion == (questions.length - 1)) {
      indices.push(9)
      question_no[0].innerHTML = "Question  " + (currentquestion + 1);
      question[0].innerHTML = questions[questions.length-1].question;
      for (var i = 0; i < option.length; i++) {
        option[i].textContent = questions[questions.length-1].options[i];
        radio[i].value = questions[questions.length-1].options[i];
      }
      currentquestion += 1;
    }
    // Reaches the final question, displaying the result
    else {
      question_no[0].innerHTML = "Final Result";
      question[0].innerHTML = "Your Score is   " + score;
      document.getElementsByClassName("options")[0].style.visibility = "hidden";
      document.getElementsByClassName("next-btn")[0].style.visibility = "hidden";
      document.getElementsByClassName("link")[0].style.visibility = "visible";
    }
    // When moving to the next question, uncheck the radio buttons
    for (var i = 0; i < radio.length; i++) {
      if(radio[i].checked) {
        radio[i].checked = false;
      }
    }
  }
  // If any radio button is not selected
  else {
    alert("Select any option");
  }
})


// Calculating the Score
function calculateScore() {
  if(questions[indices[index]].correct.includes(radio[temp].value)) {
    score += 1;
  }
  index += 1;
}
