// FUNZIONE ESTRAZIONE N NUMERI UNIVOCI DA UN POOL COMPRESO TRA MIN E MAX E CHE RESTITUISCE L'ARRAY 
function numberExtraction(numbers, min, max){    
    var extractedNumber = 0;
    var numberPool = [];
    var arrayIndex = 0;
    var iterations = 0;
    
    if (typeof(min)== "undefined") {
         var min=1;
    }
    if(typeof(max) == "undefined" ) {
        max = numbers;
    }    
            
    while (arrayIndex<numbers) {
        var errorFlag = 0; // questo flag diventerà -1 se non ci sono elementi uguali grazie ad indexOf

        extractedNumber = Math.floor((Math.random() * (max - min + 1) + min )); //estraggo numero casuale compreso tra min e max              

        errorFlag = numberPool.indexOf(extractedNumber);        
        if (errorFlag == -1 ) {
            numberPool[arrayIndex] = extractedNumber; // Scrivo solo se il flag di controllo è -1, ovvero l'elemento è assente          
            arrayIndex++; // questo indice rappresenta i numeri scritti correttamente
        }
        iterations++;  // questo indice rappresenta le iterazioni necessarie a scrivere numeri univoci ed è >= di arrayindex         
    }
    if (iterations<numbers*10)
    console.log ("Sono stati estratti " + numbers + " numeri univoci, con " + iterations +" iterazioni ! I numeri sono stati scelti nell'intervallo: "+min + " <= X <= " + max);
    else {
    console.log ("Il numero di iterazioni necessarie per trovare " + numbers + " numeri univoci, è stato incredibilmente alto.. sono state necessarie  " + iterations +" iterazioni! Alla faccia del bicarbonato di sodio! :-)");

    }
    return numberPool;        
}

// FUNZIONE VOCALE CHE ACCETTA UNA STRINGA TESTO O UN NUMERO IN INGRESSO E PARLA 
function speakNow(message) {
    var msg = new SpeechSynthesisUtterance();
        msg.lang ='it';        
        msg.text = message;
        window.speechSynthesis.speak(msg);
    return true;
}

// CREA UNA STRINGA CON N NUMERI PRECEDENTI
function backwardString(n) {
var testoCompleto ="Ecco i " + n + " numeri precedenti: ";
    for (var i = 0; i<n; i++){
        if (contatore>=(n-1)) {
            testoCompleto+= " " + arrayNumeri[(contatore-1)-i] + ", ";            
        }
        else {
            testoCompleto = "Non sono ancora stati estratti " + n + " numeri";
        }             
    } 
    console.log (testoCompleto);
    return testoCompleto;
}

// FUNZIONE CHE IDENTIFICA IL NUMERO CLICCATO E LEGGE IL NUMERO DI ESTRAZIONE
function identificaNumero() {
    $(".number-item").click( function(){        
        var numeroCliccato = parseInt($(this).attr("id"));
        var indiceArray = arrayNumeri.indexOf(numeroCliccato);
        if (indiceArray<contatore && indiceArray!=-1) {
            speakNow("Il " + numeroCliccato + " è stato estratto nell'estrazione numero " + (indiceArray + 1));
        } else {
            speakNow("Il " + numeroCliccato + " non è stato ancora estratto");
        } 
    })
}

function controlloVincite() {
    if (!ambo && !terno && !quaterna && !cinquina && !tombola) {
        controlloAmbo();
    } else if (!terno && !quaterna && !cinquina && !tombola) {
        controlloTerno();
    } else if (!quaterna && !cinquina && !tombola) {
        controlloQuaterna();
    } else if (!cinquina && !tombola) {
        controlloCinquina();
    } else if (!tombola) {
        controlloTombola();
    } 
}