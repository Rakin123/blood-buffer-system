function hideButton(id){
    const button = document.getElementById(id);
    button.style.display = 'none';
    displayQuestion()
    
}


var questions = ["What is the purpose of pulmonary regulation in this equilibrium?", "If the pH of the blood is low, what direction does the reaction move to reach equilibrium?", "What is the name of the biological system that maintains blood pH in the body?", "In cases of shock or trauma, how can the body attempt to restore acid-base equilibrium?", "Hypoventilation is when …", "In cases of prolonged hyperventilation, the body may initiate a mechanism to restore acid-base balance. What renal response is likely to occur, and how does it contribute to equilibrium restoration?", "Carbonic acid (H2CO3) is a weak acid, meaning that it completely ionizes in water, allowing it to be in equilibrium with bicarbonate.", "A blood pH higher than 7.45 (pH>7.45) is known as Alkalosis.", "Renal regulation, used in the kidneys, occurs by reabsorbing bicarbonate from urine and secretion of hydronium ions based on acidity of blood.","Carbon dioxide binds to bicarbonate ions within the lungs to export carbon dioxide throughout the body.", "prevent error"]
var answers = [["a. Increases blood flow", "b.Regulates carbonic acid in equilibrium", "c. Regulates carbon dioxide in equilibrium", "d. Decreases water in equilibrium"],["a.Moves Forward ","b.Moves Backward ", "c.Doesn't move at all ", "d.We cannot predict the direction of reaction when there is a low blood pH"],["a.Vital pH regulator ","b.Metabolic rejuvenation ", "c.Heartbreaker ", "d.Blood Buffer "],["a.Reducing respiratory rate ","b.Increasing carbon dioxide levels", "c.Releasing lactic acid into bloodstream", "d.Increasing rate of exhalation"],["a.Someone is breathing at an abnormally slow rate ","b.Someone is breathing at an abnormally high rate ", "c.When someone is experiencing increased levels of stress ", "d.When not enough oxygen is being provided into the blood "],["a.Increased reabsorption of bicarbonate ions, leading to metabolic acidosis. ","b.Decreased excretion of hydrogen ions, promoting respiratory alkalosis. ", "c.Enhanced secretion of bicarbonate ions, resulting in metabolic alkalosis. ", "d.Reduced reabsorption of chloride ions, causing respiratory acidosis. "],["True", "False"],["True", "False"],["True", "False"],["True", "False"], [true,false]]
var ans =[2,1,3,3,0,2,1,0,0,1]


var type = null

var started = false

var score =0;




options = ["a", "b", "c", "d"]

const questiontxt = document.getElementById("question");
const prog = document.getElementById("progress")
const aop = document.getElementById("optiona");
const bop = document.getElementById("optionb");
const cop = document.getElementById("optionc");
const dop = document.getElementById("optiond");
const start = document.getElementById("begin");
const end = document.getElementById("next");
const nextmc = document.getElementById("nextq");




let numPos = 0; // Track the current question position
let c = -1;

function startQuiz() {
  // Display the first question and options
  displayQuestion();
}

function displayQuestion() {
  // Fetch necessary elements and update content for the current question
  prog.style.display = 'block'
  prog.textContent = "Question "+ (numPos+1) +" out of 10"


    


  if(answers[numPos].length === 4){
    type = "mc"

    aop.style.display = 'block'
    bop.style.display = 'block'
    cop.style.display = 'block'
    dop.style.display = 'block'


    questiontxt.textContent = questions[numPos];
    aop.textContent = answers[numPos][0];
    bop.textContent = answers[numPos][1];
    cop.textContent = answers[numPos][2];
    dop.textContent = answers[numPos][3];

  }else{
    type = "TF"
    aop.style.display = 'block'
    bop.style.display = 'block'
    cop.style.display = 'none'
    dop.style.display = 'none'


    questiontxt.textContent = questions[numPos];
    aop.textContent = answers[numPos][0];
    bop.textContent = answers[numPos][1];

  }

  

  // Increase the question position for the next iteration
  c++
  console.log(numPos, questions.length) 

  if(numPos === questions.length-1){

    
    end.style.display = 'block'
    end.textContent = 'Next'
    nextmc.style.display = 'none'

    prog.style.display = 'none'

    questiontxt.textContent = "You scored " + score + "/10"
    aop.style.display = 'none'
    bop.style.display = 'none'
    cop.style.display = 'none'
    dop.style.display = 'none'
  }

  
}

aop.addEventListener('click', function(){
    if(ans[numPos] === 0){
        score++
        
    }else{
        aop.style.backgroundColor = 'red'
    }
    console.log(score)

    nextmc.style.display = 'block'

    if(ans[numPos] === 0){
        aop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 1){
        bop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 2){
        cop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 3){
        dop.style.backgroundColor = 'green'
    }
})

bop.addEventListener('click', function(){
    if(ans[numPos] === 1){
        score++

    }else{
        bop.style.backgroundColor = 'red'
    }
    console.log(score)
    nextmc.style.display = 'block'

    if(ans[numPos] === 0){
        aop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 1){
        bop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 2){
        cop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 3){
        dop.style.backgroundColor = 'green'
    }
    
})

cop.addEventListener('click', function(){
    if(ans[numPos] === 2){
        score++
    }else{
        cop.style.backgroundColor = 'red'
    }
    console.log(score)
    nextmc.style.display = 'block'

    if(ans[numPos] === 0){
        aop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 1){
        bop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 2){
        cop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 3){
        dop.style.backgroundColor = 'green'
    }
    
})

dop.addEventListener('click', function(){
    if(ans[numPos] === 3){
        score++
    }else{
        dop.style.backgroundColor = 'red'
    }
    console.log(score)
    nextmc.style.display = 'block'

    if(ans[numPos] === 0){
        aop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 1){
        bop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 2){
        cop.style.backgroundColor = 'green'
    }else if(ans[numPos] === 3){
        dop.style.backgroundColor = 'green'
    }
    
})

nextmc.addEventListener('click', function(){
    numPos++
    displayQuestion()

    aop.style.backgroundColor = '#f0aaaa'
    bop.style.backgroundColor = '#f0aaaa'
    cop.style.backgroundColor = '#f0aaaa'
    dop.style.backgroundColor = '#f0aaaa'
})

end.addEventListener('click', function(){
    questiontxt.textContent = "Quiz of 10 Questions"
    start.style.display = 'block'
    numPos = 0;
    score = 0
    end.style.display = 'none'
    
})

function finished(){
    questiontxt.textContent = "You scored 4/10"
    


}









    

    



