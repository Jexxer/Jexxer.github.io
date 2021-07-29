const tQuestionDisplay = document.querySelector('#the-question')
const tQuestionNumber = document.querySelector('#question-number')
const tImage = document.querySelector('#image')
const tButtonContainer = document.querySelector('#buttons-container')
let score = 0
const marvelQuestions = {
    question1: {
        image: 'https://via.placeholder.com/400x500',
        question: 'How many Infinity Stones are there?',
        answer: 'Six',
        options: ['Five', 'Seven', 'Four', 'Six']
    },
    question2: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Where is Captain America from?',
        answer: 'Brooklyn',
        options: ['Manhattan', 'Brooklyn', 'Queens', 'Harlem']
    },
    question3: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Peggy Carter has a great-niece named...',
        answer: 'Sharon Carter',
        options: ['Sharon Carter', 'Carole Carter', 'Rosalynn Carter', 'Angela Carter']
    },
    question4: {
        image: 'https://via.placeholder.com/400x500',
        question: 'Captain America and Bucky\'s arm are made of...',
        answer: 'Vibranium',
        options: ['Titanium', 'Tungsten', 'Vibranium', 'Carbon Steel']
    },
    question5: {
        image: 'https://via.placeholder.com/400x500',
        question: 'In which movie did Spider-Man make his first appearance in the MCU?',
        answer: 'Captain America: Civil War',
        options: ['Thor: Ragnarok', 'Avengers: End Game', 'Avengers: Age of Ultron', 'Captain America: Civil War']
    },
    question6: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What species is Groot?',
        answer: 'Flora Colossus',
        options: ['Phyllostachys Aurora', 'Flora Colossus', 'Ficus Lyrata', 'Phoenix Dactylifera']
    },
    question7: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What color blood do Skrulls have?',
        answer: 'Blue',
        options: ['Blue', 'Red', 'Purple', 'Green']
    },
    question8: {
        image: 'https://via.placeholder.com/400x500',
        question: "What is Hawkeye’s weapon of choice?",
        answer: 'Bow',
        options: ['Staff', 'Rifle', 'Bow', 'Cross-bow']
    },
    question9: {
        image: 'https://via.placeholder.com/400x500',
        question: 'From which Infinity Stone did Carol Danvers get her powers?',
        answer: 'Space Stone',
        options: ['Space Stone', 'Soul Stone', 'Power Stone', 'Mind Stone']
    },
    question10: {
        image: 'https://via.placeholder.com/400x500',
        question: 'What planet is Ronan from?',
        answer: 'Hala',
        options: ['Morag', 'Carthan', 'Xandar', 'Hala']
    }
}








// sets the starting question
let questionNum = 0
// populates screen with current question data
function displayQuestion(){
    if(questionNum >= 10){
        // clear buttons
        tButtonContainer.innerHTML = ''

        // display score
        let scoreDiv = document.createElement('div')
        scoreDiv.setAttribute('id', 'score-display')
        scoreDiv.innerHTML = `You scored ${score}/10`
        tButtonContainer.appendChild(scoreDiv)
        score = 0

    } else {
        questionNum += 1
        tQuestionNumber.innerText = `Question: ${questionNum}`
        tQuestionDisplay.innerText = marvelQuestions[`question${questionNum}`].question
        tImage.setAttribute('src', marvelQuestions[`question${questionNum}`].image )

        // ensure there are no buttons allready existing.
        tButtonContainer.innerHTML = ''

        // add buttons for question options w/ EventListener
        marvelQuestions[`question${questionNum}`].options.map(option => {
            // button creation
            let button = document.createElement('button')
            button.setAttribute('class', 'button')

            // applies button content and click event, places on screen.
            button.innerText = option
            button.addEventListener('click', buttonChoice)
            tButtonContainer.appendChild(button)
        })
        
    }
    
}

// event handler for button clicks
function buttonChoice(e){
    if(e.target.innerHTML == marvelQuestions[`question${questionNum}`].answer){
        console.log("correct answer")
        score += 1
        displayQuestion()
    } else {
        displayQuestion()
    }
}


displayQuestion()
