const InitialState = {}

const authorEditing = (state = InitialState, action) => {
    switch (action.type) {
        case 'GET_AUTHOR':
            state = action.author;
            return {...state};

        default:
            return {...state}
    }
}

export default authorEditing;