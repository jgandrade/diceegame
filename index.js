let btnP1 = document.getElementById("btn-p1");
let btnP2 = document.getElementById("btn-p2");
let winner = [0, 0];

btnP1.onclick = () => {
    let diceP1 = document.getElementById("p1-dice");
    btnP1.disabled = "disabled";
    btnP1.style = "cursor: no-drop;"
    giveAttr(btnP1);
    let value = rollDice(diceP1);
    winner[0] = value;
    if (btnP2.hasAttribute("active")) {
        determineWinner(winner);
    }
};

btnP2.onclick = () => {
    let diceP2 = document.getElementById("p2-dice");
    btnP2.disabled = "disabled";
    btnP2.style = "cursor: no-drop;"
    giveAttr(btnP2);
    let value = rollDice(diceP2);
    winner[1] = value; 
    if (btnP1.hasAttribute("active")) {
        determineWinner(winner);
    }
};

function rollDice(dice) {
    let rollDiceIndex = Math.floor(Math.random() * 6) + 1;
    dice.setAttribute("src", `images/dice${rollDiceIndex}.png`);
    return rollDiceIndex;
}

function giveAttr(btn) {
    btn.setAttribute("active", "");
}

function determineWinner(arr) {
    if (arr[0] > arr[1]) {
        document.querySelector(".result-player-1").textContent = "WINNER!";
    }
    else if (arr[0] < arr[1]) {
        document.querySelector(".result-player-2").textContent = "WINNER!";
    }
    else document.getElementById("draw").textContent = "DRAW!";
    document.getElementById("play-again").style="visibility: visible; opacity: 1;";
}

function playAgain(){
    winner = [0, 0];
    btnP1.disabled = false;
    btnP2.disabled = false;
    btnP1.style = "cursor: pointer;"
    btnP2.style = "cursor: pointer;"
    document.querySelector(".result-player-1").textContent = "";
    document.querySelector(".result-player-2").textContent = "";
    document.getElementById("draw").textContent = "";
    btnP1.removeAttribute("active");
    btnP2.removeAttribute("active");
    document.getElementById("play-again").style="visibility: hidden; opacity: 0;";
}





