export default function UserGuess({submitGuess}) {
    return(
        <>
            <input onKeyDown={submitGuess} id="user-guess" maxLength='1' type='text' />
        </>
    )
}