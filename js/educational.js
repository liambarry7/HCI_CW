const questions = [
    {
        question: "Where were wildfires most common in 2024?",
        options: ["Australia", "China", "Portugal", "USA"],
        answer: "a",
    },

    {
        question: "Which statement is false?",
        options: ["Node.js is open-source", "Node.js is frontend", "Node.js is backend", "Node supports custom modules"],
        answer: "b"
    },

    {
        question: "Who won the 2006 F1 World Championship?",
        options: ["Kimi Raikkonen", "Jenson Button", "Fernando Alonso", "Giancarlo Fisichella"],
        answer: "c"
    },

    {
        question: "Which driver raced for lotus in 2012?",
        options: ["Nico Hulkenburg", "Nico Rosberg", "Timo Glock", "Romain Grosjean"],
        answer: "d"
    },

    {
        question: "Who won the 2012 Spanish GP?",
        options: ["Fernando Alonso", "Pastor Maldonado", "Sebastian Vettel", "Lewis Hamilton"],
        answer: "b"
    },

    {
        question: "Who is the only team to win the constructors championship their debut season?",
        options: ["Ferrari", "Williams", "Mclaren", "Brawn GP"],
        answer: "d"
    },

    {
        question: "Which driver has 32 Victories?",
        options: ["Fernando Alonso", "Sterling Moss", "Niki Lauda", "James Hunt"],
        answer: "a"
    },

    {
        question: "Who won the 2023 conference league final?",
        options: ["Roma", "Fiorientina", "West Ham United", "Olympiacos"],
        answer: "c"
    }
];

// set up question counts
console.log("no of questions: " + questions.length)
let questionCount = 0;
let correctCount = 0;

const quiz = document.getElementById("quiz");

function loadQuizQuestion() {
    quiz.innerHTML = `
        
            <h3 id="questionTitle">${questions[questionCount].question}</h3>
            <p class="quizP">Question: ${questionCount+1}/${questions.length}</p>
            
            <div id="answerSet">
                <div class="answerBox" onclick="selectedAnswer(this)">
                    <input type="radio" id="a" name="disasterQuiz" value="${questions[questionCount].options[0]}">
                    <label for="a">${questions[questionCount].options[0]}</label>
                </div>
                <div class="answerBox" onclick="selectedAnswer(this)">
                    <input type="radio" id="b" name="disasterQuiz" value="${questions[questionCount].options[1]}">
                    <label for="b">${questions[questionCount].options[1]}</label>
                </div>
                <div class="answerBox" onclick="selectedAnswer(this)">
                    <input type="radio" id="c" name="disasterQuiz" value="${questions[questionCount].options[2]}">
                    <label for="c">${questions[questionCount].options[2]}</label>
                </div>
                <div class="answerBox" onclick="selectedAnswer(this)">
                    <input type="radio" id="d" name="disasterQuiz" value="${questions[questionCount].options[3]}">
                    <label for="d">${questions[questionCount].options[3]}</label>
                </div>
                <p class="quizError">Please choose an answer</p>
                <button type="button" onclick="myFunction()" id="quizSubmit" class="optionSubmit">Submit</button>

            </div>
        
        `;               
}

window.addEventListener("DOMContentLoaded", loadQuizQuestion, false);



// submit button - to next question or submit final answers
function myFunction() {
    console.log("question no:" + questionCount);
    console.log("correct: " + correctCount);
    console.log(document.getElementById('a').checked || document.getElementById('b').checked || document.getElementById('c').checked || document.getElementById('d').checked) //to check if an item is selected



    // loop through all radios to check if an one is selected
    //      -> if none, do not let go forward and display message saying to select one
    // if checked, take the value (a/b/c/d) and check against answer in object
    // then load next question with updated q count and a saved score

    // check if user selected item
    if (document.getElementById('a').checked || document.getElementById('b').checked || document.getElementById('c').checked || document.getElementById('d').checked) {

        // check if selected answer is correct
        const userAnswer = document.querySelector(`input[name='disasterQuiz']:checked`).id;
        const correctAnswer = questions[questionCount].answer;
        const userCorrect = (userAnswer == correctAnswer);
        console.log(userAnswer, correctAnswer);
        console.log(userCorrect);

        if (userAnswer == correctAnswer) {
            correctCount++;
            console.log("Correct");
        } else {
            console.log("Incorrect");
        }

        // disable submit button until timer begins and ends
        document.getElementById("quizSubmit").disabled = true;

        // turn wrong answers red
        const answerBoxes = document.querySelectorAll(".answerBox");
        answerBoxes.forEach(box => {
            box.classList.add('wrong');
        });

        // remove wrong class from correct answer, turn green
        const r = document.getElementById(correctAnswer);
        const parent = r.closest(".answerBox");
        parent.classList.remove("wrong");
        parent.classList.add("correct");
        
        
        // continue, wait for 4 seconds to see correct answer before next answer loads
        setTimeout(() => {
            console.log("Hello, its good to be back");

            // load next question if qcount < qlength
            if (questionCount+1 < questions.length) {
                questionCount++;
                loadQuizQuestion();

            } else {
                // load results screen if no more questions
                console.log("Quiz finished");
                loadResults();
            }
        }, 2000);
    

        
    } else {
        // display error message
        // -> if user clicks on radio after message, make it disappear
        console.log("No answer selected.")
    }

}


function selectedAnswer(selectedBox) {
    // change class of options if one is selected
    const answerBoxes = document.querySelectorAll(".answerBox");
    
    // remove selected class from all boxes
    answerBoxes.forEach(box => {
        box.classList.remove('selected');
    })
    
    // add selected class to selected box
    selectedBox.classList.add("selected"); 
}






/** Quiz:
    - 8 questions at random (one for each disaster), 4 options per answer
    - have clickable banners/buttons that change colour when selected
    - have an accept button to confirm answer
    - keep a live score in corner of right/wrong answers
    - 
    - Looks like this: https://www.geeksforgeeks.org/javascript/create-a-quiz-app-with-timer-using-html-css-and-javascript/
    
    - add a start button to begin the quiz?
    - make a leaderboard of top 10 scores?
**/




function loadResults() {

    quiz.innerHTML = `
        <h3 id="questionTitle">Your results from the quiz:</h3>
        <p class="resultsP">You scored ${correctCount} / ${questions.length}!</p>
        <div>
            <canvas id="myChart" width="200" height="100"></canvas>
        </div>
    `;

    const xValues = ["Correct", "Incorrect"];
    // const yValues = [correctCount, questions.length-correctCount];
    const yValues = [5, 3];

    const barColors = [
    "#00ff0dff",
    "#f71111ff"
    ];

    new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
            title: {
            display: true,
            text: "World Wide Wine Production 2018"
            }
        }
    });

    
}
