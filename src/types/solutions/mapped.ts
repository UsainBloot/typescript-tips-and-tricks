interface Person {
  name: string;
  age: number;
}

type ReadOnly<T> = {
  readonly [Property in keyof T]: T[Property];
};

type Optional<T> = {
  [Property in keyof T]?: T[Property];
};

type PersonReadOnly = ReadOnly<Person>;
type PersonOptional = Optional<Person>;
