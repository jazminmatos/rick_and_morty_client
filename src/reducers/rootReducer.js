import { combineReducers } from 'redux';

import { episodesReducer } from './episodesReducer'
import { characterReducer } from './characterReducer';

export const rootReducer = combineReducers({
    episodes: episodesReducer,
    characters: characterReducer
})

export default rootReducer