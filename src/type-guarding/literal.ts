type Dog = {
  type: string;
  woof: () => void;
};

type Cat = {
  type: string;
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
