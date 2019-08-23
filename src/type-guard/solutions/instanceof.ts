class Metric {
  metres = 123;
}

class Imperial {
  miles = 123;
}

function getDistance(arg: Metric | Imperial) {
  if (arg instanceof Metric) {
    return arg.metres;
  }

  return arg.miles;
}

getDistance(new Metric());
getDistance(new Imperial());

export {};
