export default function DisplayGuesses({guessedLetters, puzzle}) {
    const displayChars = []
    for (let char of guessedLetters) {
        if (puzzle.includes(char)) {
            displayChars.push(<span className='right' key={char}>{char}</span>)
        } else {
            displayChars.push(<span className='wrong' key={char}>{char}</span>)
        }
    }
    return(
        <>
            <h1>{displayChars}</h1>
        </>
    )
}