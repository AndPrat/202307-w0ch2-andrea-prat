const generateDeckCards = () => {
  const suitsCards = ["♠️", "♣️", "♦️", "♥️"];

  const numbersCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  const deck = [];

  for (let suit = 0; suit < suitsCards.length; suit++) {
    for (let numbers = 0; numbers < numbersCards.length; numbers++) {
      deck.push({ suit: suitsCards[suit], number: numbersCards[numbers] });
    }
  }
  return deck;
};

const createRandomCard = (deck) => {
  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  console.log(randomCard);
  return randomCard;
};

const selectionNumberElements = document.querySelectorAll(".suit-cards");
const selectionSuitElements = document.querySelectorAll(".number-cards");

const giveNumbersCards = (suitCard, numberCard) => {
  selectionNumberElements.forEach(
    (selectionNumberElement) => (selectionNumberElement.textContent = suitCard)
  );

  selectionSuitElements.forEach(
    (selectionSuitElement) => (selectionSuitElement.textContent = numberCard)
  );
};

const playGame = () => {
  const deck = generateDeckCards();
  const card = createRandomCard(deck);
  giveNumbersCards(card.suit, card.number);
};

playGame();
