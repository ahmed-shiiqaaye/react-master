// import React, { useState, useContext} from 'react'
// import {Questions } from '../Helpers/QuestionBank'
// import { QuizContext } from '../Helpers/Context'


// function Quiz() {
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [optionChosen, setOptionChosen] = useState('')

//   const {score, setScore, setGameState} = useContext(QuizContext)


//   const nextQuestion = () => {
//     if(Questions[currentQuestion].answer == optionChosen){
//       setScore(score + 1)
//     }
//     setCurrentQuestion(currentQuestion + 1)
//   }
//   const finishQuiz = () => {
//     if(Questions[currentQuestion].answer == optionChosen){
//       setScore(score + 1)
//     }
//     setGameState('endScreen')
//   }
//   return (
//     <div className='quiz'>
//       <div className="flex">
//       <h3>Question:{currentQuestion + 1}</h3>
//       <p>Score:{score}</p>
//       </div>
//       <h1>{Questions[currentQuestion].prompt}</h1>
//       <div className="options">
//         <button onClick={()=> setOptionChosen('a')}>{Questions[currentQuestion].a}</button>
//         <button onClick={()=> setOptionChosen('b')}>{Questions[currentQuestion].b}</button>
//         <button onClick={()=> setOptionChosen('c')}>{Questions[currentQuestion].c}</button>
//         <button onClick={()=> setOptionChosen('d')}>{Questions[currentQuestion].d}</button>
//       </div>
//       {currentQuestion == Questions.length - 1 ? (
//         <button onClick={finishQuiz}>Finish Quiz</button>
//         ) : (
//         <button className="next" onClick={nextQuestion}>Next</button>
//       )}
      
//     </div>
//   )
// }

// export default Quiz

// import React, { useContext } from 'react'
// import { QuizContext} from '../Helpers/Context';
// import { Questions } from '../Helpers/QuestionBank';

// function EndScreen() {
//   const {score, setScore, setGameState} = useContext(QuizContext)
//   function restart() {
//     setGameState('menu')
//     setScore(0)
//   }
//   return (
//     <div className='EndScreen'>
//       <h2>Finished Quiz</h2>
//       <h3>{score / Questions.length * 100}% </h3>
//       <button onClick={restart}>Restart Quiz</button>
//     </div>
//   )
// }

// export default EndScreen
// import React, {useContext} from 'react'
// import { QuizContext } from '../Helpers/Context'
// import '../App.css'

// function MainMenu() {
//     const {gameState, setGameState} = useContext(QuizContext)
//     const handleButton =(e) => {
//         e.preventDefault()
//         setGameState('endScreen')
//     }
//   return (
//     <div  className='MainMenu'>
//         <button 
//         onClick={(e)=>setGameState('quiz')}
//         >Start Quiz</button>
//     </div>
//   )
// }

// export default MainMenu