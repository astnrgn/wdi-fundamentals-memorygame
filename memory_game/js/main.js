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
	
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement)
  }
};


var flipCard = function() {
  cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);

  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  checksForMatch();
};


function checksForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  } else if (cardsInPlay[1] === cardsInPlay[3]) {
  alert("Sorry, try again.");
  } 
};


createBoard();