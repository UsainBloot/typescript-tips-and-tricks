declare function f<T>(input: T): string | T;

const str = f({ a: 'foo ' }); // This should only be a string
const obj = f({ b: 'bar' }); // This should only be { b: 'bar' }
