// الأسئلة والخيارات
const questions = [
  {
    question: "ما ناتج الكود التالي؟ let x = 2; let y = 3; console.log(x + y);",
    answers: ["5", "23", "undefined"],
    correct: "5"
  },
  {
    question: "ما نوع اللغة التي نستخدمها في هذه اللعبة؟",
    answers: ["Python", "JavaScript", "HTML"],
    correct: "JavaScript"
  },
  {
    question: "ما معنى console.log؟",
    answers: ["إظهار نص في المتصفح", "رسم الأشكال", "تشغيل الصوت"],
    correct: "إظهار نص في المتصفح"
  }
];

let current = 0;
let score = 0;

// عرض السؤال الأول
function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(answer);
    answersDiv.appendChild(btn);
  });

  document.getElementById("result").textContent = "";
  document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(answer) {
  const q = questions[current];
  const result = document.getElementById("result");

  if (answer === q.correct) {
    result.textContent = "✅ إجابة صحيحة!";
    result.style.color = "green";
    score++;
  } else {
    result.textContent = "❌ إجابة خاطئة.";
    result.style.color = "red";
  }

  document.getElementById("nextBtn").style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.querySelector(".game").innerHTML = `
      <h2>🏁 انتهت اللعبة!</h2>
      <p>نتيجتك: ${score} من ${questions.length}</p>
      <button onclick="location.reload()">إعادة اللعب 🔁</button>
    `;
  }
}

showQuestion();