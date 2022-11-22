import {useState} from 'react'

export default function Input({puzzle, guessedLetters, setGuessedLetters}) {
    
    const [wrong, setWrong] = useState(0)
    if (wrong > 6) {
            alert('Too many wrong guesses')
            window.location.reload()
    }

    const handleClick = () => {
        const input = document.getElementById('input').value.toLowerCase()
        if (input.length != 1) {
            alert('Invalid input. Submit one character.')
        } else if (guessedLetters.includes(input)) {
            alert('Invalid input. Already-guessed letter.')
        }
        if (!puzzle.includes(input)) {
            setWrong(wrong+1)
        }
        setGuessedLetters([...guessedLetters, input])
    }

    return(
        <>
            <input id='input' maxLength='1'></input>&nbsp;
            <button type="submit" onClick={handleClick}>Submit</button>
        </>
    )
}