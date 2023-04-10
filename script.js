document.addEventListener('DOMContentLoaded', init);

var numOfTurns = 0;

function init() {

    const gameBoard = document.querySelector('.game-board');
    const cardOptions = [
        {name: 'bobrossparrot', img: './assets/bobrossparrot.gif'},
        {name: 'explodyparrot', img: './assets/explodyparrot.gif'},
        {name: 'fiestaparrot', img: './assets/fiestaparrot.gif'},
        {name: 'metalparrot', img: './assets/metalparrot.gif'},
        {name: 'revertitparrot', img: './assets/revertitparrot.gif'},
        {name: 'tripletsparrot', img: './assets/tripletsparrot.gif'},
        {name: 'unicornparrot', img: './assets/unicornparrot.gif'}
    ]

    var cardAmount = 0;

    while (!(cardAmount >= 4 && cardAmount <= cardOptions.length*2 && cardAmount % 2 == 0)) {
        var cardAmount = prompt("Com quantas cartas gostaria de jogar?");
    }

    cardIds = fillGameBoard(gameBoard, cardAmount);
    cardRelationship = createCardRelationship(cardAmount, cardOptions, cardIds);
    
    var hasFlipped = false;
    var flippedCardName;
    var flippedCardId;

    flipCard(cardRelationship, hasFlipped, flippedCardName, flippedCardId);

}

function createCardRelationship (cardAmount, cardOptions, cardIds) {

    var cardRelationship = [];
    var cardArray = cardOptions.slice(0, cardAmount/2).concat(cardOptions.slice(0, cardAmount/2)).sort((a, b) => 0.5 - Math.random());

    for (let i = 0; i < cardIds.length; i++) {
        cardRelationship.push(Object.assign({},  {'id': cardIds[i]}, cardArray[i]));
    }

    return cardRelationship;

}

function fillGameBoard (gameBoard, cardAmount) {

    var cardIds = [];

    for (let i = 0; i < cardAmount; i++) {

        let cardId = 'card' + i
        cardIds.push(cardId)

        var card = document.createElement('div');
        card.setAttribute('id', cardId);
        card.setAttribute('class', 'card');
        card.setAttribute('data-test', 'card');

        var cardBack = document.createElement('img');
        cardBack.setAttribute('class', 'card-back');
        cardBack.setAttribute('src', './assets/back.png');
        cardBack.setAttribute('data-test', 'face-down-image');

        card.appendChild(cardBack);
        gameBoard.appendChild(card);

    }

    return cardIds;

}

function flipCard (cardRelationship, hasFlipped, flippedCardName, flippedCardId) {

    cardRelationship.forEach(card => {

        var currentCard = document.getElementById(card['id']);

        currentCard.addEventListener('click', () => {

            numOfTurns += 1;

            var cardFront = document.createElement('img');
            cardFront.setAttribute('class', 'card-front');
            cardFront.setAttribute('src', card['img']);
            cardFront.setAttribute('data-test', 'face-up-image');
            currentCard.appendChild(cardFront);

            // virar carta

            if (hasFlipped) {

                if (card['name'] == flippedCardName && card['id'] != flippedCardId) {
                }

                else {
                    setTimeout(() => {
                        // fechar cartas
                        let cardToRemove = document.getElementsByClassName('card-front')[0];
                        cardToRemove.parentNode.removeChild(cardToRemove);
                        currentCard.removeChild(cardFront)
                    }, 1000)
                }

                hasFlipped = false;
                flippedCardName = null;
                flippedCardId = null;
                
            }

            else {
                hasFlipped = true;
                flippedCardName = card['name'];
                flippedCardId = card['id'];
            }

        });

    });

}
