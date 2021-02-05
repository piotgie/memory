document.addEventListener('DOMContentLoaded', () => {

    //card options

    const cardArray = [
        {
            name: 'angry',
            img: 'img/angry.png'
        },
        {
            name: 'angry',
            img: 'img/angry.png'
        },
        {
            name: 'heart',
            img: 'img/heart.png'
        },
        {
            name: 'heart',
            img: 'img/heart.png'
        },
        {
            name: 'laugh',
            img: 'img/laugh.png'
        },
        {
            name: 'laugh',
            img: 'img/laugh.png'
        },
        {
            name: 'like',
            img: 'img/like.png'
        },
        {
            name: 'like',
            img: 'img/like.png'
        },
        {
            name: 'sad',
            img: 'img/sad.png'
        },
        {
            name: 'sad',
            img: 'img/sad.png'
        },
        {
            name: 'wow',
            img: 'img/wow.png'
        },
        {
            name: 'wow',
            img: 'img/wow.png'
        } 
    ]

    // random display cards
    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    // create your board

    function createBoard () {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1] 
        if (cardsChosen[0] === cardsChosen[1]) {
            console.log('You have found a match!')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            console.log('Sorry, try again!')
        }
        cardsChosen = []
        cardsChosenId = [] 
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2) {
            resultDisplay.textContent = 'Congratulations!'
        }
    }

    // flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
})