console.clear();
var numbers = 90; 
var arrayNumeri = new Array(numbers);
var scegliNumero = document.getElementById("choose-number");
var bottoneReset = document.getElementById("reset");
var contatore = 0;

// definisco evento alla pressione del bottoner inizia la partita (reset) 
bottoneReset.addEventListener("click",    
function(){
    arrayNumeri = numberExtraction(numbers, 1, numbers); // estraggo 90 numeri univoci tramite la funzione che ho creato
    console.log("Ecco i " + numbers + " numeri generati dalla funzione invocata : " + arrayNumeri);
        
    speakNow("Si inizia a giocare! Per estrarre il numero successivo clicca su: estrai numero!");
    
    // rimuovo la classe choosen red che cambia colore ai numeri estratti
        for (var i = 0; i<numbers; i++) {
        var choosenNumber = document.getElementById(arrayNumeri[i]);
        choosenNumber.classList.remove("choosen-red");
    }
    // cancello lista degli ultimi numeri estratti 
    var lastNumbers = document.getElementById("last-numbers");
        lastNumbers.innerHTML = "";
        contatore=0;    
}
);
// definisco eventi alla pressione del bottone, chiamo numero 
scegliNumero.addEventListener("click",
function(){    
    
    // controllo se non è stato inizializzato l'array
    if (arrayNumeri[0] === undefined) {
        console.log("Devi ancora inizia la partita!");
        speakNow("Per favore, clicca prima sul pulsante iniziamo! ");        
    };    
    // controllo di non essere all'ultimo numero oppure con array non inizializzato
    if (contatore<=89 && arrayNumeri[0]!=undefined){             
        console.log("Il " + (contatore+1) + " numero estratto è " + arrayNumeri[contatore]);
        
        // genero una lista degli ultimi numeri estratti e inietto nell'html
        var lastNumbers = document.getElementById("last-numbers");
        lastNumbers.innerHTML+="<li> <div class='numberlistitem'>" + arrayNumeri[contatore]+ "</div> <p>" + (contatore+1) + "° estratto </p> </li>";
        
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
        speakNow(arrayNumeri[contatore]);        
        
        contatore++; //incremento il contatore per la prossima estrazione
    }
    else if (contatore == 0 ) {        
        speakNow ("Non hai ancora iniziato la partita!");                        
    }
    else { 
        speakNow("Partita precedente già terminata! Hai estratto 90 numeri.");
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
    var testoCompleto = backwardString(5);
    speakNow(testoCompleto);        
}
);
var tenBackward = document.getElementById("ten-backward");
tenBackward.addEventListener("click",
function() {
    var testoCompleto = backwardString(10);
    speakNow(testoCompleto);        
}
);