// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// considero l'età e i kilometri come variabili e il prezzo come constante che deriva dalla moltiplicazione dei kilometri per una constante
let età = 25
let kilometri = 50
const prezzo = 0.21 * kilometri

// pongo le condizioni per lo sconto del prezzo del biglietto

if (età < 18) {
    const prezzo = prezzo - (prezzo * 0.20)
    console.log(prezzo);
}
else if (età > 65){
    const prezzo = prezzo - (prezzo * 0.40)
    console.log(prezzo);
}