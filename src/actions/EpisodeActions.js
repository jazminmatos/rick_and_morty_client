export const fetchEpisodes = (parameters) => {    
    return dispatch => {
        dispatch({ type: 'LOADING_EPISODES' })
        fetch('https://rickandmortyapi.com/api/episode/' + parameters)
        .then(resp => resp.json())
        .then(episodes => dispatch({ type: 'FETCH_EPISODES', payload: episodes}))
    }
}

// figure out how to 
export const addFavorite = (selectEpisode) => {
    const configObj = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(selectEpisode)
    }
    
    return dispatch => {
        dispatch({ type: 'LOADING_EPISODES' })
        fetch('http://localhost:3000/favorite_episodes', configObj)
        .then(resp => resp.json())
        .then(episode => dispatch({ type: 'ADD_FAVORITE', payload: episode}))
    }
} 

export const removeFavorite = (selectEpisode) => {
    const configObj = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(selectEpisode)
    }
    
    return dispatch => {
        dispatch({ type: 'LOADING_EPISODES' })
        fetch('http://localhost:3000/favorite_episodes/' + selectEpisode.id, configObj)
        .then(resp => dispatch({ type: 'REMOVE_FAVORITE', payload: selectEpisode}))
    }
}