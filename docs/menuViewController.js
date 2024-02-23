let startButton = document.getElementById("startButton");
let player1Input = document.getElementById("player1");
let player2Input = document.getElementById("player2");
let roundsInput = document.getElementById("rounds");
export function getPlayer1Input() {
    return player1Input.value;
}
export function getPlayer2Input() {
    return player2Input.value;
}
export function getRoundsInput() {
    return Number(roundsInput.value);
}
export function setStartButtonClickListener(callback) {
    startButton.addEventListener("click", () => {
        callback();
    });
}
