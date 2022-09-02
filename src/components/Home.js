import React, { useContext} from 'react'
import { QuizContext } from '../Helpers/Context'

const Home = () => {
    const {game, setGame } = useContext(QuizContext)
  return (
    <div>
        <button onClick={() => setGame('Contact')}>Click to start</button>
    </div>
  )
}

export default Home