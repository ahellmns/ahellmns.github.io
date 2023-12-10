

// Definieren Sie die Entfernungen zu den verschiedenen Objekten als JSON-Objekt
const distances = {
  Sonne: 149.6, // Entfernung von der Erde zur Sonne in Millionen km
  Merkur: 77.3, // Entfernung von der Erde zum Merkur in Millionen km
  Venus: 38, // Entfernung von der Erde zur Venus in Millionen km
  Mars: 78.3, // Entfernung von der Erde zum Mars in Millionen km
  Jupiter: 628.7, // Entfernung von der Erde zum Jupiter in Millionen km
  Saturn: 1276, // Entfernung von der Erde zum Saturn in Millionen km
  Uranus: 2723.5, // Entfernung von der Erde zum Uranus in Millionen km
  Neptune: 4351, // Entfernung von der Erde zum Neptun in Millionen km
  Pluto: 5906 // Entfernung von der Erde zum Pluto in Millionen km (ja, ich weiß, Pluto ist kein Planet mehr, aber ich habe ihn trotzdem aufgelistet)
};

// Funktion zur Berechnung der Reisezeit
function calculate() {
  // Lesen Sie die ausgewählte Zielobjekt-Option aus dem Dropdown-Menü
  const destination = document.getElementById("destination").value;

  // Lesen Sie die ausgewählte Geschwindigkeit aus dem Dropdown-Menü
  const speed = parseInt(document.getElementById("speed").value);

  // Lesen Sie die Entfernung zum Ziel aus der Entfernungsdatenbank ab
  const distance = distances[destination];

  // Berechnen Sie die Reisedauer in Tagen
  const travelTime = distance * 1000000 / speed / 24 / 365;

  // Zeigen Sie das Ergebnis in der HTML-Div an
  document.getElementById("result").innerHTML = `Reisezeit zur ${destination.charAt(0).toUpperCase() + destination.slice(1)}: ${travelTime.toFixed(1)} Jahre | Entfernung: ${distance} Millionen km`;
}
