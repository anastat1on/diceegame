
function setDiceeForPlayer1(){
    playerOne1 = Math.floor(Math.random() * 6) + 1;
    if(playerOne1 === 1){
        document.querySelector('.img1').src ="pics/dice1.png"
    }
    else if(playerOne1 === 2){
        document.querySelector('.img1').src ="pics/dice2.png"
    }
    else if(playerOne1 === 3){
        document.querySelector('.img1').src ="pics/dice3.png"
    }
    else if(playerOne1 === 4){
        document.querySelector('.img1').src ="pics/dice4.png"
    }
    else if(playerOne1 === 5){
        document.querySelector('.img1').src ="pics/dice5.png"
    }
    else{
        document.querySelector('.img1').src ="pics/dice6.png"
    }

    return playerOne1
}

function setDiceeForPlayer2(){
    let playerTwo2 = Math.floor(Math.random() * 6) + 1;

    if(playerTwo2 === 1){
        document.querySelector('.img2').src ="pics/dice1.png"
    }
    else if(playerTwo2 === 2){
        document.querySelector('.img2').src ="pics/dice2.png"
    }
    else if(playerTwo2 === 3){
        document.querySelector('.img2').src ="pics/dice3.png"
    }
    else if(playerTwo2 === 4){
        document.querySelector('.img2').src ="pics/dice4.png"
    }
    else if(playerTwo2 === 5){
        document.querySelector('.img2').src ="pics/dice5.png"
    }
    else{
        document.querySelector('.img2').src ="pics/dice6.png"
    }

    return playerTwo2
}

function whoIsWinner(a, b){
    if(a > b){
        document.querySelector('h2').innerHTML = 'Player 1 Won. Congrats!'
    }

    else if(a < b){
        document.querySelector('h2').innerHTML = 'Player 2 Won. Congrats!'
    }

    else {
        document.querySelector('h2').innerHTML = 'No one Won... Try one more time.'
    }
}
whoIsWinner(setDiceeForPlayer1(),setDiceeForPlayer2())


