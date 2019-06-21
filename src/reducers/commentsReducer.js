const initialState = []

export default function (state = initialState, action) {
    let newState
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                {
                    id: action.id,
                    owner: action.owner,
                    value: action.value
                },
                ...state
            ]
        case 'EDIT_COMMENT':
            newState = [...state]
            newState = newState.map(comment => comment.id === action.id
                ? { ...comment, value: action.value }
                : comment
            )

            return newState
        case 'DELETE_COMMENT':
            newState = [...state]
            newState = newState.filter(item => item.id !== action.id)

            return newState
        default:
            return state
    }
}