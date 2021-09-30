export const fetchAllCharacters = (characterIds) => {
    return dispatch => {
        dispatch({ type: 'LOADING_CHARACTERS' })
        fetch('https://rickandmortyapi.com/api/character/' + characterIds)
        .then(resp => resp.json())
        .then(characters => dispatch({ type: 'FETCHING_CHARACTERS', payload: characters }))
    }
}

/* 
    Character Data set up:
    [0-99]
    [100-199]
    [200-299]
    [300-399]
    [400-499]
    [500-599]
    [600-671]
*/