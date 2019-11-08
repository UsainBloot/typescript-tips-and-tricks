type TypeA = {
  a: string;
};

type TypeB = {
  b: string;
};

function getValue(type: TypeA | TypeB) {
  if ('a' in type) {
    return type.a;
  }

  return type.b;
}

const result = getValue({ a: 'foo' });

export {};
