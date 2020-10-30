import callApi from './../utils/apiCaller';

export const actAddChapterRequest = (chapter) => {
    return dispatch => {
        return callApi('chapter/add', 'POST', chapter).then(res => {
            // dispatch(actFetchUsers(res.data));
            dispatch(actGetNewChapter(res.data));

        });
    };
}

export const actAddChapter = (chapter) => {
    return {
        type : 'ADD_CHAPTER',
        chapter
    }
}

export const actAddChapterImageRequest = (image) => {
    return dispatch => {
        return callApi('chapter/addImage', 'POST', image).then(res => {
            // dispatch(actFetchUsers(res.data));
        });
    };
}

export const actGetNewChapter = (chapter) => {
    return {
        type : 'GET_NEW_CHAPTER',
        chapter
    }
}

