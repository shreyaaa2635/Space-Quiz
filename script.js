const questions=[
    {
        question: "Which is the largest planet of the solar system?",
        answers:[
            {text: "Jupiter",correct:true },
            {text: "Saturn",correct:false },
            {text: "Uranus",correct:false },
            {text: "Neptune",correct:false },
        ]
    },
    {
        question: "Which of the following is called 'Blue Planet'?",
        answers:[
            {text: "Mars",correct:false},
            {text: "Saturn",correct:false },
            {text: "Earth",correct:true },
            {text: "Venus",correct:false },
        ]
    },
    {
        question: "Who discovered the laws of planetary orbits?",
        answers:[
            {text: "Galileo Galilei",correct:false},
            {text: "Stephen Hawking",correct:false},
            {text: "Johannes Kepler",correct:true },
            {text: "Albert Einstein",correct:false },
        ]
    },
    {
        question: "Which of these is a dwarf planet?",
        answers:[
            {text: "Neptune",correct:false },
            {text: "Saturn",correct:false },
            {text: "Mercury",correct:false },
            {text: "Pluto",correct:true },
        ]
    },
    {
        question: "Who was the first person to walk on the moon?",
        answers:[
            {text: "Kalpana Chawla",correct:false },
            {text: "Neil Armstrong",correct:true },
            {text: "Chris Hadfield",correct:false },
            {text: "Aleksey Leonov",correct:false},
        ]
    },
];
const questionElement= document.getElementById("question");
const optionsButtons= document.getElementById("options");
const nextButton= document.getElementById("next");
let current=0;
let score=0;
function start(){
    current=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
    }
function showQuestion(){
    resetState();
    let currentquestion= questions[current];
    let qn=current+1;
    questionElement.innerHTML= qn+"."+currentquestion.question;

    currentquestion.answers.forEach(answer => {
     const button=document.createElement("button");
     button.innerHTML=answer.text;
     button.classList.add("opt");
     optionsButtons.appendChild(button);
     if(answer.correct){
        button.dataset.correct=answer.correct;
     }
     button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(optionsButtons.firstChild){
        optionsButtons.removeChild(optionsButtons.firstChild);
    }
}
function selectAnswer(e){
    const selBut= e.target;
    const iscorrect=selBut.dataset.correct==="true";
    if(iscorrect){
        selBut.classList.add("correct");
        score++;
    }
    else{
        selBut.classList.add("incorrect");
    }
    Array.from(optionsButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}
function handleNextButton(){
    current++;
    if(current<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML="You scored "+score+"  out of "+questions.length+ " !";
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
nextButton.addEventListener("click",()=>{
    if(current<questions.length){
        handleNextButton();
    }
    else{
        start();
    }
});
start();
