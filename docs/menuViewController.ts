let startButton: HTMLElement = document.getElementById("startButton") as HTMLButtonElement;
let player1Input:HTMLInputElement = document.getElementById("player1") as HTMLInputElement;
let player2Input:HTMLInputElement = document.getElementById("player2") as HTMLInputElement;
let roundsInput:HTMLInputElement = document.getElementById("rounds") as HTMLInputElement;

export function getPlayer1Input()
{
    return player1Input.value;
}

export function getPlayer2Input()
{
    return player2Input.value;
}

export function getRoundsInput()
{
    return Number(roundsInput.value);
}

export function setStartButtonClickListener(callback:Function)
{
    startButton.addEventListener("click", ()=>
    {
        callback();
    });
}