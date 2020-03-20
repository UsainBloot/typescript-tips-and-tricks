interface Person {
  name: string;
  age: number;
}

interface PersonReadOnly {
  readonly name: string;
  readonly age: number;
}

interface PersonOptional {
  name?: string;
  age?: number;
}
