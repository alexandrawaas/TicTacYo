import * as viewController from "./gameViewController.js";
let currentRound = 1;
let currentPlayerIndex = 0;
let url = new URL(document.URL);
let rounds = (url.searchParams.get("rounds") == null) ? 1 : Number(url.searchParams.get("rounds"));
let scores = [0, 0];
let fieldValues = new Array(9);
function test(o) { }
test({ age: 2 });
function nextRoundButtonListener() {
    currentRound++;
    viewController.resetGameField();
    fieldValues = new Array(9);
    currentPlayerIndex = 0;
}
viewController.setFieldClickListener((index) => {
    fieldValues[index] = currentPlayerIndex;
    checkForWin();
    currentPlayerIndex == 0 ? currentPlayerIndex++ : currentPlayerIndex = 0;
});
function checkForWin() {
    if (checkForRoundWin() || checkForTie()) {
        if (checkForRoundWin()) {
            scores[currentPlayerIndex]++;
            viewController.onRoundWon(currentPlayerIndex, scores);
        }
        else if (checkForTie()) {
            viewController.onRoundTie();
        }
        if (currentRound < rounds) {
            viewController.addNextRoundButton();
            document.getElementById("nextRoundButton").addEventListener("click", nextRoundButtonListener);
        }
        else {
            setTimeout(function () { viewController.showWinner(scores); }, 3000);
        }
    }
}
function checkForTie() {
    let isAllFilled = true;
    for (let index = 0; index < fieldValues.length; index++) {
        if (fieldValues[index] === undefined)
            isAllFilled = false;
    }
    return isAllFilled;
}
function checkForRoundWin() {
    for (let index = 0; index < fieldValues.length; index += 3) {
        if (fieldValues[index] != undefined && fieldValues[index] == fieldValues[index + 1] && fieldValues[index] == fieldValues[index + 2]) {
            return true;
        }
    }
    for (let index = 0; index < 3; index++) {
        if (fieldValues[index] != undefined && fieldValues[index] == fieldValues[index + 3] && fieldValues[index] == fieldValues[index + 6]) {
            return true;
        }
    }
    if (fieldValues[0] != undefined && fieldValues[0] == fieldValues[4] && fieldValues[0] == fieldValues[8]) {
        return true;
    }
    return fieldValues[2] != undefined && fieldValues[2] == fieldValues[4] && fieldValues[2] == fieldValues[6];
}
