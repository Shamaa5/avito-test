const initialState = {
    items: {},
    loading: false
}

const modalPhotoCommentsReduser = (state = initialState, actions) => {
    switch (actions.type) {
        case 'modal/load/start':
            return {
                ...state,
                loading: true,
            }
        case 'modal/load/success':
            return {
                ...state,
                loading: false,
                items: actions.payload
            }
        case 'comment/upload/start':
            return {
                ...state,
                loading: true,
            }
        case 'comment/upload/success':
            return {
                ...state,
                loading: false,
                items: {
                    ...state.items,
                    comments: [...state.items.comments, actions.payload]
                }

            }

        default:
            return state
    }
}
export default modalPhotoCommentsReduser