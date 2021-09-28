export const fetchEpisodes = (parameters) => {    
    return dispatch => {
        dispatch({ type: 'LOADING_EPISODES' })
        fetch('https://rickandmortyapi.com/api/episode/' + parameters)
        .then(resp => resp.json())
        .then(episodes => dispatch({ type: 'FETCH_EPISODES', payload: episodes}))
    }
}