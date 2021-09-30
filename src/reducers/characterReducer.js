export const characterReducer = (state = {characters: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_CHARACTERS':
            return {
                ...state,
                characters: [...state.characters],
                loading: true
            }
        case 'FETCH_CHARACTERS':
            return {
                ...state,
                characters: [], 
                loading: false
            }
        default:
            return state
    }
}