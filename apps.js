let nameEl = document.getElementById('name')

console.log(nameEl)

let adjective = prompt('Insert Adjective')

let place = prompt('Insert Place')

let adjective2 = prompt('Insert Adjective')

let pluralnoun1 = prompt('Insert Plural Noun')

let pluralnoun2 = prompt('Insert Plural Noun')

let noun1 = prompt('Insert Noun')

let verb1 = prompt('Insert Verb')

let noun2 = prompt('Insert Noun')

let verb2 = prompt('Insert Verb')

let actionverb1 = prompt('Insert Action Verb')

let pluralnoun3 = prompt('Insert Plural Noun')

let noun3 = prompt('Insert Noun')

let verb3 = prompt('Insert Verb ending in ing')

let noun4 = prompt('Insert noun')

let time = prompt('Insert Measurement of Time')

let adjective3 = prompt('Insert Adjective')

let verb4 = prompt('Insert Action Verb')

let verb5 = prompt('Insert Verb')

let adjective4 = prompt('Insert Adjective')

let noun5 = prompt('Insert Possesive Noun')

console.log(`On the ${adjective} trip to ${place}, my ${adjective2} friend and I decided to
invent a game. Since this would be a rather ${adjective3} trip, it would need to be a game
with ${pluralnoun1} and ${pluralnoun2}. Using our ${noun1} to ${verb1}, we tried to get the ${noun2}
 next to us to play too, but they just ${verb2}ed at us and ${actionverb1} away. After a few rounds,
 we thought the game could use some ${pluralnoun3} so we turned on the ${noun3} and started ${verb3}
 to the ${noun4} that came on. This lasted for ${time} before I got ${adjective3} and decided to
 ${verb4}. I'll never ${verb5} that trip, it was the ${adjective4} road trip of my ${noun5}.`)


nameEl.innerHTML = `On the ${adjective} trip to ${place}, my ${adjective2} friend and I decided to
invent a game. Since this would be a rather ${adjective3} trip, it would need to be a game
with ${pluralnoun1} and ${pluralnoun2}. Using our ${noun1} to ${verb1}, we tried to get the ${noun2}
 next to us to play too, but they just ${verb2}ed at us and ${actionverb1} away. After a few rounds,
 we thought the game could use some ${pluralnoun3} so we turned on the ${noun3} and started ${verb3}
 to the ${noun4} that came on. This lasted for ${time} before I got ${adjective3} and decided to
 ${verb4}. I'll never ${verb5} that trip, it was the ${adjective4} road trip of my ${noun5}.`