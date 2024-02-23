let url = new URL(document.URL);
let fieldClickListener;
let playerNames = [((url.searchParams.get("namePlayer1") == null) ? "Player 1" : url.searchParams.get("namePlayer1")),
    ((url.searchParams.get("namePlayer2") == null) ? "Player 1" : url.searchParams.get("namePlayer2"))];
let fields = document.getElementsByClassName("cell");
let footer = document.getElementsByTagName("footer").item(0);
let scoreFields = [document.getElementById("scorePlayer1"),
    document.getElementById("scorePlayer2")];
let tableContainer = document.getElementById("table-container");
let labelPlayer1 = document.getElementById("labelPlayer1");
let labelPlayer2 = document.getElementById("labelPlayer2");
labelPlayer1.textContent = playerNames[0] + ":";
labelPlayer2.textContent = playerNames[1] + ":";
let currentSymbol = "X";
addFieldListeners();
function resetFields() {
    for (let index = 0; index < fields.length; index++) {
        fields.item(index).textContent = "";
        fields.item(index).classList.remove("blue", "pink", "pinkFlicker", "blueFlicker");
    }
}
export function onRoundWon(playerIndex, scores) {
    scoreFields[playerIndex].textContent = String(scores[playerIndex]);
    removeFieldListeners();
    footer.textContent = playerNames[playerIndex] + " has won this round.";
    currentSymbol = "X";
}
export function onRoundTie() {
    footer.textContent = "Tie! Nobody wins this round.";
    removeFieldListeners();
    currentSymbol = "X";
}
export function addNextRoundButton() {
    footer.innerHTML += `<button id="nextRoundButton">next Round</button>`;
}
export function resetGameField() {
    resetFooter();
    resetFields();
    addFieldListeners();
}
export function setFieldClickListener(callback) {
    fieldClickListener = callback;
}
export function addFieldListeners() {
    for (let index = 0; index < fields.length; index++) {
        fields.item(index).addEventListener("click", fieldListener);
    }
}
function removeFieldListeners() {
    for (let index = 0; index < fields.length; index++) {
        fields.item(index).removeEventListener("click", fieldListener);
    }
}
function fieldListener() {
    if (this.textContent === "") {
        this.textContent = currentSymbol;
        (currentSymbol === "X") ? this.classList.add("pink", "pinkFlicker") : this.classList.add("blue", "blueFlicker");
        this.removeEventListener("click", fieldListener);
    }
    (currentSymbol === "X") ? currentSymbol = "O" : currentSymbol = "X";
    if (fieldClickListener) {
        fieldClickListener((Number(this.id.substring(4)) - 1));
    }
}
function resetFooter() {
    footer.innerHTML = "";
}
export function showWinner(scores) {
    if (scores[0] > scores[1]) {
        footer.textContent = playerNames[0] + " has won the game!";
    }
    else if (scores[0] < scores[1]) {
        footer.textContent = playerNames[1] + " has won the game!";
    }
    else {
        footer.textContent = "Tie! Nobody wins.";
    }
    tableContainer.children[0].remove();
    tableContainer.innerHTML = (`<button id="playAgainButton">Play again</button><br><button id="backToMenuButton">Back to Menu</button>`);
    addEndButtonListeners();
}
function addEndButtonListeners() {
    document.getElementById("playAgainButton").addEventListener("click", reload);
    document.getElementById("backToMenuButton").addEventListener("click", goToMenu);
}
function goToMenu() {
    open("http://localhost:63342/TicTacYo/src/menu/index.html", "_self");
}
function reload() {
    open(url, "_self");
}
