const computerChoiceDisplay = document.getElementById('Ai_Choice');
const userChoiceDisplay = document.getElementById('User_Choice');
const ResultDisplay = document.getElementById('Result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let Result
possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',()=>{
    userChoice=possibleChoices.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice(){
    const randomNumber=Math.floor((Math.random()* possibleChoices.length) + 1);

    if(randomNumber === 1)
    {
        computerChoice='Rock'
    }
    
    if(randomNumber === 2)
    {
        computerChoice='Paper'
    }
    
    if(randomNumber === 3)
    {
        computerChoice='Scissors'
    }
    computerChoiceDisplay.innerHTML=computerChoice;
}

function getResult(){
    if(computerChoice===userChoice){
        Result = "It's a Draw"
    }
    if(computerChoice==='Rock' && userChoice==='Paper')
    {
        Result = "You Won!!!"
    }
    if(computerChoice==='Rock' && userChoice==='Scissors')
    {
        Result = "You Lose"
    }
    
    
    if(computerChoice==='Scissors' && userChoice==='Paper')
    {
        Result = "You Lose"
    }
    if(computerChoice==='Scissors' && userChoice==='Rock')
    {
        Result = "You Win!!!"
    }


    if(computerChoice==='Paper' && userChoice==='Rock')
    {
        Result = "You Lose!!!"
    }
    if(computerChoice==='Paper' && userChoice==='Scissors')
    {
        Result = "You Win!!!"
    }
    ResultDisplay.innerHTML=Result;   
}