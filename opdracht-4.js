// **************** OPDRACHT 4: INHERITANCE / OVERERVING ****************

/**
 * Oefening: Dierentuindieren
 * Doel: Begrijpen en implementeren van overerving in JavaScript.
 * 
 * Beschrijving:
 * Je hebt de taak om een klein systeem voor een dierentuin te maken om de dieren te beheren.
 */


console.log("Output van opdracht 2:")

// Basis class: Dier
class Dier {
  constructor(naam, leeftijd, gewicht) {
      this.naam = naam;
      this.leeftijd = leeftijd;
      this.gewicht = gewicht;
  }

  eten() {
      console.log(`${this.naam} is aan het eten!`);
  }

  slapen() {
      console.log(`${this.naam} slaapt!`);
  }
}



// *************** Oefening 4a:
// Maak een class Zoogdier aan
// Zorg dat de class Zoogdier de class Dier erft (inherit)
// Extra Attributen: vachtkleur
// Extra Methoden: rennen()

// *************** Oefening 4b:
// Maak een instantie/object van Zoogdier genaamd leeuw met een naam van "Leeuw", leeftijd van 3, gewicht van 190 kg, en vachtkleur "goudkleurig".
// Laat de leeuw eten, slapen en rennen.


// *************** Bonus Oefeningen:
// *************** Oefening 4c:
// Voeg meer methoden en eigenschappen toe aan elke klasse om het dierentuinbeheersysteem uitgebreider te maken.

// *************** Oefening 4d:
// Implementeer een methode in de Dier class   die een gedetailleerde beschrijving van het dier afdrukt.
// Zorg ervoor dat deze methode correct werkt voor zowel de Vogel als Zoogdier klassen, waarbij alle relevante details worden weergegeven.
