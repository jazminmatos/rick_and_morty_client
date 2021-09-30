export const fetchCharacters = (characterUrls) => {
    return dispatch => {
        dispatch({ type: 'LOADING_CHARACTERS' })
        fetch(characterUrls)
        .then(resp => resp.json())
        .then(characters => dispatch({ type: 'FETCHING_CHARACTERS', payload: characters }))
    }
}