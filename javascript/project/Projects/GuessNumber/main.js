let randomNumber = parseInt((Math.random() * 100 ) + 1);
let inputNumber  = document.querySelector("#input");
let submits       = document.querySelector("#submits");
let previous     = document.querySelector(".preiviousReslut")
let remianing    = document.querySelector(".remainingResult")
let resultParagraph  = document.querySelector(".resultParagraph")
let starover = document.querySelector("#result")
let playGame = true;
let previousArray = [];
let countPlay   = 1;
if(playGame){
    submits.addEventListener('click',(e)=>{
        e.preventDefault()
        let inputNumber  =parseInt(document.querySelector("#input").value);
        validateGuess(inputNumber)  
    })
}

function validateGuess(num) {
    if (isNaN(num)) {
        alert("Enter a number");
    } else if (num < 1) {
        alert("Number too low");
    } else if (num > 100) {
        alert("Number too high");
    }
    else {
        previousArray.push(num)
        if(countPlay > 10){
            displayGuess(num)
            displaymassege(`<h1>Game Over Random Number Is : ${randomNumber}</h1>`)
            endGame()
        }
        else
        {
            displayGuess(num)
            GuessCheck(num)
        }
    }
}
function GuessCheck(num) {
    if(num === randomNumber) {
        displaymassege("You win the match!"); // Update message display
        endGame();
    }
    else if (num < randomNumber) {
        displaymassege("LOW");
    }
    else if(num > randomNumber) {
        displaymassege(`HIGH ${randomNumber}`);
    }
}
function endGame() {
    inputNumber.disabled = true;
    submits.disabled = true;
    playGame = false;

    resultParagraph.innerHTML += `
        <br>
        <button type="button" id="gameover">Start the game</button>
    `;

    startGame();
}

function startGame(){
   let click = document.querySelector("#gameover")
    click.addEventListener('click',()=>{
            console.log("hello world");
             inputNumber.disabled = false;
             submits.disabled = false;
             randomNumber = parseInt((Math.random() * 100 ) + 1)
             inputNumber.value = ' ';
             previous.innerHTML = ` `;
             countPlay = 1;
             previousArray = [];
             resultParagraph.innerHTML = ``
             remianing.innerHTML = `10`;
             playGame = true;
        })
        
}
function displayGuess(num) {
    inputNumber = ' ';
    previous.innerHTML += ` ${num} `;
    countPlay++
    remianing.innerHTML = `${11 - countPlay}`;
}
function displaymassege(massege) {
    resultParagraph.innerHTML = `${massege}`
}


