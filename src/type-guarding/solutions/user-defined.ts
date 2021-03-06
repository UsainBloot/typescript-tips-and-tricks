// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards

type TypeA = {
  a: string;
};

type TypeB = {
  b: string;
};

type TypeAorTypeB = TypeA | TypeB;

function filterOnlyA(all: (TypeA | TypeB)[]): TypeA[] {
  return all.filter((single): single is TypeA => 'a' in single);
}

const result = filterOnlyA([{ a: 'foo' }, { b: 'bar' }]);
