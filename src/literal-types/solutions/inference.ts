function bark(sound: 'woof') {
  //...
}

function makeQuadradpedal(legs: 4) {
  //...
}

const dog = {
  legs: 4 as 4,
  sound: 'woof' as 'woof'
};

bark(dog.sound);
makeQuadradpedal(dog.legs);

export {};
