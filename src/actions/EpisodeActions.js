export const fetchEpisodes = (parameters) => {    
    return dispatch => {
        dispatch({ type: 'LOADING_EPISODES' })
        fetch('https://rickandmortyapi.com/api/episode/' + parameters)
        .then(resp => resp.json())
        .then(episodes => dispatch({ type: 'FETCH_EPISODES', payload: episodes}))
    }
}

export const addFavorite = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_EPISODES' })
        fetch('http://localhost:3000/favorite_episodes')
        .then(resp => resp.json())
        .then()
    }
} 

export const removeFavorite = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_EPISODES' })
        fetch('http://localhost:3000/favorite_episodes')
        .then(resp => resp.json())
        .then()
    }
}