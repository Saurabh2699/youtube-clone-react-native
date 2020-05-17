const initialState = []


export const reducer = (state = initialState, action) => {
    if (action.type == 'FETCH_DATA') {
        return action.payload
    }
    return state
}