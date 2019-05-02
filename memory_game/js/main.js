var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


var cardsInPlay = [];


function createBoard () {
	for (var i = 0; i < cards.length; i++) {
	
	var connect = document.getElementById('game-board');

	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
    connect.appendChild(cardElement);
  }
};


function flipCard() {
  var cardId = this.getAttribute('data-id');

  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  cardsInPlay.push(cards[cardId].rank);

  checksForMatch();
};


function checksForMatch() {
  this.setAttribute = ('src', 'cards.cardImage');

  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  } else {
  alert("Sorry, try again.");
}
};


createBoard();