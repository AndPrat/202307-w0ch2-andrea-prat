const generateStackCards = () => {
  const suitsCards = [
    "♠️ (picas)",
    "♣️ (tréboles)",
    "♦️ (diamantes)",
    "♥️ (corazones)",
  ];

  const numbersCards = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "J (jota)",
    "Q (reina)",
    "K (rey)",
    "A (as)",
  ];

  const cards = [];

  for (let suit = 0; suit < suitsCards.length; suit++) {
    for (let numbers = 0; numbers < numbersCards.length; numbers++) {
      cards.push({ suits: suitsCards[suit], numbers: numbersCards[numbers] });
    }
  }
  return cards;
};

const createRandomCards = (generateStackCards) => {
  const stackCards = generateStackCards();
  const randomCard = stackCards[Math.floor(Math.random() * stackCards.length)];
  console.log(randomCard);
  return randomCard;
};
createRandomCards(generateStackCards);
