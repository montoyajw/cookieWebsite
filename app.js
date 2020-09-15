let nameEl = document.getElementById('name')

console.log(nameEl)


// Mad Lib Generator

// console.log('Hello, World')

let name = prompt('What is your name?')

nameEl.innerHTML = `Hi, ${name}`


 let score1 = prompt('First test score?')
 let score2 = prompt('Second test score?')
 let score3 = prompt('Third test score?')

 score1 = parseInt(score1, 10)
 score2 = parseInt(score2, 10)
 score3 = parseInt(score3, 10)

 let average = (score1 + score2 + score3) / 3

 console.log(`Hi, ${name}. Your average is ${average}`)

 nameEl.innerHTML = `Your average is ${average}`




// Students enter name, three individual test scores 0-100, one by one
//calculate their test average and display name and average
// types - number 3

// string - 'abc'
// coments

//back tick- template strings

