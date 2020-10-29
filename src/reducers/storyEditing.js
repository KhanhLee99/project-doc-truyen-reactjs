const InitialState = {}
const storyEditing = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_STORY':
            state = action.story;
            return {...state}
        
        default:
            return state
    }
}
export default storyEditing;