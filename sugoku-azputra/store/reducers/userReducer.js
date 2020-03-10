const initialState = {
    username: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USERNAME":
            return { ...state, username: action.payload }
        default:
            return state
    }
}

export default userReducer