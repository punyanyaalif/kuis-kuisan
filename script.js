const quizData = [
    {
        question: "Berapa kedalaman Laut Merah?",
        a: "2.121 meter",
        b: "2.221 meter",
        c: "2.122 meter",
        d: "2.211 meter",
        correct: "d",
    }, {
        question: "Apakah teori Kota Atlantis itu nyata?",
        a: "Ya kak",
        b: "Katanya sih",
        c: "Ah yang bener kamu?",
        d: "Semua jawaban tidak salah",
        correct: "c",
    }, {
        question: "Apa sebab orang meninggal di gunung?",
        a: "Nakal dan diculik jin",
        b: "Hipotermia",
        c: "Hipopotamus",
        d: "Hipotesis",
        correct: "c",
    }, {
        question: "Sila keberapa yang dipercayai Pemuda Pancasila?",
        a: "1",
        b: "2",
        c: "5",
        d: "Tidak ada jawaban yang tidak benar",
        correct: "d",
    }, {
        question: "Kapan Bumi ulang tahun?",
        a: "22 April",
        b: "31 Desember",
        c: "1 Juni",
        d: "29 Februari",
        correct: "a",
        
    }
];

const quizNgaco = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerElements = document.querySelectorAll('.answer');


let currentQuestion = 0;
let score = 0;

// masukin pertanyaan ke kotak
// load quiz into quiz box

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

// milih jawabannya
// select one of multiple choices

function getSelected() {
    
    let answer = undefined

    answerElements.forEach((answerElement) => {
        if(answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}

// atur ulang pilihan
// reset pointer

function deselectAnswer() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}



// lanjut ke quiz berikutnya setelah dijawab
// proceed to next question 

submitBtn.addEventListener("click", () => {
    // cek jawabannya
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quizNgaco.innerHTML = `<h2>Kamu benar ${score}. Selamat waktu Anda terbuang sia - sia`;
        }
    }
})



//skor quiz
// quiz score


loadQuiz();






