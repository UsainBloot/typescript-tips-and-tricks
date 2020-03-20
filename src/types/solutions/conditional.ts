declare function f<T>(input: T): T extends { a: string } ? string : T;

const str = f({ a: 'foo ' });
const obj = f({ b: 'bar' });
