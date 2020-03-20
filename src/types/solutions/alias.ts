interface Visa {
  type: 'visa';
}

interface Mastercard {
  type: 'mastercard';
}

interface AmericanExpress {
  type: 'american-express';
}

type Card = Visa | Mastercard | AmericanExpress;

interface Payment {
  card: Card;
  amount: number;
}

interface Customer {
  name: string;
  card: Card;
}

interface CardMachine {
  acceptedCards: Card;
}
