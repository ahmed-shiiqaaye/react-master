import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
//-----------
import Home from './components/Home'
import Contact from './components/Contact'
import Result from './components/Result'

import { QuizContext} from './Helpers/Context'

function App() {
  const [game, setGame] = useState('Home')
  const [score, setScore] = useState(0)

  return (
    <div className="container">
      <h3>Tijaabi aqoontada ee jawaab</h3>
     
      <QuizContext.Provider value={{game, setGame, score, setScore }}>
        {game === 'Home' && <Home />}
        {game === 'Contact' && <Contact />}
        {game === 'result' && <Result />}
      </QuizContext.Provider>
    </div>
  
  );
}

export default App;
