console.clear();
var numbers = 90; 
var arrayNumeri = [];
var scegliNumero = $("#choose-number");
var bottoneReset = $("#reset");
var contatore = 0;
var idSetInterval;
var clickedNumber;
var winarray = []; // array che memorizza il numero di estrazione della vincita

// Alla pressione del bottone inizia la partita (reset globale di tutte le variabili) 
bottoneReset.click( function(){
    arrayNumeri = numberExtraction(numbers, 1, numbers); // estraggo 90 numeri univoci tramite la funzione che ho creato
    // console.log("Ecco i " + numbers + " numeri generati dalla funzione invocata : " + arrayNumeri); non mostro i numeri in console, per mostrarli basta decommentare
        
    speakNow("Si inizia a giocare! Per estrarre il numero successivo clicca su: chiama! Oppure puoi estrarre automaticamente cliccando su auto!");
    
    // rimuovo la classe choosen-red anche se ormai è "orange" :) che cambia colore ai numeri estratti per inizializzare il tabellone
    $(".number-item").removeClass("choosen-red");

    // cancello lista degli ultimi numeri estratti da iniettare su aside
    $("#last-numbers").text("");
    
    contatore=0; //contatore inizializzato a 0
    identificaNumero(); // quando clicco su un numero mi dice quando è stato estratto
    console.log(inizializzaCartelle()); // inizializzo le cartelle e stampo su console il risultato  
}
);

function chiamaNumero(){    
    
    // controllo se non è stato inizializzato l'array
    if (arrayNumeri[0] === undefined) {
        console.log("Devi ancora inizia la partita!");
        speakNow("Per favore, clicca prima sul pulsante gioca! ");        
    };    
    // controllo di non essere all'ultimo numero oppure con array non inizializzato
    if (contatore<=89 && arrayNumeri[0]!=undefined){             
        console.log("Il " + (contatore+1) + "° numero estratto è " + arrayNumeri[contatore]);
        
        // genero una lista degli ultimi numeri estratti e inietto nell'html
        var lastNumbers = document.getElementById("last-numbers");
        lastNumbers.innerHTML+="<li> <div class='numberlistitem'>" + arrayNumeri[contatore]+ "</div> <p>" + (contatore+1) + "° estratto </p> </li>";
        
        // creo una funzione che accetta un tempo tot in ms e mostra l'overlay sullo schermo con una 
        // dissolvenza in entrata ed in uscita ed un ritardo
        
        function showNumber (ms) {
            var timeInOut = ms*(0.18);            
            var delayTime = ms - (timeInOut*2);                        
            $("#overlay-number").text(arrayNumeri[contatore]); // inietto il numero estratto nell'html
            $("#overlay-text").text((contatore+1) + "° estratto");
            $(".overlay-layer").fadeIn(timeInOut).delay(delayTime).fadeOut(timeInOut);                       
        }
        showNumber(6000); // chiamo la funzione appena definita        
        
        // aggiungo la classe choosen-red ai numeri estratti sul tabellone 
        var choosenNumber = $("#" + arrayNumeri[contatore]);  //modificato in jQuery      
        choosenNumber.addClass("choosen-red");
        
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
    eliminaEstratto(arrayNumeri[contatore-1]); // rimuovo il numero estratto dall'array bidimensionale
    controlloVincite(); //controllo se ho generato vincite con l'ultima estrazione   
}

// definisco eventi alla pressione del bottone, chiamo numero 
scegliNumero.click(
    function(){
        chiamaNumero();       
    }
);   

var estrazioneAutomatica = $("#auto-extract");
estrazioneAutomatica.click(
    function () {
        speakNow("Estrazione automatica attiva");
        $(".autoplay-status").show();
        chiamaNumero();
        idSetInterval = setInterval(chiamaNumero, 7000);
        console.log("Autoplay avviato con id intervallo: " + idSetInterval + ". Per interrompere clicca su stop oppure sul numero in overlay!");
    }
);

//Arresto estrazione automatica con tasto o cliccando sull'overlay
$("#stop-extract").click(
    function(){
        if (idSetInterval != -1 && idSetInterval!=undefined ) {
            speakNow("Estrazione automatica disattivata");
            $(".autoplay-status").hide();
            clearInterval(idSetInterval);
            idSetInterval= -1;
            console.log("Autoplay disabilitato, per abilitare nuovamente clicca play");
        }        
    }
);
$(".overlay-layer").click(
    function(){
        
        if (idSetInterval != -1 && idSetInterval!=undefined ) {
            speakNow("Estrazione automatica disattivata");
            $(".autoplay-status").hide();
            clearInterval(idSetInterval);
            idSetInterval= -1;
            console.log("Autoplay disabilitato, per abilitare nuovamente clicca play");
        }           
    }
);

var fiveBackward = $("#five-backward");
fiveBackward.click(
function() {
    var testoCompleto = backwardString(5); // definita nel file functions.js
    speakNow(testoCompleto);        
}
);

var tenBackward = $("#ten-backward");
tenBackward.click(function() {
    var testoCompleto = backwardString(10); // definita nel file functions.js
    speakNow(testoCompleto);        
}
);