import * as viewcontroller from "./menuViewController.js";
let namePlayer1;
let namePlayer2;
let rounds;
viewcontroller.setStartButtonClickListener(() => {
    namePlayer1 = viewcontroller.getPlayer1Input();
    namePlayer2 = viewcontroller.getPlayer2Input();
    rounds = viewcontroller.getRoundsInput();
    let url = new URL("http://localhost:63342/TicTacYo/docs/game.html");
    url.searchParams.set("namePlayer1", namePlayer1);
    url.searchParams.append("namePlayer2", namePlayer2);
    url.searchParams.append("rounds", String(rounds));
    open(url, "_self");
});
