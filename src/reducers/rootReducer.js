import { combineReducers } from 'redux';

import { episodesReducer } from './episodesReducer'

export const rootReducer = combineReducers({
    episodes: episodesReducer
})

export default rootReducer