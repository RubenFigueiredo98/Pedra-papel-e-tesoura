const player = document.getElementById('player_choice');
const computer = document.getElementById('compuer_choice');
const playerScore = document.getElementById('player_score');
const computerScore = document.getElementById('computser_score');
const rock_div = document.getElementById('rock_choice');
const scissors_div = document.getElementById('scissors_choice');
const paper_div = document.getElementById('paper_choice');


let pScore = 0;
let cScore = 0; 
function computer_choice() {
    const choice = ["r", "p", "s"];
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}
console.log(computer_choice());
function game (userChoice) {

}


function main (){
   rock_div.addEventListener('click', function() {
    game("r")
});

paper_div.addEventListener('click', function() {
    game("p")
});

scissors_div.addEventListener('click', function() {
    game("s")
}); 


}
main()