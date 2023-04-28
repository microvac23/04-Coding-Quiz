var startEl = document.querySelector("#start")
var timerEl = document.querySelector('#timer')
var mainEl = document.querySelector('#main')
var quizOptions = document.querySelector('.btn')

var timeLeft = 60;
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

function startQuiz() {
  mainEl.textContent = " ";


  var q1 = document.createElement('div')
  q1.innerText = "Which is correct?"
  mainEl.appendChild(q1)

  var o1 = document.createElement('button')
  o1.classList.add('btn', 'o1')
  o1.innerText = "correct"
  q1.appendChild(o1)

  var o2 = document.createElement('button')
  o2.classList.add('btn', 'o2')
  o2.innerText = "not"
  q1.appendChild(o2)

  var o3 = document.createElement('button')
  o3.classList.add('btn', 'o3')
  o3.innerText = "not"
  q1.appendChild(o3)

  var o4 = document.createElement('button')
  o4.classList.add('btn', 'o4')
  o4.innerText = "not"
  q1.appendChild(o4)

  quizOptions.addEventListener('click', function(){
    question2()
  });
  o1.addEventListener('click', function() {
    console.log("hello");
  })
  
}

function question2() {
  o1.innerText = "not";
  o2.innerText = "correct";
  o3.innerText = "not";
  o4.innerText = "not";

  mainEl.addEventListener('click', function(){
    question3()
  });
}

function question3() {
  o1.innerText = "not";
  o2.innerText = "not";
  o3.innerText = "Correct";
  o4.innerText = "not";

  mainEl.addEventListener('click', function(){
    question4()
  });
}

function question4() {
  o1.innerText = "not";
  o2.innerText = "not";
  o3.innerText = "not";
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

function endQuiz() {
    timerEl.textContent = "Finished!";
    mainEl.textContent = "Your score is..."
}