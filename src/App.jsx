print = console.log
// import axios from 'axios'
import {useState} from 'react'
import './App.css'
import Header from './components/Header'
import DisplayGuesses from './components/DisplayGuesses'
import UserGuess from './components/UserGuess'
import DisplayPuzzle from './components/DisplayPuzzle'
import words from './data/words.json'

export default function App() {

  //states
  const [puzzle] = useState(words[Math.floor(Math.random()*words.length)])
  const [guessedLetters, setGuessedLetters] = useState([])

  //event function
  const submitGuess = (event) => {
    if (event.key == 'Enter') {
      // event.preventDefault()
      const userGuess = document.getElementById('user-guess').value.toLowerCase()
      if (userGuess === '') {
        alert('Invalid input: Empty string')
        return
      } else if (guessedLetters.includes(userGuess)) {
        alert('Invalid input: You already tried that character')
        return
      }
      const letters = [...guessedLetters, userGuess]
      setGuessedLetters(letters)
      document.getElementById('user-guess').value = ''
    }
  }

  // monitor number of wrong guesses
  if (guessedLetters.filter(char => !puzzle.includes(char)).length > 6) {
    alert(`You lost. The word is ${puzzle} `)
    window.location.reload()
  }

  return (
    <div className="App">
      <Header>React Hangman</Header>
      <DisplayPuzzle puzzle={puzzle} guessedLetters={guessedLetters} />
      <UserGuess submitGuess={submitGuess} puzzle={puzzle} />
      <DisplayGuesses puzzle={puzzle} guessedLetters={guessedLetters} />
    </div>
  )
}
