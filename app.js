const player = document.getElementById('player_choice');
const computer = document.getElementById('compuer_choice');
const playerScore = document.getElementById('player_score');
const computerScore = document.getElementById('computser_score');
const rock_div = document.getElementById('rock_choice');
const scissors_div = document.getElementById('scissors_choice');
const paper_div = document.getElementById('paper_choice');


let pScore = 0;
let cScore = 0; 
const choice = [rock, paper, scissors];
let computerChoice = []

function computer_choice (){
    computerChoice.push(choice[Math.random() * 3])
    return computerChoice;
}

function sum (number) {
    return 1 * number
}
