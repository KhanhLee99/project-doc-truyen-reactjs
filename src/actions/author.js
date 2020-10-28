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