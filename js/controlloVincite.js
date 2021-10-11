// definisco variabili globali cartelle e vincite
var cartella1 = [];
cartella1[0]= [];
cartella1[1]=[];
cartella1[2]=[];

var cartella2 = [];
cartella2[0]= [];
cartella2[1]=[];
cartella2[2]=[];

var cartella3 = [];
cartella3[0]= [];
cartella3[1]=[];
cartella3[2]=[];

var cartella4 = [];
cartella4[0]= [];
cartella4[1]=[];
cartella4[2]=[];

var cartella5 = [];
cartella5[0]= [];
cartella5[1]=[];
cartella5[2]=[];

var cartella6 = [];
cartella6[0]= [];
cartella6[1]=[];
cartella6[2]=[];

var ambo = false;
var terno = false;
var quaterna = false;
var cinquina = false;
var tombola = false;

//funzione che inizializza le cartelle


function inizializzaCartelle() {
    //cartella 1
    for (z=0;z<3;z++) {
        for (i=0; i<5 ; i++){
            cartella1[z][i] = (i+1)+(z*10);
        }
    }
    
    //cartella 2
    for (z=0;z<3;z++) {
        for (i=0; i<5 ; i++){
            cartella2[z][i] = (i+6)+(z*10);
        }
    }
    //cartella 3  

    for (z=0;z<3;z++) {
        for (i=0; i<5 ; i++){
            cartella3[z][i] = (i+31)+(z*10);
        }
    }
    
    //cartella 4
    for (z=0;z<3;z++) {
        for (i=0; i<5 ; i++){
            cartella4[z][i] = (i+36)+(z*10);
        }
    }
    
    //cartella 5
    for (z=0;z<3;z++) {
        for (i=0; i<5 ; i++){
            cartella5[z][i] = (i+61)+(z*10);
        }
    }

    //cartella 6
    for (z=0;z<3;z++) {
        for (i=0; i<5 ; i++){
            cartella6[z][i] = (i+66)+(z*10);
        }
    }
    return ("Cartelle iniziallizzate!");    
}

// funzione che elimina dalla riga il numero estratto
function eliminaEstratto(estratto){       
    if (estratto>=1 && estratto<=5) {        
        cartella1[0].splice(cartella1[0].indexOf(estratto),1);                
    } else if (estratto>=11 && estratto<=15) {
        cartella1[1].splice(cartella1[1].indexOf(estratto),1);               
    } else if (estratto>=21 && estratto<=25) {        
        cartella1[2].splice(cartella1[2].indexOf(estratto),1); //cartella 1

    } else if (estratto>=6 && estratto<=10) {        
        cartella2[0].splice(cartella2[0].indexOf(estratto),1);                
    } else if (estratto>=16 && estratto<=20) {
        cartella2[1].splice(cartella2[1].indexOf(estratto),1);               
    } else if (estratto>=26 && estratto<=30) {
        cartella2[2].splice(cartella2[2].indexOf(estratto),1); //cartella 2

    } else if (estratto>=31 && estratto<=35) {        
        cartella3[0].splice(cartella3[0].indexOf(estratto),1);                
    } else if (estratto>=41 && estratto<=45) {
        cartella3[1].splice(cartella3[1].indexOf(estratto),1);               
    } else if (estratto>=51 && estratto<=55) {
        cartella3[2].splice(cartella3[2].indexOf(estratto),1); //cartella 3

    } else if (estratto>=36 && estratto<=40) {        
        cartella4[0].splice(cartella4[0].indexOf(estratto),1);                
    } else if (estratto>=46 && estratto<=50) {
        cartella4[1].splice(cartella4[1].indexOf(estratto),1);               
    } else if (estratto>=56 && estratto<=60) {
        cartella4[2].splice(cartella4[2].indexOf(estratto),1); //cartella 4
    
    } else if (estratto>=61 && estratto<=65) {        
        cartella5[0].splice(cartella5[0].indexOf(estratto),1);                
    } else if (estratto>=71 && estratto<=75) {
        cartella5[1].splice(cartella5[1].indexOf(estratto),1);               
    } else if (estratto>=81 && estratto<=85) {
        cartella5[2].splice(cartella5[2].indexOf(estratto),1); //cartella 5
    
    } else if (estratto>=66 && estratto<=70) {        
        cartella6[0].splice(cartella6[0].indexOf(estratto),1);                
    } else if (estratto>=76 && estratto<=80) {
        cartella6[1].splice(cartella6[1].indexOf(estratto),1);               
    } else if (estratto>=86 && estratto<=90) {
        cartella6[2].splice(cartella6[2].indexOf(estratto),1); //cartella 6
    }

}

function winningShow(wintype) {
    clearInterval(idSetInterval); //blocco estrazione automatica
    $(".overlay-layer").fadeIn().delay(8000).fadeOut();
    $(".winner-layer").text(wintype)
    $(".winner-layer").fadeIn(1000).delay(6000).fadeOut(1000);
    speakNow("Il tabellone ha fatto " + wintype);        
    if (wintype != "TOMBOLA!") {
        idSetInterval = setInterval(chiamaNumero, 7000); // riprendo estrazione automatica
    } else {
        speakNow("PARTITA TERMINATA!");
    }

}

function controlloAmbo() {    
    if (cartella1[0].length == 3 || cartella1[1].length == 3 || cartella1[2].length == 3 || 
    cartella2[0].length == 3 || cartella2[1].length == 3 || cartella2[2].length == 3 || 
    cartella3[0].length == 3 || cartella3[1].length == 3 || cartella3[2].length == 3 || 
    cartella4[0].length == 3 || cartella4[1].length == 3 || cartella4[2].length == 3 || 
    cartella5[0].length == 3 || cartella5[1].length == 3 || cartella5[2].length == 3 || 
    cartella6[0].length == 3 || cartella6[1].length == 3 || cartella6[2].length == 3) {
        ambo = true;
        winningShow("AMBO!");        
    }    
}

function controlloTerno() {
    if (cartella1[0].length == 2 || cartella1[1].length == 2 || cartella1[2].length == 2 || 
        cartella2[0].length == 2 || cartella2[1].length == 2 || cartella2[2].length == 2 || 
        cartella3[0].length == 2 || cartella3[1].length == 2 || cartella3[2].length == 2 || 
        cartella4[0].length == 2 || cartella4[1].length == 2 || cartella4[2].length == 2 || 
        cartella5[0].length == 2 || cartella5[1].length == 2 || cartella5[2].length == 2 || 
        cartella6[0].length == 2 || cartella6[1].length == 2 || cartella6[2].length == 2) {
        terno = true;
        winningShow("TERNO!");
    }    
}

function controlloQuaterna() {
    if (cartella1[0].length == 1 || cartella1[1].length == 1 || cartella1[2].length == 1 || 
        cartella2[0].length == 1 || cartella2[1].length == 1 || cartella2[2].length == 1 || 
        cartella3[0].length == 1 || cartella3[1].length == 1 || cartella3[2].length == 1 || 
        cartella4[0].length == 1 || cartella4[1].length == 1 || cartella4[2].length == 1 || 
        cartella5[0].length == 1 || cartella5[1].length == 1 || cartella5[2].length == 1 || 
        cartella6[0].length == 1 || cartella6[1].length == 1 || cartella6[2].length == 1) {
        quaterna = true;
        winningShow("QUATERNA!");
    }    
}

function controlloCinquina() {
    if (cartella1[0].length == 0 || cartella1[1].length == 0 || cartella1[2].length == 0 || 
        cartella2[0].length == 0 || cartella2[1].length == 0 || cartella2[2].length == 0 || 
        cartella3[0].length == 0 || cartella3[1].length == 0 || cartella3[2].length == 0 || 
        cartella4[0].length == 0 || cartella4[1].length == 0 || cartella4[2].length == 0 || 
        cartella5[0].length == 0 || cartella5[1].length == 0 || cartella5[2].length == 0 || 
        cartella6[0].length == 0 || cartella6[1].length == 0 || cartella6[2].length == 0) {
        cinquina = true;
        winningShow("CINQUINA!");
    }    
}
function controlloTombola() {
    if (cartella1[0].length == 0 && cartella1[1].length == 0 && cartella1[2].length == 0 || 
        cartella2[0].length == 0 && cartella2[1].length == 0 && cartella2[2].length == 0 || 
        cartella3[0].length == 0 && cartella3[1].length == 0 && cartella3[2].length == 0 || 
        cartella4[0].length == 0 && cartella4[1].length == 0 && cartella4[2].length == 0 || 
        cartella5[0].length == 0 && cartella5[1].length == 0 && cartella5[2].length == 0 || 
        cartella6[0].length == 0 && cartella6[1].length == 0 && cartella6[2].length == 0) {
        tombola = true;
        winningShow("TOMBOLA!");
    }    
}








