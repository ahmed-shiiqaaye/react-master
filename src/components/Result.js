import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/QuestionBank'

function Result() {
    const {game, setGame, score, setScore} = useContext(QuizContext)

  return (
    <div className='result'>
        <p>You have {score} Pionts </p>
        <p><i>You are {score / Questions.length * 100}% good</i></p>
        <p><i>Congraulations</i></p>
        <button
        onClick={()=> setGame('Home')}
        >Retry</button>
    </div>
  )
}

export default Result