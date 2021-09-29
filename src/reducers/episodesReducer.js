export const episodesReducer = (state = {episodes: [], loading: false, favorites: []}, action) => {
    switch(action.type) {
        case 'LOADING_EPISODES':
            return {
                ...state,
                episodes: [...state.episodes],
                loading: true,
                favorites: [...state.favorites]
            }
        case 'FETCH_EPISODES':
            return {
                ...state, 
                episodes: action.payload,
                loading: false,
                favorites: [...state.favorites]
            }
        default: 
            return state
    }
}

// should add a favorites