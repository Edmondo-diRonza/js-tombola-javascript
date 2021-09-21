// FUNZIONE ESTRAZIONE N NUMERI UNIVOCI CHE RESTITUISCE UN ARRAY
function numberExtraction(numbers){    
    var extractedNumber = 0;
    var numberPool = new Array();
    var arrayIndex = 0;
    var iterations = 0;     
    
    while (arrayIndex<numbers) {
        var errorFlag = 0; // questo flag diventerà -1 se non ci sono elementi uguali grazie ad indexOf

        extractedNumber = (Math.floor(Math.random() * numbers))+1; //estraggo numero casuale da 1 a numbers              

        errorFlag = numberPool.indexOf(extractedNumber);        
        if (errorFlag == -1 ) {
            numberPool[arrayIndex] = extractedNumber; // Scrivo solo se il flag è -1            
            arrayIndex++;                   
        }
        iterations++;           
    }
    if (iterations<numbers*10)
    console.log ("Questa volta, il numero di iterazioni necessarie per trovare " + numbers + " numeri univoci, è stato di " + iterations +"!");
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
