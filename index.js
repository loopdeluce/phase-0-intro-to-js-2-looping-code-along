// Code your solutions in this file

function writeCards(names, event) {
  const messages = [];
  for(let counter = 0; counter < names.length; counter++) {
    messages.push(`Thank you, ${names[counter]}, for the wonderful ${event} gift!`)
  }
  return messages;
}

function countDown(start) {
  while(start >= 0) {
    console.log(start);
    start--;
  }
}