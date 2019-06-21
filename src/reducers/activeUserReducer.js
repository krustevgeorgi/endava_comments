const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'SET_ACTIVE_USER':
            return {
                username: action.username
            }
        default:
            return state
    }
}