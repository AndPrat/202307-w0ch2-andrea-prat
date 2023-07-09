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
  return randomCard;
};

const selectionNumberElements = document.querySelectorAll(".suit-cards");
const selectionSuitElements = document.querySelectorAll(".number-cards");

const selectionNumberUserElements =
  document.querySelectorAll(".suit-cards-user");
const selectionSuitUserElements =
  document.querySelectorAll(".number-cards-user");

const giveNumbersCards = (suitCard, numberCard) => {
  selectionNumberElements.forEach(
    (selectionNumberElement) => (selectionNumberElement.textContent = suitCard)
  );

  selectionSuitElements.forEach(
    (selectionSuitElement) => (selectionSuitElement.textContent = numberCard)
  );
};

const giveCardsUser = (suitCard, numberCard) => {
  selectionNumberUserElements.forEach(
    (selectionNumberUserElement) =>
      (selectionNumberUserElement.textContent = suitCard)
  );

  selectionSuitUserElements.forEach(
    (selectionSuitUserElement) =>
      (selectionSuitUserElement.textContent = numberCard)
  );
};

const selectionBiggerButtonElements = document.querySelector(".bigger-button");
const selectionSmallerButtonElements =
  document.querySelector(".smaller-button");

let userBet = "";

const renderUserCard = (cardUser) => {
  selectionBiggerButtonElements.addEventListener("click", (event) => {
    userBet = event.target.innerText;
    document.querySelector(".question-mark").classList.add("hidden");
    document.querySelectorAll(".suit-cards-user").forEach((element) => {
      element.classList.remove("hidden");
    });

    document.querySelector(".number-cards-user").classList.remove("hidden");
    giveCardsUser(cardUser.suit, cardUser.number);
  });

  selectionSmallerButtonElements.addEventListener("click", (event) => {
    userBet = event.target.innerText;
    document.querySelector(".question-mark").classList.add("hidden");
    document.querySelectorAll(".suit-cards-user").forEach((element) => {
      element.classList.remove("hidden");
    });

    document.querySelector(".number-cards-user").classList.remove("hidden");
    giveCardsUser(cardUser.suit, cardUser.number);
  });
};

//const testCards = (deck) => {
//deck[numbers].forEach()
//if (deck[numbers] > ) {

//}
//console.log(deck[numbers])
//};

const startGame = () => {
  const deck = generateDeckCards();
  const card = createRandomCard(deck);
  const cardUser = createRandomCard(deck);
  giveNumbersCards(card.suit, card.number);
  renderUserCard(cardUser);
};
startGame();
