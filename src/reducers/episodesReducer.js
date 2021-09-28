export const episodesReducer = (state = {episodes: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_EPISODES':
            debugger
            return {
                ...state,
                episodes: [...state.episodes],
                loading: true
            }
        case 'FETCH_EPISODES':
            return {
                ...state, 
                episodes: action.payload,
                loading: false
            }
        default: 
            return state
    }
}