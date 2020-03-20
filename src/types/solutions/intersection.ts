interface Person {
  name: string;
  // age: number
}

interface Details {
  phone: string;
}

type Contact = Person & Details;

const contact: Contact = { name: 'Foo', phone: '111-111-111' };
