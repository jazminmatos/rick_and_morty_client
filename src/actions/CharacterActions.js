export const fetchAllCharacters = (characterIds) => {
    return dispatch => {
        dispatch({ type: 'LOADING_CHARACTERS' })
        fetch('https://rickandmortyapi.com/api/character/' + characterIds)
        .then(resp => resp.json())
        .then(characters => dispatch({ type: 'FETCH_CHARACTERS', payload: characters }))
    }
}