// var cartella0 = [[1,2,3,4,5],[11,12,12,14,15],[21,22,23,24,25]];

// var cartella1 = [[6,7,8,9,10],[16,17,18,19,20],[26,27,28,29,30]];

// var cartella2 = [[31,32,33,34,35],[41,42,42,44,45],[51,52,53,54,55]];

// var cartella3 = [[36,37,38,39,40],[46,47,48,49,50],[56,57,58,59,60]];

// var cartella4 = [[61,62,63,64,65],[71,72,72,74,75],[81,82,83,84,85]];

// var cartella5 = [[66,67,68,69,70],[76,77,78,79,80],[86,87,88,89,90]];

// var casuale = (Math.floor(Math.random() * 90))+1;
// console.log("Variabile casuale " + casuale);

// if(cartella1[0].indexOf(casuale)>-1) {
//     console.log("La posizione da cancellare è " + cartella1[0].indexOf(casuale));
// }


// // if (cartella1[0].indexOf(casuale)>-1) {
// //     console.log("E' qui!");
// //     cartella1[0].splice((cartella1[0].indexOf(casuale)),1);
// //     console.log(cartella1[0].length);
// // }

// // row1Cartella1.splice((row1Cartella1.indexOf(3)),1);
// // console.log("Lunghezza array: " + row1Cartella1.length);
   
 // controllo i duplicati 
 for (var i = arrayIndex; i>=0; i--) {
    if (extractedNumber== numberPool[i]) {
        errorFlag = 1;                    
    } else {
        errorFlag = 0;
    }
}