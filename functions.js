// function - named sequence of code, repeated, reused

let cookieEl = document.getElementById('cookie')
let scoreEl = document.getElementById('score')
let headingEl = document.getElementById('heading')
let cookieCount = 0
let doubleButton = document.getElementById('double') 
let clickChange = 1
let textRed = document.getElementById('textRed')
let pageColor = 1
let bodyEl = document.getElementById('body')

function cookieClicked() {
    cookieCount = cookieCount + clickChange
    scoreEl.innerHTML = cookieCount

    if (cookieCount === 10) {

        
        if (clickChange === 1) {
            doubleButton.classList.remove('remove')

        
        }
        
    }
    if (cookieCount === 20) {
        
        if (clickChange === 1) {
            textRed.classList.remove('remove')
        }
    }

    if (pageColor === 1){
        bodyEl.classList.add('colorChange1')
        pageColor = 0
    }

    else if (pageColor === 0){
        bodyEl.classList.remove('colorChange1')
        pageColor = 1
    }


}


cookieEl.addEventListener('click',cookieClicked)

function redText() {
    console.log('Text Red Button Clicked')
    
    cookieCount = cookieCount - 20
    scoreEl.innerHTML = cookieCount 
    
    headingEl.classList.add('color')

    scoreEl.classList.add('color')

    textRed.classList.add('color')

    textRed.classList.add('remove')
  
}

textRed.classList.add('remove')


function doubleClicked() {
    console.log('Double Button Clicked')

    cookieCount = cookieCount - 10
    scoreEl.innerHTML = cookieCount

    clickChange = 2

    doubleButton.classList.add('remove')
}



doubleButton.addEventListener('click', doubleClicked)
textRed.addEventListener('click', redText)


function colorChange1() {
    bodyEl.classList.add('colorChange1')
}

function colorChange2() {
    bodyEl.classList.remove('colorChange1')
}

//cookieEl.addEventListener('mousedown', colorChange1)
//cookieEl.addEventListener('mouseup', colorChange2)

function shrink() {
    cookieEl.classList.add('shrink')
}

function grow() {
    cookieEl.classList.remove('shrink')
}

cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('mouseup', grow)

let showButton = document.getElementById('show')
let removeButton = document.getElementById('remove')



function showCookie() {
    cookieEl.classList.remove('remove')
    
    removeButton.classList.remove('remove')
    showButton.classList.add('remove')

}

function removeCookie() {
    cookieEl.classList.add('remove')

    removeButton.classList.add('remove')
    showButton.classList.remove('remove')
}

showButton.addEventListener('click', showCookie)
removeButton.addEventListener('click', removeCookie)

showButton.classList.add('remove')



console.log('End of script')