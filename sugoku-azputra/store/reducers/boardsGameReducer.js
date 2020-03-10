const initialState = {
    boardsGame: []
}

const boardsGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BOARDS_GAME":
            return { ...state, boardsGame: action.payload }
        default:
            return state
    }
}

export default boardsGameReducer