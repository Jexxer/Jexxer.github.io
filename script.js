const pageDisplay = document.querySelector('#page-display')
const triviaNavButton = document.querySelector('#trivia-nav-button')

// Declaring variables for trivia page to be used 
let triviaQuestionNumber = 0
let triviaScore = 0
let tQuestionNumber;
let imageContainer;
let triviaImage;
let triviaQuestion;
let tButtonContainerTop;
let tButtonContainerBottom;

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

// populates screen with current question data
function triviaPage(){


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
    }

    if(triviaQuestionNumber >= 10){

        // clear buttons
        tButtonContainerTop.innerHTML = ''
        tButtonContainerBottom.innerHTML = ''

        // display triviaScore
        let scoreDiv = document.createElement('div')
        scoreDiv.setAttribute('id', 'triviaScore-display')
        scoreDiv.innerHTML = `You scored ${triviaScore}/10`
        tButtonContainerTop.appendChild(scoreDiv)
        triviaScore = 0

    } else {
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

            // This if statement puts two buttons into a seperate div for styling
            // applies button content and click event, places on screen.
            if(buttonCount >= 2){
                button.innerText = option
                button.addEventListener('click', buttonChoice)
                tButtonContainerBottom.appendChild(button)
            } else {
                button.innerText = option
                button.addEventListener('click', buttonChoice)
                tButtonContainerTop.appendChild(button)
                buttonCount += 1
            }
            
            
        })
        
    }
    
}
// event handler for trivia button clicks
function buttonChoice(e){
    if(e.target.innerHTML == marvelQuestions[`question${triviaQuestionNumber}`].answer){
        triviaScore += 1
        triviaPage()
    } else {
        triviaPage()
    }
}
// created this function to clear main div and leave room for other functions to populate empty div.
function clearPage(){
    pageDisplay.innerHTML = ''
}

triviaNavButton.addEventListener('click', triviaPage)