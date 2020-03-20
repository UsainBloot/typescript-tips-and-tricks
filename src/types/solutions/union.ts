function normaliseAndLowercase(input: string | number): string {
  if (typeof input === 'string') {
    return input.toLowerCase();
  }

  if (typeof input === 'number') {
    return input.toString();
  }

  throw new Error('Unexpected input');
}

normaliseAndLowercase('Dog');
normaliseAndLowercase(10);
// normaliseAndLowercase(true); // Captured before error is thrown
