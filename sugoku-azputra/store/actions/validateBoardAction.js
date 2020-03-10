const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

const encodeParams = (params) =>
    Object.keys(params)
        .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
        .join('&');

const validate_board = (data) => {
    return function (dispatch) {
        // dispatch({ type: 'LOADING', payload: true })
        fetch('https://sugoku.herokuapp.com/validate', {
            method: 'POST',
            body: encodeParams(data),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then(response => response.json())
            .then((response) => {
                dispatch({ type: 'STATUS', payload: response.status })
                // dispatch({ type: 'LOADING', payload: false })
            })
            .catch(console.warn)
    }
}

export default validate_board