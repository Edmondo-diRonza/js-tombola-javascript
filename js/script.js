console.clear();
var numbers = 90; 
var arrayNumeri = new Array(numbers);
var scegliNumero = document.getElementById("choose-number");
var bottoneReset = document.getElementById("reset");
var contatore;
// definisco evento alla pressione del bottoner inizia la partita (reset) 
bottoneReset.addEventListener("click",
function(){
    // inizializzo l'array a -1 per non avere duplicati
    for (var i=0; i<numbers;i++) {
        arrayNumeri[i] = -1;
    }
    // genero 90 numeri casuali e li metto nell'arrayNumeri     
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
    // messaggio di benvenuto 
    var msg = new SpeechSynthesisUtterance();
        msg.lang ='it';        
        msg.text = "Si inizia a giocare! Per estrarre il numero successivo clicca su: chiama numero! ";
        window.speechSynthesis.speak(msg);
    // rimuovo la classe choosen red che imposta il bg-red ai numeri 
        for (var i = 0; i<numbers; i++) {
        var choosenNumber = document.getElementById(arrayNumeri[i]);
        choosenNumber.classList.remove("choosen-red");
    }
    // cancello lista degli ultimi numeri estratti 
    var lastNumbers = document.getElementById("last-numbers");
        lastNumbers.innerHTML = "";    
}
);

// definisco eventi alla pressione del bottone chiama numero 
scegliNumero.addEventListener("click",
function(){
    if (arrayNumeri[0] === undefined) {
        console.log("Devi ancora inizia la partita!");
        var msg = new SpeechSynthesisUtterance();
        msg.lang ='it';        
        msg.text = "Per favore, clicca prima sul pulsante inizia la partita! ";
        window.speechSynthesis.speak(msg);
    };
    if (contatore<89){
        contatore++;     
        console.log("Il " + (contatore+1) + " numero estratto è " + arrayNumeri[contatore]);
        // genero una lista degli ultimi numeri estratti 
        var lastNumbers = document.getElementById("last-numbers");
        lastNumbers.innerHTML+="<li>" + arrayNumeri[contatore]+ "</li>" + "<p>" + (contatore+1) + "° estratto </p>";
        // mostro l'overlay sullo schermo 
        var overlayNumber = document.getElementById("overlay-number");
        overlayNumber.innerHTML = arrayNumeri[contatore];        
        var overlayClass=document.getElementById("overlay-class");               
        overlayClass.classList.add("show");
        // imposto una attesa dopo aver visualizzato il numero grande 
        setTimeout(function(){ 
            overlayClass.classList.remove("show"); 
        }, 6000);
        // aggiungo la classe choosen-red ai numeri estratti sul tabellone 
        var choosenNumber = document.getElementById(arrayNumeri[contatore]);
        choosenNumber.classList.add("choosen-red");
        // leggo il numero estratto 
        var msg = new SpeechSynthesisUtterance();
        msg.lang ='it';        
        msg.text = arrayNumeri[contatore];
        window.speechSynthesis.speak(msg);
    }
    else {
        console.log("I numeri sono terminati! Premi il pulsante nuova partita in basso!");
        var msg = new SpeechSynthesisUtterance();
        msg.lang ='it';        
        msg.text = "Numeri terminati! Premi il pulsante inizia la partita!";
        window.speechSynthesis.speak(msg);        
    }
}
);

var estrazioneAutomatica = document.getElementById("auto-extract");
estrazioneAutomatica.addEventListener("click",
function() {
    alert("in fase di aggiornamento");    
}
);
var fiveBackward = document.getElementById("five-backward");
fiveBackward.addEventListener("click",
function() {
    var testoCompleto ="Ecco i cinque numeri precedenti: ";
    for (var i = 0; i<5; i++){
        if (contatore>=4) {
            testoCompleto+= " " + arrayNumeri[contatore-i];            
        }
        else {
            testoCompleto = "Non sono ancora stati estratti 5 numeri"
        }                
    }
    var msg = new SpeechSynthesisUtterance();
    msg.lang ='it';        
    msg.text = testoCompleto;
    window.speechSynthesis.speak(msg);    
}
);