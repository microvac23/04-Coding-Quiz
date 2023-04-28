var startEl = document.querySelector("#start")
var timerEl = document.querySelector('#timer')
var mainEl = document.querySelector('#main')
var quizOptions = document.querySelectorAll('.btn')

//set timer function
var timeLeft = 61;
function setTimer() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds left";
        console.log(timeLeft);


      if(timeLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
  
    }, 1000);
  }

//starts the quiz with the initial question and appends option buttons
function startQuiz() {
  mainEl.textContent = " ";


  var q1 = document.createElement('ul')
  q1.innerText = "Q1 Which is correct?"
  mainEl.appendChild(q1)

  var o1 = document.createElement('button')
  o1.setAttribute('id', 'o1')
  o1.innerText = "correct"
  q1.appendChild(o1)

  var o2 = document.createElement('button')
  o2.setAttribute('id', 'o2')
  o2.innerText = "not correct"
  q1.appendChild(o2)

  var o3 = document.createElement('button')
  o3.setAttribute('id', 'o3')
  o3.innerText = "not correct"
  q1.appendChild(o3)

  var o4 = document.createElement('button')
  o4.setAttribute('id', 'o4')
  o4.innerText = "not correct"
  q1.appendChild(o4)

  mainEl.addEventListener('click', function(){
    question2()
  });
  o1.addEventListener('click', function() {
    console.log("hello");
  })
  
}

//changes button content and ids to correct or incorrect
function question2() {
  o1.innerText = "not correct";
  o2.innerText = "correct";
  o3.innerText = "not correct";
  o4.innerText = "not correct";

  mainEl.addEventListener('click', function(){
    question3()
  });
}

//changes button content and ids to correct or incorrect
function question3() {
  o1.innerText = "not correct";
  o2.innerText = "not correct";
  o3.innerText = "Correct";
  o4.innerText = "not correct";

  mainEl.addEventListener('click', function(){
    question4()
  });
}

//changes button content and ids to correct or incorrect
function question4() {
  o1.innerText = "not correct";
  o2.innerText = "not correct";
  o3.innerText = "not correct";
  o4.innerText = "Correct";

  mainEl.addEventListener('click', function(){
    endQuiz();
    
  });
}


startEl.addEventListener("click", function(){
    console.log("hi")
    startQuiz()
    setTimer()
}); 

//finish screen, 
function endQuiz() {
    timeLeft === 0;
    timerEl.textContent = "Finished!";
    mainEl.textContent = "Your score is..."
    
}