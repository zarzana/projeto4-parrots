document.addEventListener('DOMContentLoaded', init);

function init() {

    const cardOptions = [
        {name: 'bobrossparrot', img: './assets/bobrossparrot.gif'},
        {name: 'explodyparrot', img: './assets/explodyparrot.gif'},
        {name: 'fiestaparrot', img: './assets/fiestaparrot.gif'},
        {name: 'metalparrot', img: './assets/metalparrot.gif'},
        {name: 'revertitparrot', img: './assets/revertitparrot.gif'},
        {name: 'tripletsparrot', img: './assets/tripletsparrot.gif'}
    ]

    const game = document.querySelector('.game');

    generateGame(game, cardOptions);

}

function generateGame(game, cardOptions) {

    for (let i = 0; i < cardOptions.length; i++) {

        if (i == 3) {
            var breakDiv = document.createElement('div');
            breakDiv.setAttribute('class', 'break');
            game.appendChild(breakDiv);
        }

        var card = document.createElement('div');
        // card.setAttribute('id', 'card'+i);
        card.setAttribute('class', 'card');

        var cardBack = document.createElement('img');
        cardBack.setAttribute('src', './assets/back.png');

        // var cardFront = document.createElement('img');
        // cardFront.setAttribute('src', cardOptions[i].img);

        card.appendChild(cardBack);
        //card.appendChild(cardFront);

        game.appendChild(card);
        game.appendChild(card.cloneNode(true));

    }

}