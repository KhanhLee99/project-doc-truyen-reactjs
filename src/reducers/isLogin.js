const InitialState = false
const isLogin = (state = InitialState, action) => {
    switch (action.type) {
        case 'IS_LOGIN_TRUE':
            state= true;
            return state
        case 'IS_LOGIN_FALSE':
            state = false;
            return state
        default:
            return state
    }
}

export default isLogin;