// Code your solutions in this file
function writeCards(name, event) {
    const newArray = []
    for (let i = 0; i < name.length; i++) {
         newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer--)
    }
}