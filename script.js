const quizData = [
    {
        question: "What's your go-to strategy when you feel a fart coming on in public?",
        a: "Hold it in until the coast is clear.",
        b: "Let it out silently and keep a straight face.",
        c: "Excuse yourself and find a more private location.",
        d: "Blame it on the nearest dog or toddler",
        correct: "d",
    },
    {
        question: "If your farts had a scent, which of these would they be?",
        a: "Freshly cut grass",
        b: "Old library books",
        c: "Morning coffee",
        d: "Burnt rubber",
        correct: "b",
    },
    {
        question: "How do you react if you accidentally let one slip during a serious meeting?",
        a: "Turn beet red and sink into your chair.",
        b: "Keep talking as if nothing happened.",
        c: "Apologize and blame it on your lunch.",
        d: "Start a discussion about natural human processes to diffuse the tension.",
        correct: "a",
    },
    {
        question: "What would you do if you were on a first date and needed to fart?",
        a: "Excuse yourself to use the restroom.",
        b: "Hold it until you think you’ll explode.",
        c: "Make a joke about it and see if your date has a sense of humor.",
        d: "Let it out and pretend nothing happened.",
        correct: "b",
    },
    {
        question: "Which type of fart are you most proud of?",
        a: "The silent but deadly",
        b: "The loud and proud",
        c: "The one that goes unnoticed",
        d: "The musical variety",
        correct: "b",
    },
    {
        question: "Choose a movie title that best describes your farting habits.",
        a: "Gone with the Wind",
        b: "The Sound of Music",
        c: "The Invisible Man",
        d: "A Quiet Place",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

// software engineer || Primer github

// -6-7 - read scriptures 
// -7-8 -meditate and breakfast 
// -8-9 - Brain exercises / journal entries 10 mintues 
// -9-10 -photoshop
// -10-11 -gym?
// -11-12 -Business
// -12-8 -Coding 