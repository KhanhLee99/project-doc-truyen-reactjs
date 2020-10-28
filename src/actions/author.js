import callApi from './../utils/apiCaller';

export const actFetchAuthorsRequest = () => {
    return dispatch => {
        return callApi('authors', 'GET', null).then(res => {
            dispatch(actFetchAuthors(res.data));
        });
    };
}

export const actFetchAuthors = (authors) => {
    return {
        type : 'FETCH_AUTHORS',
        authors
    }
}

export const actAddAuthor = (author) => {
    return {
        type : 'ADD_AUTHOR',
        author
    }
}

export const actAddAuthorRequest = (author) => {
    return dispatch => {
        return callApi('author/add', 'POST', author).then(res => {
            dispatch(actAddAuthor(res.data));
        });
    };
}

export const actDeleteAuthor = (id) => {
    return {
        type : 'DELETE_AUTHOR',
        id
    }
}

export const actDeleteAuthorRequest = (id) => {
    return dispatch => {
        return callApi(`author/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteAuthor(id));
        });
    };
}

export const actSearchAuthor = (authorsSearch) => {
    return {
        type : 'SEARCH_AUTHOR',
        authorsSearch
    }
}

export const actSearchAuthorRequest = (name) => {
    return dispatch => {
        return callApi(`author/search/${name}`, 'GET', null).then(res => {
            dispatch(actSearchAuthor(res.data));
        });
    };
}

export const actGetAuthor = (author) => {
    return {
        type : 'GET_AUTHOR',
        author
    }
}

export const actGetAuthorRequest = (id) => {
    return dispatch => {
        return callApi(`author/${id}`, 'GET', null).then(res => {
            dispatch(actGetAuthor(res.data));
        });
    };
}

export const actEditAuthor = (author) => {
    return {
        type : 'EDIT_AUTHOR',
        author
    }
}

export const actEditAuthorRequest = (author) => {
    return dispatch => {
        return callApi(`author/${author.id}`, 'PUT', author).then(res => {
            dispatch(actEditAuthor(author));
        });
    };
}