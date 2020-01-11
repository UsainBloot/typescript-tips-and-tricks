function wrap(arg) {
  return arg;
}

wrap('woof').toString();
wrap([2, 1]).sort();
wrap('woof').sort(); // should not be allowed
