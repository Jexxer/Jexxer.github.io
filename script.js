const pageDisplay = document.querySelector('#page-display')
const gamesNavButton = document.querySelector('#games-nav-button')
const homePageButton = document.querySelector('#home-page')
const title = document.querySelector('title')
const aboutModalDiv = document.querySelector('#modal')
const aboutButton = document.querySelector('#about-link')
const mobileGamesNavButton = document.querySelector('#mobile-games-nav-button')
const mobileHomePageButton = document.querySelector('#mobile-home-page')
const mobileAboutModalDiv = document.querySelector('#mobile-about-link')

// Variables for Home page
let landingPageContainer;
let landingPageDiv1;
let landingPageDivChild;
let landingPageDiv2;
let landingPageDiv3;

// Variables for Games page
let gamesCardsContainer;
let game1Card;
let game1CardContent;
let game1CardTitle;
let game1CardText;
let game1CardLink;
let game2Card;
let game2CardContent;
let game2CardTitle;
let game2CardText;
let game2CardLink;
let game3Card;
let game3CardContent;
let game3CardTitle;
let game3CardText;
let game3CardLink;


// Declaring variables for trivia page to be used
let triviaGame;
let triviaQuestionNumber = 0
let triviaScore = 0
let tQuestionNumber;
let imageContainer;
let triviaImage;
let triviaQuestion;
let tButtonContainerTop;
let tButtonContainerBottom;
let triviaCompleteModal;
let triviaModal;
let triviaModalTop;
let triviaModalBottom;
let triviaModalBottomText;
let triviaModalButton1;
let triviaModalButton2;

const marvelQuestions = {
    question1: {
        image: '/images/question1.png',
        question: 'How many Infinity Stones are there?',
        answer: 'Six',
        options: ['Five', 'Seven', 'Four', 'Six']
    },
    question2: {
        image: '/images/question2.png',
        question: 'Where is Captain America from?',
        answer: 'Brooklyn',
        options: ['Manhattan', 'Brooklyn', 'Queens', 'Harlem']
    },
    question3: {
        image: '/images/question3.png',
        question: 'Peggy Carter has a great-niece named...',
        answer: 'Sharon Carter',
        options: ['Sharon Carter', 'Carole Carter', 'Rosalynn Carter', 'Angela Carter']
    },
    question4: {
        image: '/images/question4.png',
        question: 'Captain America and Bucky\'s arm are made of...',
        answer: 'Vibranium',
        options: ['Titanium', 'Tungsten', 'Vibranium', 'Carbon Steel']
    },
    question5: {
        image: '/images/question5.png',
        question: 'In which movie did Spider-Man make his first appearance in the MCU?',
        answer: 'Captain America: Civil War',
        options: ['Thor: Ragnarok', 'Avengers: End Game', 'Avengers: Age of Ultron', 'Captain America: Civil War']
    },
    question6: {
        image: '/images/question6.png',
        question: 'What species is Groot?',
        answer: 'Flora Colossus',
        options: ['Phyllostachys Aurora', 'Flora Colossus', 'Ficus Lyrata', 'Phoenix Dactylifera']
    },
    question7: {
        image: '/images/question7.png',
        question: 'What color blood do Skrulls have?',
        answer: 'Blue',
        options: ['Blue', 'Red', 'Purple', 'Green']
    },
    question8: {
        image: '/images/question8.png',
        question: "What is Hawkeye’s weapon of choice?",
        answer: 'Bow',
        options: ['Staff', 'Rifle', 'Bow', 'Cross-bow']
    },
    question9: {
        image: '/images/question9.png',
        question: 'From which Infinity Stone did Carol Danvers get her powers?',
        answer: 'Space Stone',
        options: ['Space Stone', 'Soul Stone', 'Power Stone', 'Mind Stone']
    },
    question10: {
        image: '/images/question10.png',
        question: 'What planet is Ronan from?',
        answer: 'Hala',
        options: ['Morag', 'Carthan', 'Xandar', 'Hala']
    }
}
const ironManQuestions = {
    question1: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What is Iron Man\'s real name?',
        answer: 'Tony Stark',
        options: ['Tony Stark', 'Steve Stark', 'Henry Stark', 'Howard Stark']
    },
    question2: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What is the name of Iron Man\'s computer system?',
        answer: 'J.A.R.V.I.S.',
        options: ['Oracle', 'J.A.R.V.I.S.', 'H.E.L.E.N.', 'HAL 9000']
    },
    question3: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Stan Lee based Tony Stark on which of the following real-life playboys?',
        answer: 'Howard Hughes',
        options: ['Howard Hughes', 'Elon Musk', 'Richard Branson', 'Hugh Hefner']
    },
    question4: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What does Tony Stark use to prevent shrapnel from entering his heart?',
        answer: 'A Miniature Arc Reactor',
        options: ['A Miniature Arc Reactor', 'Biotechnology', 'Nanotechnology', 'Wind Power technology']
    },
    question5: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Which college did Tony Stark go to?',
        answer: 'MIT',
        options: ['Harvard', 'Stanford', 'MIT', 'Yale']
    },
    question6: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What was Tony Starks adress in Iron Man 3?',
        answer: '10880 Malibu Point',
        options: ['2814 Guardian Blvd', '2000 Beverly Hills Drive', '82 Yancy Street', '10880 Malibu Point']
    },
    question7: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What was the name of Tony Starks father?',
        answer: 'Howard',
        options: ['Harry', 'Henry', 'Howard', 'Harold']
    },
    question8: {
        image: 'https://via.placeholder.com/400x500',
        question: "What is the name of Tony Starks Mother?",
        answer: 'Maria',
        options: ['Miriam', 'Maria', 'Mary', 'Millie']
    },
    question9: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Which chemical element was poisoning Tony Stark\'s blood in Iron Man 2?',
        answer: 'Palladium',
        options: ['Beryllium', 'Palladium', 'Uranium', 'Lithium']
    },
    question10: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What is the name of Tony Starks love interest?',
        answer: 'Pepper Potts',
        options: ['Jenny James', 'Ivy Pepper', 'Pepper Potts', 'Jane Foster']
    }
}
const thorQuestions = {
    question1: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Thor\'s Hammer is called?',
        answer: 'Mjolnir',
        options: ['Stormbreaker', 'Dainsleif', 'Mjolnir', 'Gleipnir']
    },
    question2: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Who is Thors Father?',
        answer: 'Odin',
        options: ['Loki', 'Odin', 'Thanos', 'Frigg']
    },
    question3: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Where does Thor live?',
        answer: 'Asgard',
        options: ['Yggdrasil', 'Asgard', 'Ragnarok', 'New York']
    },
    question4: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What is the name of Thor\'s Axe?',
        answer: 'Stormbreaker',
        options: ['Hatstamper', 'Mjolnir', 'Stormbreaker', 'Windcrusher']
    },
    question5: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Who is Thor\'s brother?',
        answer: 'Loki',
        options: ['Loki', 'Steve', 'Odin', 'Norse']
    },
    question6: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Who is Thor\'s sister?',
        answer: 'Hela',
        options: ['Hammy', 'Hena', 'Hela', 'Frigga']
    },
    question7: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Thor was once banished from Asgard for attempting to kill Whom?',
        answer: 'Frost Giants',
        options: ['Asgardians', 'Hela', 'Aliens', 'Frost Giants']
    },
    question8: {
        image: 'https://via.placeholder.com/400x500',
        question: "What term is used to describe the alignment of the Nine Realms?",
        answer: 'The Convergence',
        options: ['The Eclipse', 'The Supreme Alignment', 'The Convergence', 'The Emergent']
    },
    question9: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Which member of the Avengers has Thor fought?',
        answer: 'Hulk',
        options: ['Ant Man', 'Black Widow', 'Hulk', 'Captain America']
    },
    question10: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Who helped Thor locate his missing father?',
        answer: 'Dr. Strange',
        options: ['Dr. Banner', 'The Supreme One', 'Neo', 'Dr. Strange']
    }
}

// Home/Landing Page
function homePage(){
    // clear page display div
    clearPage()

    // Create, Define, Place Landing Page container
    landingPageContainer = document.createElement('div')
    landingPageContainer.setAttribute('id', 'landing-page-container')
    pageDisplay.appendChild(landingPageContainer)

    // Create, Define, Place Landing page Div
    landingPageDiv1 = document.createElement('div')
    landingPageDiv1.setAttribute('id', 'home-div-1')
    landingPageDiv1.setAttribute('class', 'landing-div')
    landingPageContainer.appendChild(landingPageDiv1)

        // Place div that will host a background image of Avengers
        landingPageDivChild = document.createElement('div')
        landingPageDivChild.setAttribute('id', 'landing-image')
        landingPageDiv1.appendChild(landingPageDivChild)

    // Create, Define, Place section 2 div
    // landingPageDiv2 = document.createElement('div')
    // landingPageDiv2.setAttribute('id', 'landing-page-div-2')
    // pageDisplay.appendChild(landingPageDiv2)

        // MAKE 2 SECTIONS SET TO FLEX
        // div 1


        // div 2



    // Create, Define, Place section 3 div
    // landingPageDiv3 = document.createElement('div')
    // landingPageDiv3.setAttribute('id', 'landing-page-div-3')
    // pageDisplay.appendChild(landingPageDiv3)
}
// Games Page!
function gamesPage(){


    // Game page game card container
    gamesCardsContainer = document.createElement('div')
    gamesCardsContainer.setAttribute('id', 'game-card-container')
    pageDisplay.appendChild(gamesCardsContainer)

    // CARD 1
    game1Card = document.createElement('div')
    game1Card.setAttribute('id', 'trivia-card-1')
    game1Card.setAttribute('class', 'game-card')
    gamesCardsContainer.appendChild(game1Card)

        // Card 1 children
        // Trivia card content
        game1CardContent = document.createElement('div')
        game1CardContent.setAttribute('class', 'card-content')
        game1Card.appendChild(game1CardContent)

        // Trivia card title
        game1CardTitle = document.createElement('h2')
        game1CardTitle.setAttribute('class', 'game-card-title')
        game1CardTitle.innerHTML = "Iron Man Trivia"
        game1CardContent.appendChild(game1CardTitle)

        // Trivia card <p> text
        game1CardText = document.createElement('p')
        game1CardText.setAttribute('class', 'game-card-text')
        game1CardText.innerHTML = 
            "Test your knowledge of Iron man by playing this trivia game based on the MCU movies."
        game1CardContent.appendChild(game1CardText)

        // Trivia card link/button
        game1CardLink = document.createElement('a')
        game1CardLink.setAttribute('class', 'card-button')
        game1CardLink.innerHTML = "PLAY"
        game1CardContent.appendChild(game1CardLink)
        game1CardLink.addEventListener('click', function(){
            clearPage()
            triviaGame = 1;
            triviaQuestionNumber = 0
            triviaScore = 0
            triviaPage()
        })

    // CARD 2
    game2Card = document.createElement('div')
    game2Card.setAttribute('id', 'trivia-card')
    game2Card.setAttribute('class', 'game-card')
    gamesCardsContainer.appendChild(game2Card)

    // Card 2 children
        // Trivia card content
        game2CardContent = document.createElement('div')
        game2CardContent.setAttribute('class', 'card-content')
        game2Card.appendChild(game2CardContent)

        // Trivia card title
        game2CardTitle = document.createElement('h2')
        game2CardTitle.setAttribute('class', 'game-card-title')
        game2CardTitle.innerHTML = "Marvel Trivia"
        game2CardContent.appendChild(game2CardTitle)

        // Trivia card <p> text
        game2CardText = document.createElement('p')
        game2CardText.setAttribute('class', 'game-card-text')
        game2CardText.innerHTML = 
            "Test your knowledge of the Marvel Universe by playing this trivia game based on the MCU movies."
        game2CardContent.appendChild(game2CardText)

        // Trivia card link/button
        game2CardLink = document.createElement('a')
        game2CardLink.setAttribute('class', 'card-button')
        game2CardLink.innerHTML = "PLAY"
        game2CardContent.appendChild(game2CardLink)
        game2CardLink.addEventListener('click', function(){
            clearPage()
            triviaGame = 2;
            triviaQuestionNumber = 0
            triviaScore = 0
            triviaPage()
        })

    // CARD 3
    game3Card = document.createElement('div')
    game3Card.setAttribute('id', 'trivia-card-3')
    game3Card.setAttribute('class', 'game-card')
    gamesCardsContainer.appendChild(game3Card)

        // Card 3 children
        // Trivia card content
        game3CardContent = document.createElement('div')
        game3CardContent.setAttribute('class', 'card-content')
        game3Card.appendChild(game3CardContent)

        // Trivia card title
        game3CardTitle = document.createElement('h2')
        game3CardTitle.setAttribute('class', 'game-card-title')
        game3CardTitle.innerHTML = "Thor Trivia"
        game3CardContent.appendChild(game3CardTitle)

        // Trivia card <p> text
        game3CardText = document.createElement('p')
        game3CardText.setAttribute('class', 'game-card-text')
        game3CardText.innerHTML = 
            "Test your knowledge of Thor by playing this trivia game based on the MCU movies."
        game3CardContent.appendChild(game3CardText)

        // Trivia card link/button
        game3CardLink = document.createElement('a')
        game3CardLink.setAttribute('class', 'card-button')
        game3CardLink.innerHTML = "PLAY"
        game3CardContent.appendChild(game3CardLink)
        game3CardLink.addEventListener('click', function(){
            clearPage()
            triviaGame = 3;
            triviaQuestionNumber = 0
            triviaScore = 0
            triviaPage()
        })

}
// Trivia game page!
function triviaPage(){
        // Set the title of the page
        title.innerHTML = "Marvel Trivia"

        if(triviaQuestionNumber == 0){
        // Create, Define & place Triva question number
        tQuestionNumber = document.createElement('div')
        tQuestionNumber.setAttribute('id', 'question-number')
        pageDisplay.appendChild(tQuestionNumber)

        // Create, Define & Place Trivia Image container
        imageContainer = document.createElement('div')
        imageContainer.setAttribute('id', 'image-container')
        pageDisplay.appendChild(imageContainer)

            // Create, Define & Place Image inside container ^
            triviaImage = document.createElement('img')
            triviaImage.setAttribute('id', 'image')
            triviaImage.setAttribute('alt', 'image')
            imageContainer.appendChild(triviaImage)

        // Create, Define & Place trivia question div
        triviaQuestion = document.createElement('div')
        triviaQuestion.setAttribute('id', 'the-question')
        pageDisplay.appendChild(triviaQuestion)

        // Create, Define & Place top button container
        tButtonContainerTop = document.createElement('div')
        tButtonContainerTop.setAttribute('id', 'buttons-container-top')
        pageDisplay.appendChild(tButtonContainerTop)

        // Create, Define & Place bottom button container
        tButtonContainerBottom = document.createElement('div')
        tButtonContainerBottom.setAttribute('id', 'buttons-container-bottom')
        pageDisplay.appendChild(tButtonContainerBottom)
        
        // Create, Define & Place modal container
        triviaModalContainer = document.createElement('div')
        triviaModalContainer.setAttribute('id', 'trivia-modal-container')
        pageDisplay.appendChild(triviaModalContainer)

        // Create, Define & Place modal inside of modal container
        triviaModal = document.createElement('div')
        triviaModal.setAttribute('id', 'trivia-modal')
        triviaModalContainer.appendChild(triviaModal)
        
            // Modal will need a top in bottom
            // Create, Define & Place top modal section
            triviaModalTop = document.createElement('div')
            triviaModalTop.setAttribute('id', 'trivia-modal-top')
            triviaModal.appendChild(triviaModalTop)

            // Create, Define & Place bottom modal section
            triviaModalBottom = document.createElement('div')
            triviaModalBottom.setAttribute('id', 'trivia-modal-bottom')
            triviaModal.appendChild(triviaModalBottom)

            // Create, Define & Place Bottom modal text Div
            triviaModalBottomText = document.createElement('div')
            triviaModalBottomText.setAttribute('id', 'bottom-modal-text')
            triviaModalBottom.appendChild(triviaModalBottomText)

            // Create, Define & Place bottom modal button (home)
            triviaModalButton1 = document.createElement('button')
            triviaModalButton1.setAttribute('class', 'modal-button')
            triviaModalButton1.setAttribute('id', 'modal-button-1')
            triviaModalBottom.appendChild(triviaModalButton1)

            // Create, Define & Place bottom modal button (try again)
            triviaModalButton2 = document.createElement('button')
            triviaModalButton2.setAttribute('class', 'modal-button')
            triviaModalButton2.setAttribute('id', 'modal-button-2')
            triviaModalBottom.appendChild(triviaModalButton2)
    }
    // Do this if all 10 questions have been shown
    if(triviaQuestionNumber >= 10){
        // Create Modal for Score and option to play again
        triviaModalTop.innerHTML = "Thanks for playing!"
        triviaModalBottomText.innerHTML = `You got ${triviaScore}/10 right`
        triviaModalButton1.textContent = "Home"
        triviaModalButton2.textContent = "Try again"
        triviaModalContainer.style.display = 'flex'

        // EventListener for Home
        triviaModalButton1.addEventListener('click', homePage)

        // EventListener for Try again
        triviaModalButton2.addEventListener('click', function (){
            clearPage()
            triviaQuestionNumber = 0
            triviaPage()
        })
        // Once the game is complete and score is displayed, reset score back to 0
        triviaScore = 0

    } else {
        if(triviaGame == 1){
            triviaQuestionNumber += 1
            tQuestionNumber.innerHTML = `QUESTION: ${triviaQuestionNumber}`
            triviaQuestion.innerHTML = ironManQuestions[`question${triviaQuestionNumber}`].question
            triviaImage.setAttribute('src', ironManQuestions[`question${triviaQuestionNumber}`].image)

            // ensure there are no buttons already existing.
            tButtonContainerTop.innerHTML = ''
            tButtonContainerBottom.innerHTML = ''

            // Counts how many buttons are made
            let buttonCount = 0

            // add buttons for question options w/ EventListener
            ironManQuestions[`question${triviaQuestionNumber}`].options.map(option => {
                // button creation
                let button = document.createElement('button')
                button.setAttribute('class', 'button')
                button.setAttribute('id', 'trivia-option-buttons')

                // This if statement puts two buttons into a seperate div for styling
                // applies button content and click event, places on screen.
                if(buttonCount >= 2){
                    button.innerText = option
                    button.addEventListener('click', ironManButtonChoice)
                    tButtonContainerBottom.appendChild(button)
                } else {
                    button.innerText = option
                    button.addEventListener('click', ironManButtonChoice)
                    tButtonContainerTop.appendChild(button)
                    buttonCount += 1
                }
                
                
            })
        }
        if(triviaGame == 2){
            triviaQuestionNumber += 1
            tQuestionNumber.innerHTML = `QUESTION: ${triviaQuestionNumber}`
            triviaQuestion.innerHTML = marvelQuestions[`question${triviaQuestionNumber}`].question
            triviaImage.setAttribute('src', marvelQuestions[`question${triviaQuestionNumber}`].image)

            // ensure there are no buttons already existing.
            tButtonContainerTop.innerHTML = ''
            tButtonContainerBottom.innerHTML = ''

            // Counts how many buttons are made
            let buttonCount = 0

            // add buttons for question options w/ EventListener
            marvelQuestions[`question${triviaQuestionNumber}`].options.map(option => {
                // button creation
                let button = document.createElement('button')
                button.setAttribute('class', 'button')
                button.setAttribute('id', 'trivia-option-buttons')

                // This if statement puts two buttons into a seperate div for styling
                // applies button content and click event, places on screen.
                if(buttonCount >= 2){
                    button.innerText = option
                    button.addEventListener('click', marvelButtonChoice)
                    tButtonContainerBottom.appendChild(button)
                } else {
                    button.innerText = option
                    button.addEventListener('click', marvelButtonChoice)
                    tButtonContainerTop.appendChild(button)
                    buttonCount += 1
                }
                
                
            })
        }   
        if(triviaGame == 3){
            triviaQuestionNumber += 1
            tQuestionNumber.innerHTML = `QUESTION: ${triviaQuestionNumber}`
            triviaQuestion.innerHTML = thorQuestions[`question${triviaQuestionNumber}`].question
            triviaImage.setAttribute('src', thorQuestions[`question${triviaQuestionNumber}`].image)

            // ensure there are no buttons already existing.
            tButtonContainerTop.innerHTML = ''
            tButtonContainerBottom.innerHTML = ''

            // Counts how many buttons are made
            let buttonCount = 0

            // add buttons for question options w/ EventListener
            thorQuestions[`question${triviaQuestionNumber}`].options.map(option => {
                // button creation
                let button = document.createElement('button')
                button.setAttribute('class', 'button')
                button.setAttribute('id', 'trivia-option-buttons')

                // This if statement puts two buttons into a seperate div for styling
                // applies button content and click event, places on screen.
                if(buttonCount >= 2){
                    button.innerText = option
                    button.addEventListener('click', thorButtonChoice)
                    tButtonContainerBottom.appendChild(button)
                } else {
                    button.innerText = option
                    button.addEventListener('click', thorButtonChoice)
                    tButtonContainerTop.appendChild(button)
                    buttonCount += 1
                }
                
                
            })
        }
        
    }
    
}
// event handler for trivia button clicks
function marvelButtonChoice(e){
    if(e.target.innerHTML == marvelQuestions[`question${triviaQuestionNumber}`].answer){
        triviaScore += 1
        triviaPage()
    } else {
        triviaPage()
    }
}
function ironManButtonChoice(e){
    if(e.target.innerHTML == ironManQuestions[`question${triviaQuestionNumber}`].answer){
        triviaScore += 1
        triviaPage()
    } else {
        triviaPage()
    }
}
function thorButtonChoice(e){
    if(e.target.innerHTML == thorQuestions[`question${triviaQuestionNumber}`].answer){
        triviaScore += 1
        triviaPage()
    } else {
        triviaPage()
    }
}

// Created this function to clear main div and leave room for other functions to populate empty div.
function clearPage(){
    pageDisplay.innerHTML = ''
}
// ---NAV BAR EVENT LISTENERS---
// runs clearPage() then gamesPage()
gamesNavButton.addEventListener('click', function(){
    clearPage()
    gamesPage()
})
mobileGamesNavButton.addEventListener('click', function(){
    clearPage()
    gamesPage()
})
// open Home page
homePageButton.addEventListener('click', homePage)
mobileHomePageButton.addEventListener('click', homePage)
// opens modal when About link is clicked
aboutButton.addEventListener('click', function(){
    aboutModalDiv.classList.add('active')
})
mobileAboutModalDiv.addEventListener('click', function(){
    aboutModalDiv.classList.add('active')
})
// closes modal if clicked
pageDisplay.addEventListener('click', function(){
    aboutModalDiv.classList.remove('active')
})
homePage()