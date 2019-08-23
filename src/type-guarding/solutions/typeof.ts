function plusOne(input: string | number) {
  if (typeof input === 'string') {
    return parseInt(input) + 1;
  }

  return input + 1;
}

const result = plusOne(1);

export {};
