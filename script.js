let score = 0;
let currentQuestion = 0;
const totalQuestions = 10;

function start() {
  document.getElementById('start-page').style.display = 'none';
  document.getElementById('q1').style.display = 'block';
}

function correct() {
  if (document.getElementById('right').checked) {
    score += 1; // Increment score by 1 if the correct answer is checked
  }

  // ... rest of the code (if there's more)
}

function next() {
  if (currentQuestion > 0) {
    document.getElementById(`q${currentQuestion}`).style.display = 'none';
  }

  currentQuestion++;

  if (currentQuestion <= totalQuestions) {
    document.getElementById(`q${currentQuestion}`).style.display = 'block';
  } else {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementById('score').innerHTML = `Score: ${score}`;
    document.getElementById('retry').style.display = 'block';
  }
}

function back() {
  if (currentQuestion > 1) {
    document.getElementById(`q${currentQuestion}`).style.display = 'none';
    currentQuestion--;
    document.getElementById(`q${currentQuestion}`).style.display = 'block';
  }
}
