const initialState = [ ]

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_USERS':
            return [ ...state, action.username ]
        default:
            return state
    }
}