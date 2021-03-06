type TypeA = {
  a: string;
};

type TypeB = {
  b: string;
};

function filterOnlyA(all: (TypeA | TypeB)[]): TypeA[] {
  return all.filter((single) => 'a' in single);
}

const result = filterOnlyA([{ a: 'foo' }, { b: 'bar' }]);

export {};
