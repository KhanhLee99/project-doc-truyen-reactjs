import callApi from './../utils/apiCaller';

export const actFetchUsersRequest = () => {
    return dispatch => {
        return callApi('users', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data));
        });
    };
}

export const actFetchUsers = (users) => {
    return {
        type : 'FETCH_USERS',
        users
    }
}
export const actSearchhUsersRequest = (name) => {
    return dispatch => {
        return callApi(`user/search/${name}`, 'GET', null).then(res => {
            dispatch(actSearchUsers(res.data));
        });
    };
}

export const actSearchUsers = (users) => {
    return {
        type : 'SEARCH_USERS',
        users
    }
}
export const actDeleteUserRequest = (id) => {
    return dispatch => {
        return callApi(`user/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteUser(id));
        });
    };
}

export const actDeleteUser = (id) => {
    return {
        type : 'DELETE_USER',
        id
    }
}

//edit admin info
export const actEditUserRequest = (user) => {
    return dispatch => {
        return callApi(`user/${user.id}`, 'PUT', user).then(res => {
            // dispatch(actEditUser(user));
        });
    };
}

export const actEditUser = (user) => {
    return {
        type : 'EDIT_USER',
        user
    }
}
//get admin 
export const actGetUserRequest = (id) => {
    return dispatch => {
        return callApi(`user/${id}`, 'GET', null).then(res => {
            dispatch(actGetUser(res.data));
        });
    };
}

export const actGetUser = (user) => {
    return {
        type : 'GET_USER_CURRENT',
        user
    }
}

