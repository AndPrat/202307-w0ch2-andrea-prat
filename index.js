const generateStackCards = () => {
  const suitsDeckCards = [
    "♠️ (picas)",
    "♣️ (tréboles)",
    "♦️ (diamantes)",
    "♥️ (corazones)",
  ];

  const deckCards = [
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

  for (let suit = 0; suit < suitsDeckCards.length; suit++) {
    for (let deck = 0; deck < deckCards.length; deck++) {
      cards.push(suitsDeckCards[suit] + deckCards[deck]);
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
