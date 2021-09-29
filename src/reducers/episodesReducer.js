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
        case 'ADD_FAVORITE':
            return {
                ...state,
                episodes: [...state.episodes],
                loading: false,
                favorites: [] // NEED TO UPDATE THIS
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                episodes: [...state.episodes],
                loading: false,
                favorites: [] // NEED TO UPDATE THIS
            }
        default: 
            return state
    }
}