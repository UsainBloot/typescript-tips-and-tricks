function wrap<T>(arg: T) {
  return arg;
}

wrap('woof').toString();
wrap([2, 1]).sort();
// wrap('woof').sort();
