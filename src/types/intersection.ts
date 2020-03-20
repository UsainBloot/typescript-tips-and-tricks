interface Person {
  name: string;
  age: number;
}

interface Details {
  phone: string;
}

// This is very brittle when adding a new field in either of the Person or Contact interfaces
interface Contact {
  name: string;
  age: number;
  phone: string;
}

const contact: Contact = { name: 'John', age: 20, phone: '111-111-111' };
