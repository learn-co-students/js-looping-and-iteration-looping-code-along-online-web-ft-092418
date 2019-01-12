// Code your solutions in this file

function printBadges(array){

for (let index=0 ; index < array.length; index++){

  console.log(`Welcome ${array[index]}! You are employee #${index+1}.`);
}
return array;
}


function tailsNeverFails(){
  let outcome = Math.random();
  let tails = 0;

  while(outcome >= 0.5){
    ++tails;
    outcome = Math.random();
  }

  return `You got ${tails} tails in a row!`;

}
