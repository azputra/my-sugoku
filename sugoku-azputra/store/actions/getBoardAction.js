import axios from 'axios'
import validate from './validateBoardAction'

const get_board = (level) => {
    return function (dispatch) {
        // dispatch({ type: 'LOADING', payload: true })
        axios.get(`https://sugoku.herokuapp.com/board?difficulty=${level}`)
            .then(({ data }) => {
                dispatch({ type: 'BOARDS_GAME', payload: data })
                dispatch({ type: 'BOARDS_SOLVED', payload: data })
                dispatch(validate(data))
                // dispatch({ type: 'LOADING', payload: false })
            })
    }
}

export default get_board