// Code your solutions in this file
function printBadges(nameArr){
    for (let i = 0; i < nameArr.length; i++){
        console.log(`Welcome ${nameArr[i]}! You are employee #${i+1}.`)
    }
    return nameArr;
}

function maybeTrue(){
    return Math.random() >= 0.5;
}

function tailsNeverFails(){
    let i = 0;
    while (maybeTrue()) {
        i++
    }
    return `You got ${i} tails in a row!`;
}