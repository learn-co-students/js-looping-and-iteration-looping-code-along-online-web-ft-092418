// Code your solutions in this file



function printBadges(nameArray) {
    for (let i = 0; i < nameArray.length; i++) {
        console.log(`Welcome ${nameArray[i]}! You are employee #${i + 1}.`)
    }
    return nameArray;
}

function tailsNeverFails() {
    let tails = 0;
    while (Math.random() >= 0.5) {
        tails++
    }
    return `You got ${tails} tails in a row!`
}