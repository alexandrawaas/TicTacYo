import * as viewcontroller from "./menuViewController.js";

let namePlayer1:string;
let namePlayer2:string;
let rounds:number;

viewcontroller.setStartButtonClickListener(()=>{
    namePlayer1 = viewcontroller.getPlayer1Input();
    namePlayer2 = viewcontroller.getPlayer2Input();
    rounds = viewcontroller.getRoundsInput();
    let url:URL = new URL("http://localhost:63342/TicTacYo/src/game/game.html");
    url.searchParams.set("namePlayer1", namePlayer1);
    url.searchParams.append("namePlayer2", namePlayer2);
    url.searchParams.append("rounds", String(rounds));
    open(url, "_self");
})

    /**
     Architektur:
     Aufteilung in MenuPage und GamePage, diese haben jeweils als Klassen:
     - View (HTML)
     - Viewcontroller (Variablen getElementById, Methoden für die GUI)
     - Logikcontroller (Nur Spiellogik, vgl. Bowling)

     Speichern:
     Cookie (1 Seite) oder Query-Parameter (2 Seiten)
     */