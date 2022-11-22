print = console.log
import './App.css'
import {useState} from 'react'
import Header from './components/Header'
import PuzzleWord from './components/PuzzleWord'
import Input from './components/Input'
import Guesses from './components/Guesses'
import words from './data/words.json'

export default function App() {

  // states
  const [puzzle] = useState(words[Math.floor(Math.random()*words.length)].toLowerCase())
  const [guessedLetters, setGuessedLetters] = useState([])

  // print(puzzle)
  // print(guessedLetters)

  return (
    <div className="App">

      <Header>React Hangman</Header>
      <PuzzleWord puzzle={puzzle} guessedLetters={guessedLetters} />
      <Input puzzle={puzzle} guessedLetters={guessedLetters} setGuessedLetters={setGuessedLetters} />
      <Guesses puzzle={puzzle} guessedLetters={guessedLetters} />

    </div>
  )
}