type Dog = {
  type: 'dog';
  woof: () => void;
};

type Cat = {
  type: 'cat';
  meow: () => void;
};

function makeNoise(animal: Dog | Cat) {
  if (animal.type === 'dog') {
    animal.woof();
    return;
  }

  animal.meow();
}

export {};
