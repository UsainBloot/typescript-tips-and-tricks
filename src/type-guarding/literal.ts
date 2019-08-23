interface Dog {
  type: string;
  woof: () => void;
}

interface Cat {
  type: string;
  meow: () => void;
}

function makeNoise(animal: Dog | Cat) {
  if (animal.type === 'dog') {
    animal.woof();
    return;
  }

  animal.meow();
}

export {};
