const player = document.getElementById('player_choice');
const computer = document.getElementById('computer_choice');
const playerScore = document.getElementById('player_score');
const computerScore = document.getElementById('computer_score');
const rock_div = document.getElementById('rock_choice');
const scissors_div = document.getElementById('scissors_choice');
const paper_div = document.getElementById('paper_choice');


let pScore = 0;
let cScore = 0; 



function randomChoice() {
    const choice = ["r", "p", "s"];
    let randomChoice = choice[Math.floor(Math.random() * 3)];
    switch(randomChoice) {
        case "r":
        computer.innerHTML = "✊"
        break;
        case "s":
        computer.innerHTML = "✌️"
        break; 
        case "p":
        computer.innerHTML = "✋"
        break;   
    }
    return randomChoice;
}


function game (userChoice) {
    const computerChoice = randomChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win()
            break;
        case "sr":
        case "ps":
        case "rp":
            lose()
            
            break;
        case "ss":
        case "rr":
        case "pp":
            drawn()
            break;
    }
}

function win(){
    pScore++
    playerScore.innerHTML = "Player => " + pScore;
};

function lose(){
    cScore++
    computerScore.innerHTML ="Computer => " + cScore;
};

function drawn(){

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