// Code your solutions in this file
function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
    }
    return names
}

function tailsNeverFails() {
    let coin = []
    let number

    while (number = (Math.random() >= 0.5)) {
       coin.push(number)
       
    }
    
    return `You got ${coin.length} tails in a row!`
} 