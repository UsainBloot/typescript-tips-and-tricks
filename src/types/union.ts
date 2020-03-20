function normaliseAndLowercase(input): string {
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
normaliseAndLowercase(true); // Throws error, so we should look to prevent this before it gets to runtime
