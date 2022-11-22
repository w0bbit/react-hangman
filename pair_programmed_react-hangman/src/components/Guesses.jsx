export default function Guesses({puzzle, guessedLetters}) {
    return(
        <>
            <h1>Guesses: {guessedLetters.filter(char => !puzzle.includes(char))}</h1>
        </>
    )
}