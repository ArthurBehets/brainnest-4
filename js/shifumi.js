const rock = 0;
const paper = 1;
const scissors = 2;

var playerScore = 0;
var computerScore = 0;

var playing = true;


function getComputerSign(){
    let random = Math.floor(Math.random() * 3);
    return random;
}

function playRock(){
    if(playing){
        let result;
        let computerSign = getComputerSign();
        if(computerSign === rock){
            result = "Equality !"
            document.getElementById("player_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand-back-fist'></i></p>"
            document.getElementById("computer_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand-back-fist'></i></p>"
        }
        else if(computerSign === paper){
            result = "You lost !"
            document.getElementById("player_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand-back-fist'></i></p>"
            document.getElementById("computer_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand'></i></p>"
            computerScore++;
            document.getElementById("computerScore").innerHTML = computerScore;
        }
        else if(computerSign === scissors){
            result = "You won !"
            document.getElementById("player_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand-back-fist'></i></p>"
            document.getElementById("computer_action").innerHTML = "<p class='lost'><i class='fa-solid fa-solid fa-hand-scissors'></i></p>"
            playerScore ++;
            document.getElementById("playerScore").innerHTML = playerScore;
        }
        else{
            result = "Error"
        }
        showResult(result);
    }
}

function playPaper(){
    if(playing){
        let computerSign = getComputerSign();
        let result;
        if(computerSign === paper){
            document.getElementById("player_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand'></i></p>"
            document.getElementById("computer_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand'></i></p>"
            result = "Equality !"
        }
        else if(computerSign === scissors){
            document.getElementById("player_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand'></i></p>"
            document.getElementById("computer_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand-scissors'></i></p>"
            result = "You lost !"
            computerScore++;
            document.getElementById("computerScore").innerHTML = computerScore;
        }
        else if(computerSign === rock){
            document.getElementById("player_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand'></i></p>"
            document.getElementById("computer_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand-back-fist'></i></p>"
            result = "You won !"
            playerScore ++;
            document.getElementById("playerScore").innerHTML = playerScore;
        }
        else{
            result = "Error"
        }
        showResult(result);
    }
}

function playScissors(){
    if(playing){
        let computerSign = getComputerSign();
        let result;
        if(computerSign === scissors){
            result = "Equality !"
            document.getElementById("player_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand-scissors'></i></p>"
            document.getElementById("computer_action").innerHTML = "<p class='equal'><i class='fa-solid fa-hand-scissors'></i></p>"
        }
        else if(computerSign === rock){
            result = "You lost !"
            document.getElementById("player_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand-scissors'></i></p>"
            document.getElementById("computer_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand-back-fist'></i></p>"
            computerScore++;
            document.getElementById("computerScore").innerHTML = computerScore;
        }
        else if(computerSign === paper){
            result = "You won !"
            document.getElementById("player_action").innerHTML = "<p class='won'><i class='fa-solid fa-hand-scissors'></i></p>"
            document.getElementById("computer_action").innerHTML = "<p class='lost'><i class='fa-solid fa-hand'></i></p>"
            playerScore ++;
            document.getElementById("playerScore").innerHTML = playerScore;
        }
        else{
            result = "Error"
        }
        showResult(result);
    }
}


function showResult(result){
    if(computerScore === 5){
        document.getElementById("result").innerHTML = "You lost the game";
        playing = false;
        setInterval(function(){
            computerScore = 0;
            playerScore = 0;
            for(i in document.getElementsByClassName('reset')){
                document.getElementsByClassName('reset')[i].innerHTML = "";
            }
            playing = true;
        }, 5000)
    }
    else if(playerScore === 5){
        document.getElementById("result").innerHTML = "You won the game";
        playing = false;
        setInterval(function(){
            computerScore = 0;
            playerScore = 0;
            for(i in document.getElementsByClassName('reset')){
                document.getElementsByClassName('reset')[i].innerHTML = "";
            }
            playing = true;
        }, 5000)
    }
    else{
        document.getElementById("result").innerHTML = result;
    }
}
