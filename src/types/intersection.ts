interface Person {
  name: string;
  // age: number
}

interface Details {
  phone: string;
}

// This is very brittle when adding a new field in either of the Person or Contact interfaces
interface Contact {
  name: string;
  phone: string;
}

const contact: Contact = { name: 'Foo', phone: '111-111-111' };
