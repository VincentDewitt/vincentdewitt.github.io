//Storing data for questions,answers//
let quizQuestions = [{
    question: "In Empire Strikes Back What City is Lando in charge of?",
    answera: "Cloud City",
    answerb: "Rainy City",
    answerc: "Plant City",
    answerd: "Sky City",
    correct: "answera"
},
{
question: "What Color is Darth Vaders lightsaber?",
answera: "Red",
answerb: "Pink",
answerc: "Green",
answerd: "Blue",
correct: "answera"
},
{
    question: "In Return of the Jedi, what ship does Lando pilot on his attack on the second Death Star?",
    answera: "A-Wing",
    answerb: "B-Wing",
    answerc: "X-Wing",
    answerd: "Millennium Falcon",
    correct: "answerd"
},
{
    question: "Darth Vader was formerly known by what name?",
    answera: "Anakin Skywalker",
    answerb: "Luke Starkiller",
    answerc: "Anakin Starkiller",
    answerd: "Obi-Wan Kenobi",
    correct: "answera"
},
{
    question: "What planet did Luke Skywalker grow up on?",
    answera: "Tatooine",
    answerb: "Dantooine",
    answerc: "Yavin IV",
    answerd: "Jakku",
    correct: "answera"
}
]
//variables
let currentQuestion= 0;
let currentScore=0;

//button action
function startQuiz(){
    $('.startquizbutton').click(function (event){
        event.preventDefault();
        createQuestionView();

    })

}
//checking value of answer submited
function checkAnswer(){
$('.welcome_section').on('click' , '.submitanswer' , function (event){
    event.preventDefault();
    let answerSelected = $('.option:checked').val();
    if ( answerSelected === undefined){
        $('.unselected_error').html(`
        <p>
        Please select a answer
        </p>
        `)
    }

    else if (answerSelected === quizQuestions[currentQuestion].correct){
        currentScore++;
        $('.welcome_section').html(`
        <div class="quizinfo">
            <div class="userscore">
               <p>Score ${currentScore}/${quizQuestions.length}</p>
           </div>
        <div class="questionprog">
               <p>Question ${currentQuestion+1}/${quizQuestions.length}</p>
        </div>
   </div>
    <div class="feedbackright_section">
    <img src="images-content/Correctanswer.gif" alt="BB-8 giving you a thumbs up!">
     <p>Congrats your correct. Click the button below to go to the next question.  </p>
     <form>
         <button class="next_question" type="submit">Next Question</button>
     </form>
    </div>
        `)

    }
    else {
        $('.welcome_section').html(`
        <div class="quizinfo">
        <div class="userscore">
           <p>Score ${currentScore}/${quizQuestions.length}</p>
       </div>
    <div class="questionprog">
           <p>Question ${currentQuestion+1}/${quizQuestions.length}</p>
    </div>
</div>
<div class="feedbackwrong_section">
<img src="images-content/wronganswer.gif" alt="Poe Dameron telling you to rethink your technique.">
 <p>You may want to listen to Poe's Advice, hit the button below for the next question.  </p>
 <form>
     <button class="next_question" type="submit">Next Question</button>
 </form>
</div>
        `)
    }



    let CurrentQ = quizQuestions[currentQuestion]
    
})
}
//function proceeds to the next question and tells quiz when its over
function nextQuestion(){
    $('.welcome_section').on('click', '.next_question' , function (event){
        event.preventDefault();
        currentQuestion++
        if (currentQuestion === quizQuestions.length){
            $('.welcome_section').html(`
            <div class="final_section">
        <div class="finalscore">
            <h3>Final Score: ${currentScore}/${quizQuestions.length}</h3>
        </div>
        <img src="images-content/endquiz.gif" alt="end img">
        <p>For better or worse you completed the test! Click the button below to restart. </p>
        <form>
         <button class="restartbutton" type="submit">Restart Quiz</button>
        </form>
        </div>
            `)
        }
        else{
        createQuestionView();
        }

    });
}
function restartQuiz(){
    $('.welcome_section').on('click','.restartbutton', function (event){
        event.preventDefault();
        currentScore=0;
        currentQuestion=0;
        createQuestionView();

    })

}
function createQuestionView(){
    const questionHtml = $(`
    <div class="quizinfo">
         <div class="userscore">
            <p>Score ${currentScore}/${quizQuestions.length}</p>
        </div>
     <div class="questionprog">
            <p>Question ${currentQuestion+1}/${quizQuestions.length}</p>
     </div>
</div>
    <div class="Question_section">
     <form>
         <fieldset>
             <legend>${quizQuestions[currentQuestion].question}</legend>
          <label>
              <input name="option" class="option" type="radio" value="answera">${quizQuestions[currentQuestion].answera}
          </label>
          <label>
                <input name="option" class="option" type="radio" value="answerb">${quizQuestions[currentQuestion].answerb}
            </label> 
            <label>
                    <input name="option" class="option" type="radio" value="answerc">${quizQuestions[currentQuestion].answerc}
            </label>
            <label>
                    <input name="option" class="option" type="radio" value="answerd">${quizQuestions[currentQuestion].answerd}
            </label>         
         <button class="submitanswer" type="submit">submit</button>
        </fieldset>
     </form>
     <div class="unselected_error">
     </div>
    </div>
    `);
    $(".welcome_section").html(questionHtml);

}
function init(){
    startQuiz(); 
    checkAnswer(); 
    nextQuestion();
    restartQuiz();

}
init();