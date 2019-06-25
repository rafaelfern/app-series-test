import { USER_LOGIN, USER_LOGOUT } from '../actions/index'

function user(state = null, action) {
    switch(action.type) {
        case USER_LOGIN:
            return action.user;
        case USER_LOGOUT:
            return null;
    default: 
        return state;
    }
}

export default user;