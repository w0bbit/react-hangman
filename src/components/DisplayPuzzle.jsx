export default function DisplayPuzzle({puzzle, guessedLetters}) {

    const displayLetters = []
    for (let char of puzzle) {
        if (guessedLetters.includes(char)) {
            displayLetters.push(char)
        } else {
            displayLetters.push('_')
        }
    }

    return(
        <>
            <h1>{displayLetters.map(c => ` ${c} `)}</h1>
        </>
    )
}