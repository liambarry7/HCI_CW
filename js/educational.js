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
    }
];


const quiz = document.getElementById("quiz");

function loadQuizQuestion() {
    quiz.innerHTML = `
        <div class="quiz">
            <h3 id="questionTitle">${questions[questionCount].question}</h3>
            
            <div id="answerSet">
                <div class="answerBox">
                    <input type="radio" id="a" name="disasterQuiz" value="${questions[questionCount].options[0]}">
                    <label for="a">${questions[questionCount].options[0]}</label><br>
                </div>
                <div class="answerBox">
                    <input type="radio" id="b" name="disasterQuiz" value="${questions[questionCount].options[1]}">
                    <label for="b">${questions[questionCount].options[1]}</label><br>
                </div>
                <div class="answerBox">
                    <input type="radio" id="c" name="disasterQuiz" value="${questions[questionCount].options[2]}">
                    <label for="c">${questions[questionCount].options[2]}</label>
                </div>
                <div class="answerBox">
                    <input type="radio" id="d" name="disasterQuiz" value="${questions[questionCount].options[3]}">
                    <label for="d">${questions[questionCount].options[3]}</label>
                </div>
                <button type="submit" onclick="myFunction()" id="quizSubmit" class="optionSubmit">Submit</button>
            </div>
        </div>
        `;               
}

window.addEventListener("DOMContentLoaded", loadQuizQuestion, false);

// set up question counts
console.log("no of questions: " + questions.length)
let questionCount = 0;
let correctCount = 0;

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
        console.log(userAnswer);

        if (userAnswer == questions[questionCount].answer) {
            correctCount++;
            console.log("Correct");
        } else {
            console.log("Incorrect");
        }

        // turn submit button into a continue button, show correct answer until btn clicked
        

        // load next question
        if (questionCount+1 < questions.length) {
            questionCount++;
            loadQuizQuestion();
                

        }
    } else {
        // display error message
        // -> if user clicks on radio after message, make it disappear
        console.log("No answer selected.")
    }


    

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