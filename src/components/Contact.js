import React,{useContext, useState} from 'react'
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/QuestionBank'

const Contact = () => {
    const {game, setGame, score, setScore} = useContext(QuizContext)
    const [current, setCurrent] = useState(0)
    const [option, setOption] = useState('')

    const nextQuestion = (e) => {
        e.preventDefault()
        if(option === Questions[current].answer){
            setScore(score + 1)
        }
        setCurrent(current + 1)
    }
    const finishQuiz = () => {
        if(option === Questions[current].answer){
            setScore(score + 10)
        }
        setGame('result')
    }
  return (
    <div className='Contact'>
        <p>Your Score is:{score}</p>
        <h1>{Questions[current].prompt}</h1>
        <div className="options">
            <button onClick={()=> setOption('a')}>{Questions[current].a}</button>
            <button onClick={()=> setOption('b')}>{Questions[current].b}</button>
            <button onClick={()=> setOption('c')}>{Questions[current].c}</button>
            <button onClick={()=> setOption('d')}>{Questions[current].d}</button>
        </div>
    {current == Questions.length - 1 ? (
        <button onClick={() => finishQuiz()}>Finsih quiz</button>
    ): (
        <button onClick={(e) => nextQuestion(e)}>Next</button>
    )}
    </div>
  )
}

export default Contact