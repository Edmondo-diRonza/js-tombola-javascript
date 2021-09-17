console.clear();
var numbers = 90; 
var arrayNumeri = new Array(numbers);
var scegliNumero = document.getElementById("choose-number");
var bottoneReset = document.getElementById("reset");
var contatore;
bottoneReset.addEventListener("click",
function(){
    // inizializzo l'array a -1 per non avere duplicati
    for (var i=0; i<numbers;i++) {
        arrayNumeri[i] = -1;
    }    
    console.log("Genero " + numbers + " numeri univoci")    
    var numeriUnici = 1;
    var flagDuplicato = 0;
    var numeroGenerato = (Math.floor(Math.random() * numbers))+1;
    arrayNumeri[0] = numeroGenerato;
    contaNumeriGenerati = 1;
    console.log ("Salvo il numero: " + numeroGenerato + " nella posizione n.0" );
    while (numeriUnici < (numbers*8)) {    
        numeroGenerato = (Math.floor(Math.random() * numbers))+1;               
        // scansiono array per cercare duplicati, se li trovo incremento il flag
        for (var i=0 ; i<numbers ; i++) {        
            if  (numeroGenerato == arrayNumeri[i]) {
                flagDuplicato = 1;                                                     
                i=numbers;            
            }                    
        }
        if (flagDuplicato != 1) {
            arrayNumeri[contaNumeriGenerati] = numeroGenerato;
            console.log ("Salvo il numero: " + numeroGenerato + " nella posizione " + contaNumeriGenerati);
            contaNumeriGenerati++;                       
        }    
        flagDuplicato=0;       
        numeriUnici++;        
    }
    console.log("Iterazioni while = " + numeriUnici);
    console.log(arrayNumeri);
    console.log("Numeri random effettivi generati: " + contaNumeriGenerati);
    console.log("Numeri scartati: " + (numbers - contaNumeriGenerati));
    contatore=-1;
    var msg = new SpeechSynthesisUtterance();
        msg.rate = 0.2;
        msg.lang ='it';        
        msg.text = "Si inizia a giocare! Per estrarre il numero successivo clicca su: chiama numero! ";
        window.speechSynthesis.speak(msg);
    for (var i = 0; i<numbers; i++) {
        var choosenNumber = document.getElementById(arrayNumeri[i]);
        choosenNumber.classList.remove("choosen-red");
    }    
}
);

scegliNumero.addEventListener("click",
function(){
    if (arrayNumeri[0] === undefined) {
        console.log("Devi ancora inizia la partita!");
        var msg = new SpeechSynthesisUtterance();
        msg.rate = 0.2;
        msg.lang ='it';        
        msg.text = "Per favore, clicca prima sul pulsante inizia la partita! ";
        window.speechSynthesis.speak(msg);
    };
    if (contatore<89){
        contatore++;     
        console.log("Il " + (contatore+1) + " numero estratto è " + arrayNumeri[contatore]);
        var overlayNumber = document.getElementById("overlay-number");
        overlayNumber.innerHTML = arrayNumeri[contatore];        
        var overlayClass=document.getElementById("overlay-class");
        var changeColor = ["orange", "red", "green", "yellow", "white"];
        var indiceColore = Math.floor(Math.random() * 4);
        overlayClass.style.background=changeColor[indiceColore];
        overlayClass.classList.add("show");
        setTimeout(function(){ 
            overlayClass.classList.remove("show"); 
        }, 6000);
        var choosenNumber = document.getElementById(arrayNumeri[contatore]);
        choosenNumber.classList.add("choosen-red");
        var msg = new SpeechSynthesisUtterance();
        msg.rate = 0.2;
        msg.lang ='it';        
        msg.text = arrayNumeri[contatore];
        window.speechSynthesis.speak(msg);
    }
    else {
        console.log("I numeri sono terminati! Premi il pulsante nuova partita in basso!")
    }
}
);

var estrazioneAutomatica = document.getElementById("auto-extract");
estrazioneAutomatica.addEventListener("click",
function() {
    alert("in fase di aggiornamento");    
}
);