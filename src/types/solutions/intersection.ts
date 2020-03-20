interface Person {
  name: string;
  age: number;
  // height: string;
}

interface Details {
  phone: string;
}

type Contact = Person & Details;

const contact: Contact = { name: 'John', age: 20, phone: '111-111-111' };
