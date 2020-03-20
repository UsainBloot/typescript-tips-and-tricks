interface Visa {
  type: 'visa';
}

interface Mastercard {
  type: 'mastercard';
}

// interface AmericanExpress {
//   type: 'american-express'
// }

// Adding American Express too all of these is prone to mistakes
interface Payment {
  card: Visa | Mastercard;
  amount: number;
}

interface Customer {
  name: string;
  card: Visa | Mastercard;
}

interface CardMachine {
  acceptedCards: Visa | Mastercard;
}
