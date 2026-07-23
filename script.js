let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

function play(playerChoice){

    const computerChoice =
        choices[Math.floor(Math.random()*3)];

    document.getElementById("playerChoice").innerText =
        "You: " + playerChoice;

    document.getElementById("computerChoice").innerText =
        "Computer: " + computerChoice;

    let result = "";

    if(playerChoice === computerChoice){
        result = "🤝 It's a Tie!";
    }

    else if(
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ){
        result = "🎉 You Win!";
        playerScore++;
    }

    else{
        result = "💻 Computer Wins!";
        computerScore++;
    }

    document.getElementById("resultText").innerText = result;

    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;

    document.getElementById("playerChoice").innerText = "You: -";
    document.getElementById("computerChoice").innerText = "Computer: -";
    document.getElementById("resultText").innerText = "";
}