import { combineReducers} from 'redux' 
import commentsReducer from './commentsReducer'
import usersReducer from './usersReducer'
import activeUserReducer from './activeUserReducer'

const allReducers = combineReducers({
    comments: commentsReducer,
    users: usersReducer,
    activeUser: activeUserReducer
})

export default allReducers