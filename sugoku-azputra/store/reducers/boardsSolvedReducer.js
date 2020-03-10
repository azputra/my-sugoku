const initialState = {
    boardsSolved: []
}

const boardsSolvedReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOARDS_SOLVED":
            return { ...state, boardsSolved: action.payload }
        default:
            return state
    }
}

export default boardsSolvedReducer