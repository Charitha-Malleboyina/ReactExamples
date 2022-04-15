export const increase = (value) => dispatch => {
    dispatch({
        type:"INCREMENT",
        payload:value
    })
}

export const decrease = () => dispatch => {
    dispatch({
        type:"DECREMENT"
    })
}