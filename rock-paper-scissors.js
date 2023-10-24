// declaration of global variables
const numberOfChoices = 3 //rock, paper, and scissors
const choices = ['rock', 'paper', 'scissors'] //javascript array syntax
let playerWins = 0
let computerWins = 0


function getComputerChoice(){
    // get a random number between 0 and 1, multiply by 3 and get the lowest integer, to get 
    // a number between 0 and 2
    randomInteger = Math.floor(Math.random()* 3)

    return choices[randomInteger]
}

function round(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Tie!'
    }
    else {
        if (playerSelection === 'rock'){
            if (computerSelection === 'paper'){
                computerWins++
                return 'You lose! Paper beats rock'
            }
            else {
                playerWins++
                return 'You Win! Rock beats scissors'
            }
        }
        else if (playerSelection === 'paper'){
            if (computerSelection === 'scissors'){
                computerWins++
                return 'You lose! Scissors beats rock'
            }
            else {
                playerWins++
                return 'You win! Paper beats rock'
            }
        }
        else if (playerSelection === 'scissors'){
            if (computerSelection === 'rock'){
                computerWins++
                return 'You lose! Rock beats scissors'
            }
            else {
                playerWins++
                return 'You win! Scissors beats paper'
            }
        }

    }
}

function game(){

    for(let i=0; i<5; i++){
        const playerSelection = prompt().toLowerCase()
        computerSelection = getComputerChoice()
        round(playerSelection, computerSelection)
    }

    if (playerWins === computerWins){
        return 'The game is a tie!!'
    }
    else if (playerWins < computerWins){
        return 'You lose the game! The computer wins!'
    }
    else if (computerWins < playerWins){
        return 'You win the game! The computer loses!'
    }
}

// Promtps the user to enter either rock paper or scissors
// const playerSelection = prompt().toLowerCase()
// computerSelection = getComputerChoice()

// console.log(playerSelection)
// console.log(computerSelection)
//console.log(round(playerSelection, computerSelection))
console.log(game())
