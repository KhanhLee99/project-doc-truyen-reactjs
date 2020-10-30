import callApi from './../utils/apiCaller';


// get list story
export const actFetchStoriesRequest = () => {
    return dispatch => {
        return callApi('stories', 'GET', null).then(res => {
            dispatch(actFetchStories(res.data));
        });
    };
}

export const actFetchStories = (stories) => {
    return {
        type : 'FETCH_STORIES',
        stories
    }
}

// search story
export const actSearchStoriesRequest = (name) => {
    return dispatch => {
        return callApi(`story/search/${name}`, 'GET', null).then(res => {
            dispatch(actSearchStories(res.data));
        });
    };
}

export const actSearchStories = (stories) => {
    return {
        type : 'SEARCH_STORIES',
        stories
    }
}

// delete story
export const actDeleteStoryRequest = (id) => {
    return dispatch => {
        return callApi(`story/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteStory(id));
        });
    };
}

export const actDeleteStory = (id) => {
    return {
        type : 'DELETE_STORY',
        id
    }
}
// add story
export const actAddStoryRequest = (story) => {
    return dispatch => {
        return callApi('story/add', 'POST', story).then(res => {
            // alert('Đã thêm thành công');
        });
    };
}

// export const actAddStory = (story) => {
//     return {
//         type : 'ADD_STORY',
//         story
//     }
// }

// get story
export const actGetStoryRequest = (id) => {
    return dispatch => {
        return callApi(`story/${id}`, 'GET', null).then(res => {
            dispatch(actGetStory(res.data));
        });
    };
}

export const actGetStory = (story) => {
    return {
        type : 'GET_STORY',
        story
    }
}
// edit story
export const actEditStoryRequest = (story) => {
    return dispatch => {
        return callApi(`story/${story.id}`, 'PUT', story).then(res => {
            // dispatch(actEditStory(story));
        });
    };
}

// export const actEditStory = (story) => {
//     return {
//         type : 'EDIT_STORY',
//         story
//     }
// }

export const actGetStoryByChapterIdRequest = (id) => {
    return dispatch => {
        return callApi(`story/chapter/${id}`, 'GET', null).then(res => {
            dispatch(actGetStoryByChapterId(res.data));
        });
    };
}

export const actGetStoryByChapterId = (story) => {
    return {
        type : 'GET_STORY_BY_CHAPTER',
        story
    }
}