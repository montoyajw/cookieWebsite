// function - named sequence of code, repeated, reused

let cookieEl = document.getElementById('cookie')
let scoreEl = document.getElementById('score')
let cookieCount = 0

function cookieClicked() {
    cookieCount = cookieCount + 1
    scoreEl.innerHTML = cookieCount
}

cookieEl.addEventListener('click',cookieClicked)



//sayHi('John') // argument
//sayHi('Bob') 
//sayHi('Jack')




console.log('End of script')