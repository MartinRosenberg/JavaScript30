// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', birth: 1879, death: 1955 },
  { first: 'Isaac', last: 'Newton', birth: 1643, death: 1727 },
  { first: 'Galileo', last: 'Galilei', birth: 1564, death: 1642 },
  { first: 'Marie', last: 'Curie', birth: 1867, death: 1934 },
  { first: 'Johannes', last: 'Kepler', birth: 1571, death: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', birth: 1473, death: 1543 },
  { first: 'Max', last: 'Planck', birth: 1858, death: 1947 },
  { first: 'Katherine', last: 'Blodgett', birth: 1898, death: 1979 },
  { first: 'Ada', last: 'Lovelace', birth: 1815, death: 1852 },
  { first: 'Sarah E.', last: 'Goode', birth: 1855, death: 1905 },
  { first: 'Lise', last: 'Meitner', birth: 1878, death: 1968 },
  { first: 'Hanna', last: 'Hammarström', birth: 1829, death: 1909 }
]

// Array.prototype.filter()
console.log("1. Filter the list of inventors for those who were born in the 1500s")

const inventors16C = inventors.filter(inv => inv.birth >= 1500 && inv.birth < 1600)
console.table(inventors16C)

// Array.prototype.map()
console.log("2. Give us an array of just the inventors' first and last names")

const inventorNames = inventors.map(inv => ({ first: inv.first, last: inv.last }))
console.table(inventorNames)

// Array.prototype.sort()
console.log("3. Sort the inventors by birth year, oldest to youngest")

const inventorsByBirthYear = inventors.sort((a, b) => a.birth > b.birth ? 1 : -1)
console.table(inventorsByBirthYear)

// Array.prototype.reduce()
console.log("4. How many years did all the inventors live combined?")

const totalAge = inventors.reduce((acc, curr) => acc + (curr.death - curr.birth), 0)
console.log(totalAge)

// Array.prototype.sort()
console.log("5. Sort the inventors by years lived")

const age = inventor => inventor.death - inventor.birth
const inventorsByYearsLived = inventors.sort((a, b) => age(a) > age(b) ? 1 : -1)
console.table(inventorsByYearsLived)

// Array.prototype.filter()
// Get data from https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
console.log("6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name")
const blvdsInParis = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard de Rochechouart", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"]

const blvdsWithDe = blvdsInParis.filter(blvd => blvd.includes('de'))
console.table(blvdsWithDe)

// Array.prototype.sort()
console.log("7. Sort the people alphabetically by last name")
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']

const lastName = person => person.split(', ')[0]
const peopleByLastName = people.sort((a, b) => lastName(a) > lastName(b) ? 1 : -1)
console.table(peopleByLastName)

// Array.prototype.reduce()
console.log("8. Sum up the instances of each item in `data`")
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]

const transportation = data.reduce((obj, item) => {
  obj[item] = obj[item] ? obj[item] + 1 : 1
  return obj
}, {})
console.table(transportation)
