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
    }
];

function loadQuestion() {
    document.getElementById("questionTitle").innerHTML = questions[0]
}


/** Quiz:
    - 8 questions at random (one for each disaster), 4 options per answer
    - have clickable banners/buttons that change colour when selected
    - have an accept button to confirm answer
    - keep a live score in corner of right/wrong answers
    - 
    - Looks like this: https://www.geeksforgeeks.org/javascript/create-a-quiz-app-with-timer-using-html-css-and-javascript/