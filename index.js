//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
//  for (let i = 0; i < gifts.length; i++) {
//    console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   debugger;
//  }

//  return gifts;
//}

//wrapGifts(gifts);

const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, event){
    const newArray = [];
    
    for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
return newArray;
}

function countDown() {
 for(let countdown = 10; countdown >= 0; countdown--)
 console.log(countdown);
}