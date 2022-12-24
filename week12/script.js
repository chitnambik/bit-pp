// function trigger(){
//     var triggeredMessage = 'ovo je triggered'
//     return triggeredMessage
// }
// console.log(trigger())


function getInfo(){
    window.navigator.platform
    window.navigator.appVersion
    window.navigator.vendor
}
console.log(window.navigator.platform)
console.log(window.navigator.appVersion)
console.log(window.navigator.vendor)

function isOnline(){
    if(window.navigator.onLine==true){
        console.log('online')
    } else {console.log('offline')}
}
isOnline()

function screenInfo(){
    window.screen.width
    window.screen.height
    window.screen.availHeight
}
console.log(window.screen.width)
console.log(window.screen.height)
console.log(window.screen.availWidth)

function urlInfo(){
    window.location.pathname
    window.location.host
    window.location.protocol
    window.location.origin
}
console.log(window.location.pathname)
console.log(window.location.host)
console.log(window.location.protocol)
console.log(window.location.origin)


// function reload(){
//     window.location.reload()
// }
// console.log(reload())

// function goTo(){
//     window.open('www.google.com')
// }
// console.log(goTo())


function passedData(){
    window.localStorage.setItem('passed data', 'this is past')
}
console.log(passedData());

function readData(){
    var a = window.localStorage.getItem('passed data')
    return a
}
console.log(readData())

// function readData(){
//     console.log(window.localStorage.getItem('passed data'))
// }
// readData()

function deleteData(){
    window.localStorage.clear()
}
console.log(deleteData())