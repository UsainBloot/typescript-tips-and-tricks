type TypeA = {
  a: string;
};

type TypeB = {
  b: string;
};

function getValue(type: TypeA | TypeB) {
  if (type.a !== undefined) {
    return type.a;
  }

  return type.b;
}

const result = getValue({ a: 'foo' });

export {};
