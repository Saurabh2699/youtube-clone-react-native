const initialState = false


export const themeReducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_THEME') {
        return action.payload
    }
    return state
}