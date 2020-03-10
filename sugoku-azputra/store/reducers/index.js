import { combineReducers } from 'redux'

import userReducer from './userReducer'
import boardGameReducer from './boardsGameReducer'
import boardSolvedReducer from './boardsSolvedReducer'
import statusGameReducer from './statusGameReducer'

export default combineReducers({
    userReducer,
    boardGameReducer,
    boardSolvedReducer,
    statusGameReducer,
})