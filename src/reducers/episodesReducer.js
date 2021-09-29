export const episodesReducer = (state = {episodes: [], loading: false, favorites: []}, action) => {
    let idx;
    
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
                favorites: [...state.favorites, action.payload]
            }
        case 'REMOVE_FAVORITE':
            idx = state.favorites.findIndex(fave => fave.id === action.payload.id)
            return {
                ...state,
                episodes: [...state.episodes],
                loading: false,
                favorites: [...state.favorites.slice(0, idx), ...state.favorites.slice(idx+1)] // NEED TO UPDATE THIS
            }
        case 'FETCH_FAVORITES':
            return {
                ...state,
                episodes: [...state.episodes],
                loading: false,
                favorites: action.payload
            }
        default: 
            return state
    }
}