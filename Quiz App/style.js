
const questions = [
    {
        question: "1. What is the fastest land animal?",
        options : ["Cheetah","Lion","Horse","Dog"],
        answer : "Cheetah"
    },
    {
        question: "2. Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question : "3. Water freezes at what temperature?",
        options : ["0°C","50°C","100°C","10°C"],
        answer : "0°C"
    },
    {
        question : "4. WWhich language is used for web styling?",
        options : ["HTML","CSS","JavaScript","Python"],
        answer : "CSS"
    },
];

let nxtButton = document.createElement('button');
nxtButton.textContent = 'Next';
nxtButton.classList.add('submit');

const questionsBox = document.querySelector(".questions-box");

let question;
let btn;
let score = 0;
let selectedAns = "";
let optionButtons;
let currentQuestion = 0;


function loadQuestions(currentQuestion){

    question = document.createElement('p');
    question.textContent = questions[currentQuestion].question;
    question.classList.add('question');
    questionsBox.appendChild(question);

    questions[currentQuestion].options.forEach(option  =>{
        btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add('options');
        questionsBox.appendChild(btn);
    });

    optionButtons = document.querySelectorAll('.options');

    optionButtons.forEach(btn => {

        btn.addEventListener('click' , () =>{
            selectedAns = btn.textContent;
            if(selectedAns === questions[currentQuestion].answer){
                score++;
                btn.classList.add('correctAns');
            }
            else{
                optionButtons.forEach(crtAnsBtn => {
                    crtAns = crtAnsBtn.textContent;
                    if(crtAns === questions[currentQuestion].answer)
                        crtAnsBtn.classList.add('correctAns');
                })
                btn.classList.add('incorrectAns');
            }
            
            questionsBox.appendChild(nxtButton);
            nxtButton.addEventListener('click', ()=>{
                questionsBox.innerHTML = "";
                currentQuestion++;

                if(currentQuestion < questions.length){
                    loadQuestions(currentQuestion);
                }
                else{
                    resultDisplay();
                }                
            });
        });
    });

}

loadQuestions(currentQuestion);

let tryAgain = document.createElement('button');
tryAgain.textContent = 'Try Again!';
tryAgain.classList.add('submit');


function resultDisplay(){
    let para = document.createElement('p');
    para.textContent = `The Result is: ${score}`;
    para.classList.add('question');
    questionsBox.appendChild(para);
    questionsBox.appendChild(tryAgain);

    tryAgain.addEventListener('click',() =>{
        questionsBox.innerHTML = "";
        loadQuestions(0);
    });
}
